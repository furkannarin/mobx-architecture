import API from '../API';
import { Endpoints, Detail, AvailableOrders, ProcessOrder, OrderStatus, CheckItem, OrderInfo, OrderLevels } from '../types/Order.d';
import { HeaderOptions } from '@/components/types/LesList';
import { makeObservable, observable, action } from 'mobx';

class Order {
    @observable Details: Detail = null;
    @observable OrderInfo: OrderInfo[] = [];
    @observable BatchNumber: string = '';

    @observable AvailableOrders: AvailableOrders = null;
    @observable SelectedOrderId: string = '';
    @observable OrderStatus: OrderStatus = OrderStatus.STOPPED;
    @observable SplitOrder: string = '';

    constructor() {
        makeObservable(this);
    }

    @action private setOrderDetails = (details: Detail) => {
        this.Details = details;
    }

    @action private setOrderNumbers = (numbers: AvailableOrders) => {
        this.AvailableOrders = numbers;
    }

    @action setSelectedOrderId = (id: string) => {
        this.SelectedOrderId = id;
    }

    @action setOrderStatus = (isStarted: boolean) => {
        this.OrderStatus = isStarted ? OrderStatus.STARTED : OrderStatus.STOPPED;
    }

    @action getOrderInfo = () => {
        if (!this.Details || !this.Details.data) {
            this.OrderInfo = [];
            return;
        }

        this.OrderInfo = this.Details.data.map((detail, idx) => {
            if (idx === 0) this.BatchNumber = `Batch: ${detail.lotno}`;
            return ({
                line: detail.linid,
                itemCode: detail.prodid,
                packed: detail.qtycmp,
                asked: detail.qtyord
            });
        });
    }

    @action setSplitOrder = (orderSplit: string) => {
        this.SplitOrder = orderSplit;
    }

    // userflD1, keyval, packqty
    formatHierarchyData = () => {
        if (!this.Details || !this.Details.data) return [];

        const boxQty = 0;
        const shkQty = 0;
        const caseQty = 0;
        const pltQty = 0;

        const createObject = (level: OrderLevels, quantity: number, epcType: string) => ({
            [level]: {
                type: level,
                quantity: 0,
                epcType
            }
        });

        return this.Details.data.map(dtl => {
            if (dtl.userflD1 === OrderLevels.BOX) return createObject(dtl.userflD1, dtl.packqty, dtl.keyval);
            if (dtl.userflD1 === OrderLevels.SHRINK) return createObject(dtl.userflD1, dtl.packqty, dtl.keyval);
            if (dtl.userflD1 === OrderLevels.CASE) return createObject(dtl.userflD1, dtl.packqty, dtl.keyval);
            if (dtl.userflD1 === OrderLevels.PALETTE) return createObject(dtl.userflD1, dtl.packqty, dtl.keyval);
        });
    }

    getOrderDetails = async (order: Record<string, unknown>) => {
        const response: Detail = await API.fetch(Endpoints.Detail, order) as Detail;
        if (!response) {
            this.setOrderDetails(null);
            return;
        }
        this.setOrderDetails(response);
    };

    getOrderNumbers = async () => {
        const response: AvailableOrders = await API.fetch(Endpoints.AvailableOrders) as unknown as AvailableOrders;
        if (!response) {
            this.setOrderNumbers(null);
            return;
        }

        this.setOrderNumbers(response);
    };

    postProcessOrder = async (isStart: boolean, orderId: string) => {
        const endpoint = isStart ? `${Endpoints.StartOrder}?orderId=${orderId}` : `${Endpoints.StopOrder}?orderId=${orderId}`;
        const response: ProcessOrder = await API.post(endpoint, orderId) as unknown as ProcessOrder;
        this.setOrderStatus(isStart);
        this.setSplitOrder(response.data);
        return response;
    }

    postCheckItemCode = async (itemCode: string, orderId: string, materialId: string, userName: string) => {
        const response: CheckItem = await API.fetch(Endpoints.CheckItemCode, { itemCode, orderId, materialId, userName }) as unknown as CheckItem;
        return response;
    }
}

export default Order;
