import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export function NavigationLinks() {
    return (
        <Menubar>
            <MenubarMenu>
            <MenubarTrigger><Link href={'/'}>start</Link></MenubarTrigger>
                <MenubarTrigger><Link href={'/login'}>log in</Link></MenubarTrigger>
                <MenubarTrigger><Link href={'/signup'}>sign up</Link></MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}
