import { Redirect, Stack } from 'expo-router';

import { Text } from '@/components/ui/text';
import { useSession } from '@/utils/ctx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@/components/Drawer';

export default function AppLayout() {
    const { session, isLoading } = useSession();

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/sign-in" />;
    }

    // This layout can be deferred because it's not the root layout.
    return (
        <Stack>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
    );
}
