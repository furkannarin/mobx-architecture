import React from 'react';
import { View, Text } from 'react-native';
import LesButton from '@/components/LesButton';

import { Screens } from '@/router/Routes';
import { Translations } from '@/translation';

import AppTheme, { commonStyles } from '@/styles/AppTheme';
import { Style } from '@/styles/LesHome';
// import { broadcastReceiver } from '@/scanner/DataWadge';
// import useServices from '@/hooks/useServices';

const { header, logo } = Style;
const { EN } = Translations;

const LesHome = () => {
    // const { Barcode } = useServices;

    // React.useEffect(() => {
    //     const deviceEmitterSubscription = DeviceEventEmitter.addListener('datawedge_broadcast_intent', intent => {
    //         const result = broadcastReceiver(intent);
    //         console.log(result?.scannedNumber, "HOME");
    //         if (result)
    //         // Barcode.setBarcodeNumber(result.scannedNumber); // log the result to see what we receive
    //     });
    //     return () => deviceEmitterSubscription.remove();
    // }, []);
    return (
        <View style={{ ...commonStyles.container, padding: 0 }}>
            <View style={header}>
                <Text style={logo}>Advanco</Text>
                <LesButton title={EN.logout} onPress={() => { }} color={AppTheme.colors.red} widthMultiplier={0.3} />
            </View>
            <View style={commonStyles.flexRow}>
                <LesButton title={EN.home.productionOrder} navigateTo={{ route: Screens.PRODUCTION }} onPress={() => { }} color={AppTheme.colors.green.dark} isNavButton />
                <LesButton title={EN.home.aggregation} navigateTo={{ route: Screens.AGGREGATION }} onPress={() => { }} color={AppTheme.colors.blue.regular} isNavButton />
            </View>
            <View style={commonStyles.flexRow}>
                <LesButton title={EN.home.outbound} onPress={() => { }} color={AppTheme.colors.gray.dark} isNavButton />
                <LesButton title={EN.home.log} onPress={() => { }} color={AppTheme.colors.gray.light} isNavButton />
            </View>
        </View>
    );
};

export default LesHome;
