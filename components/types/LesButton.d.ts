import { ImageSourcePropType, ColorValue } from 'react-native';
import AppTheme from '@/styles/AppTheme';

export enum ButtonColor {
    ERROR = AppTheme.colors.red,
    SUCCESS = AppTheme.colors.green.regular,
    WAIT = AppTheme.colors.orange
}

export enum ContainerDirection {
    Column = 'column',
    Row = 'row'
}

type NavigateTo = {
    route: string; // this should be a literal instead of string
    routeParams?: Record<string, unknown>;
}

export type Props = {
    onPress: (...args: any[]) => any;
    title: string;
    isNavButton?: boolean;
    navigateTo?: NavigateTo;
    showLoading?: boolean;
    direction?: ContainerDirection;
    blackText?: boolean;
    color?: ColorValue;
    opacity?: number;
    icon?: ImageSourcePropType;
    renderIconBelowOrRight?: boolean;
    btnActionSuccess?: boolean;
    widthMultiplier?: number;
}
