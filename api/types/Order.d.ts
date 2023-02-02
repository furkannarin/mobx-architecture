export const Endpoints = {
    AvailableOrders: 'http://192.168.0.77:9973/Order/AvailableList',
    Detail: 'http://192.168.0.77:9973/Order/Detail',
    StartOrder: 'http://192.168.0.77:9973/Order/StartOrder',
    StopOrder: 'http://192.168.0.77:9973/Order/StopOrder',
    CheckItemCode: 'http://192.168.0.77:9973/Order/CheckItemCode'
};

export type OrderInfo = {
    line: string;
    itemCode: string;
    packed: number;
    asked: number;
}

export enum OrderStatus {
    STOPPED,
    STARTED,
}

export type ProcessOrder = {
    data: string,
    resultCode: number,
    isSuccess: boolean,
    messageKey: string | null,
    message: string | null,
    messageHeaderKey: string | null,
    messageHeader: string | null,
    exception: unknown,
    Error: unknown
}
export type CheckItem = {
    resultCode: number,
    isSuccess: string,
    messageKey: string | null,
    message: string | null,
    messageHeaderKey: string | null,
    messageHeader: string | null,
    exception: unknown,
}

export enum OrderLevels {
    BOX,
    SHRINK,
    CASE,
    PALETTE
}

export type details = {
    pntid: string,
    ordtyp: string,
    ordid: string,
    linid: string,
    matid: string,
    mattyp: string,
    matnam: string,
    opnam: string,
    confno: null, // NULL
    qtyord: number,
    qtystr: number,
    qtycmp: number,
    qtyscr: number,
    qtysam: number,
    qtyuom: string,
    macid: string,
    macgrp: string,
    prodid: string,
    lotno: string,
    expdat: string,
    company: string,
    prodsch: string,
    terpid: string,
    proddat: string,
    keyval: string,
    lstflg: null, // NULL
    nxtworid: null, // NULL
    nxtopid: null, // NULL
    durday: number,
    durtim: null, // NULL
    staid: string,
    credat: string,
    upddat: string,
    updlog: string,
    userflG1: null, // NULL
    userflG2: null, // NULL
    userflG3: null, // NULL
    userflG4: null, // NULL
    userflD1: OrderLevels,
    userflD2: string,
    userflD3: string,
    userflD4: string,
    nbremp: number,
    cntsplit: number,
    packuom: string,
    packqty: number,
    upduser: null, // NULL
    partkeyval: string,
    partitem: string,
    partqty: number,
    sitelocationpo: string,
    origin: string,
    staidtype: null, // NULL
    idfdcwordt: number
}

export type AvailableOrders = { data: string[] | null } | null
export type Detail = { data: details[] | null } | null
