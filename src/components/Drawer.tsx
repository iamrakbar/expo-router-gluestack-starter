import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import { Linking } from "react-native";
import { Box } from "./ui/box";
import { Divider } from "./ui/divider";
import { useSession } from "@/utils/ctx";

export default function Drawer(props) {
    const { signOut } = useSession();

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Home"
                icon={({ focused, color, size }) => <Feather color={color} size={size} name='home' />}
                onPress={() => { }}
            />
            <DrawerItem
                label="Profile"
                icon={({ focused, color, size }) => <Feather color={color} size={size} name='user' />}
                onPress={() => { }}
            />
            <DrawerItem
                label="Settings"
                icon={({ focused, color, size }) => <Feather color={color} size={size} name='settings' />}
                onPress={() => { }}
            />
            <DrawerItem
                label="Help"
                icon={({ focused, color, size }) => <Feather color={color} size={size} name='help-circle' />}
                onPress={() => { }}
            />
            <Divider />
            <DrawerItem
                label="Log out"
                icon={({ focused, color, size }) => <Feather color={color} size={size} name='log-out' />}
                onPress={() => signOut()}

            />
        </DrawerContentScrollView>
    );
}