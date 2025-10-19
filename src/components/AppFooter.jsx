import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import { UserContext } from '../B2C/Context/UserContext';

// This is a reusable component for each tab in the footer.
const FooterTab = ({ isActive, label, icon, onPress }) => {
    const animation = useSharedValue(isActive ? 1 : 0);

    useEffect(() => {
        animation.value = withTiming(isActive ? 1 : 0, { duration: 250 });
    }, [isActive, animation]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const size = interpolate(animation.value, [0, 1], [24, 28], Extrapolate.CLAMP);
        return {
            fontSize: size,
            color: withTiming(isActive ? '#8a2be2' : '#000'),
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const size = interpolate(animation.value, [0, 1], [12, 14], Extrapolate.CLAMP);
        return {
            fontSize: size,
            color: withTiming(isActive ? '#1f75bcff' : '#ffffffff'),
            fontWeight: isActive ? 'bold' : 'normal',
        };
    });

    return (
        <TouchableOpacity style={styles.footerButton} onPress={onPress}>
            <Animated.Text style={animatedIconStyle}>{icon}</Animated.Text>
            <Animated.Text style={animatedTextStyle}>{label}</Animated.Text>
        </TouchableOpacity>
    );
};

const AppFooter = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { username } = useContext(UserContext); // Assuming UserContext is defined

    const [activeTab, setActiveTab] = useState('Home');

    useEffect(() => {
        // Correctly set the active tab based on the current route
        if (route.name === 'HomeB2C') {
            setActiveTab('Home');
        } else if (route.name === 'Products') {
            setActiveTab('Products');
        } else if (route.name === 'Orders') {
            setActiveTab('Orders');
        } else if (route.name === 'Returns') {
            setActiveTab('Returns');
        } else if (route.name === 'Payments') {
            setActiveTab('Payments');
        }
        else if (route.name === 'Offers') {
            setActiveTab('Offers');
        }
    }, [route.name]);

    const handlePress = (tabName, routeName) => {
        setActiveTab(tabName);
        navigation.navigate(routeName);
    };

    return (
        <View style={styles.footer}>
            <FooterTab
                isActive={activeTab === 'Products'}
                label="Products"
                icon="🛍️"
                onPress={() => handlePress('Products', 'Products')}
            />
            <FooterTab
                isActive={activeTab === 'Orders'}
                label="Orders"
                icon="📦"
                onPress={() => handlePress('Orders', 'Orders')}
            />
            <FooterTab
                isActive={activeTab === 'Home'}
                label="Home"
                icon="🏠"
                onPress={() => handlePress('Home', 'HomeB2C')}
            />
            <FooterTab
                isActive={activeTab === 'Returns'}
                label="Returns"
                icon="🔄"
                onPress={() => handlePress('Returns', 'Returns')}
            />
            {username === 'Business' && (
                <FooterTab
                    isActive={activeTab === 'Payments'}
                    label="Payments"
                    icon="💳"
                    onPress={() => handlePress('Payments', 'Payments')}
                />
            )}
            {username === 'Customer' && (
                <FooterTab
                    isActive={activeTab === 'Offers'}
                    label="Offers"
                    icon="🎉"
                    onPress={() => handlePress('Offers', 'Offers')}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#001f5cea',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingVertical: 12,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    footerButton: { alignItems: 'center', flex: 1 },
});

export default AppFooter;