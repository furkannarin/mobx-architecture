import { useState } from 'react';
import Order from '@/api/services/Order';
import Barcode from '@/api/services/Barcode';

const useServices = () => {
    const [services] = useState({
        Orders: new Order(),
        Barcode: new Barcode()
    });

    return services;
};

const Stores = useServices();

export default Stores;
