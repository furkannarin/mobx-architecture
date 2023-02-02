import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

const AppTheme = {
    device: {
        width,
        height
    },
    defaultOpacity: 0.9,
    font: {
        size: {
            header: 24,
            subheader: 20,
            text: 18,
            info: 12
        },
        weight: {
            bold: '800' as '800',
            regular: '400' as '400',
            light: '200' as '200'
        }
    },
    colors: {
        green: {
            regular: '#23AD27',
            dark: '#024240',
            light: '#42C246'
        },
        gray: {
            light: '#616161',
            dark: '#333333'
        },
        blue: {
            regular: '#0B2E59',
            dark: '#1C658C',
            light: '#559CE4'
        },
        white: '#FFFFFF',
        black: '#000000',
        red: '#FA0000',
        purple: '#1C0126',
        orange: '#ED850E',
        yellow: '#DEDC00'
    },
    borders: {
        width: {
            thin: 0.8,
            regular: 1.5,
            thick: 2
        },
        radius: {
            circle: 100,
            smooth: 10,
            square: 3
        }
    }
};

// commonly used styles to prevent copy-paste code
export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.colors.gray.dark,
        padding: width * 0.05,
        paddingBottom: width * 0.025,
        paddingTop: width * 0.025
    },
    flexRow: {
        flexDirection: 'row'
    }
});

export default AppTheme;
