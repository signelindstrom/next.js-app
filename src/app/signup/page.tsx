import { ProfileForm } from '@/components/signupForm'
import { NavigationLinks } from "@/components/navbar"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NavigationLinks></NavigationLinks>
            <ProfileForm></ProfileForm>
        </main>
    )
}