'use client'
import dynamic from 'next/dynamic';
const SidebarHeader = dynamic(() => import('../components/header/sidebarHeader'), { ssr: false })
const StickyHeader = dynamic(() => import('../components/header/stickyHeader'), { ssr: false })
const HankoProfile = dynamic(() => import('../components/section/settingsSection'), { ssr: false })
export default function Settings() {

    return (

        <>

            <SidebarHeader />

            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <StickyHeader title="Settings" />

                <div className="flex justify-center mt-20">
                    <HankoProfile />
                </div>

            </div>

        </>

    )

}