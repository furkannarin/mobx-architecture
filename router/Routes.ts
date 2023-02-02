import ScreenOptions from './ScreenOptions';
import { StackNavigationOptions } from '@react-navigation/stack';

import ProductionOrder from '@/screens/LesProductionOrder';
import LesHome from '@/screens/LesHome';
import LesOrderInfo from '@/screens/LesOrderInfo';
import LesAggregation from '@/screens/LesAggregation';
import LesScanner from '@/screens/LesScanner';

type Route = {
    name: string;
    component: any, // ideally, this should be ScreenComponentType but react-navigation does not export that. As long as you pass a component to this field you are fine
    options?: StackNavigationOptions
}

export const enum Screens {
    HOME = 'LesHome',
    PRODUCTION = 'Production Order',
    ORDER_INFO = 'Les Order Info',
    AGGREGATION = 'Aggregation',
    LESSCANNER = 'LesScanner'
}

export const INITIAL_ROUTE = 'LesHome';

export const Routes: Record<Screens, Route> = {
    LesHome: { name: 'LesHome', component: LesHome, options: { headerShown: false } },
    'Production Order': { name: 'Production Order', component: ProductionOrder },
    'Les Order Info': { name: 'Les Order Info', component: LesOrderInfo, options: ScreenOptions.OrderInfo },
    Aggregation: { name: 'Aggregation', component: LesAggregation, options: ScreenOptions.Aggregation },
    LesScanner: { name: 'LesScanner', component: LesScanner, options: ScreenOptions.Scanner }
};
