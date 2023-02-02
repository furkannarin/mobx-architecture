import { Style } from './styles/LesButton';
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';

import AppTheme from '@/styles/AppTheme';

import { Props } from '@/components/types/LesButton.d';

import { NavigateToRoute } from '@/router/Router';

const LesButton = (props: Props) => {
    const {
        onPress,
        title,
        isNavButton,
        navigateTo,
        opacity,
        icon,
        showLoading,
        renderIconBelowOrRight,
        btnActionSuccess,
        color,
        direction,
        widthMultiplier,
        blackText
    } = props;

    const { defaultContainer, navContainer, titleStyle, iconStyle } = Style({ blackText, color, btnActionSuccess, direction, widthMultiplier });

    const handlePress = () => {
        onPress();
        if (navigateTo?.route) NavigateToRoute(navigateTo.route, navigateTo.routeParams);
    };

    const containerStyle = isNavButton ? navContainer : defaultContainer;

    return (
        <TouchableOpacity
            disabled={showLoading}
            onPress={handlePress}
            activeOpacity={opacity || AppTheme.defaultOpacity}
            style={containerStyle}
        >
            {
                !showLoading
                    ? (
                        <React.Fragment>
                            {icon && !renderIconBelowOrRight && <Image source={icon} style={iconStyle} />}
                            <Text style={titleStyle}>{title}</Text>
                            {icon && renderIconBelowOrRight && <Image source={icon} style={iconStyle} />}
                        </React.Fragment>
                    ) : (
                        <ActivityIndicator size="large" color="white" />
                    )
            }
        </TouchableOpacity>
    );
};

export default LesButton;
