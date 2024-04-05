import "../global.css";
import { Slot } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SessionProvider } from "@/utils/ctx";

export default function Layout() {
    return (
        <SessionProvider>
            <GluestackUIProvider>
                <Slot />
            </GluestackUIProvider>
        </SessionProvider>
    );
}
