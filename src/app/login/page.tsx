import { ProfileForm } from '@/components/loginForm'
import { NavigationLinks } from "@/components/navbar"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <NavigationLinks></NavigationLinks>
            <ProfileForm></ProfileForm>
        </main>
    )
}

// async function getData() {
//     const res = await fetch('')

//     if (!res.ok){
//         throw new Error('failed to fetch data')
//     }

//     return res.json()
// }

// export default async function Page(){
//     const data = await getData()

//     return <main></main>
// }