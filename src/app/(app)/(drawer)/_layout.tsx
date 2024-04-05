import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@/components/Drawer';

export default function DrawerLayout() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawer {...props} />} />
        </GestureHandlerRootView>
    );
}
