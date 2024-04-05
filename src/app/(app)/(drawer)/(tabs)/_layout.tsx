import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { Tabs, useNavigation } from 'expo-router';
import { Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Box } from '@/components/ui/box';

const DrawerIcon = ({ color }) => {
    const navigation = useNavigation();

    // @ts-ignore: Unreachable code error
    const open = () => navigation.openDrawer();

    return (
        <Pressable onPress={() => open()}>
            <Box className='px-4'>
                <Feather size={24} name="menu" color={color} />
            </Box>
        </Pressable>
    )
}

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerLeft: ({ tintColor }) => <DrawerIcon color={tintColor} />,
            tabBarActiveTintColor: 'blue'
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Feather size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="friends"
                options={{
                    title: 'Friends',
                    tabBarIcon: ({ color }) => <Feather size={28} name="users" color={color} />,
                }}
            />
        </Tabs >
    );
}
