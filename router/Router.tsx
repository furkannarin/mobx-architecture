import { Routes, INITIAL_ROUTE } from './Routes';
import { StatusBar } from 'react-native';
import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppTheme from '@/styles/AppTheme';

const { Screen, Navigator } = createStackNavigator();

let navigationRef: any = null;
export const NavigateToRoute = (route: string, routeParams?: Record<string, unknown>) => {
    if (!navigationRef) return console.warn('No navigation ref was found while navigating!');
    return navigationRef.navigate(route, routeParams);
};

export const getNavigationRef = () => {
    if (!navigationRef) return console.warn('No navigation ref was found!');
    return navigationRef;
};

export const NavigateBack = () => {
    if (!navigationRef) return console.warn('No navigation ref was found while navigating!');
    return navigationRef.goBack();
};

export const GetActiveScreen = () => {
    if (!navigationRef) return console.warn('No navigation ref was found!');
    return navigationRef.getCurrentRoute();
};

const CreateScreens = (): ReactNode[] => {
    const screens: ReactNode[] = [];
    for (const [key, route] of Object.entries(Routes)) {
        screens.push(<Screen key={key} name={route.name} component={route.component} options={route.options} />);
    }

    return screens;
};

const Router = () => {
    navigationRef = useNavigation();
    return (
        <React.Fragment>
            <StatusBar backgroundColor={AppTheme.colors.green.dark} />
            <Navigator initialRouteName={INITIAL_ROUTE}>
                {CreateScreens()}
            </Navigator>
        </React.Fragment>
    );
};

export default Router;
