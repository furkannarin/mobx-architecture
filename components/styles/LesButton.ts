import { StyleSheet, ColorValue } from 'react-native';
import AppTheme from '@/styles/AppTheme';

import { ContainerDirection, ButtonColor } from '@/components/types/LesButton.d';

const { device, font, borders, colors } = AppTheme;

type ButtonStyleOptions = {
    blackText?: boolean;
    color?: ColorValue;
    direction?: ContainerDirection;
    btnActionSuccess?: boolean;
    widthMultiplier?: number;
}

const getColor = (isSuccessful: boolean | undefined): ColorValue | undefined => {
    if (isSuccessful === undefined) return undefined;
    if (isSuccessful) return ButtonColor.SUCCESS as unknown as ColorValue;
    if (!isSuccessful) return ButtonColor.ERROR as unknown as ColorValue;
    return ButtonColor.WAIT as unknown as ColorValue;
};

export const Style = (options: ButtonStyleOptions) => StyleSheet.create({
    defaultContainer: {
        flexDirection: options.direction || 'column',
        width: device.width * (options.widthMultiplier || 0.9),
        height: device.height * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: borders.radius.square,
        backgroundColor: options.color || getColor(options.btnActionSuccess) || colors.orange
    },
    navContainer: {
        flexDirection: options.direction || 'column',
        width: device.width * 0.5,
        height: device.height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: borders.width.thin,
        borderColor: colors.white,
        backgroundColor: options.color || colors.orange
    },
    titleStyle: {
        fontSize: font.size.header,
        fontWeight: font.weight.regular,
        color: options.blackText ? colors.black : colors.white,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    iconStyle: {
        width: 35,
        height: 35,
        borderRadius: borders.radius.smooth
    }
});
