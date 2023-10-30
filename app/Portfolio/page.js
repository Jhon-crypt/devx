'use client'
export const dynamic = "force-dynamic";
const HomeSection = dynamic(() => import('../components/section/HomeSection'), { ssr: false })
const SidebarHeader = dynamic(() => import('../components/header/sidebarHeader'), { ssr: false })
const StickyHeader = dynamic(() => import('../components/header/stickyHeader'), { ssr: false })
import { Suspense } from "react";

export default function Home() {

    return (

        <>

            <SidebarHeader />

            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <StickyHeader title="Your Portfolios" />

                <Suspense fallback={
                    <div className="flex justify-center mt-20">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                    }>
                    <HomeSection />
                </Suspense>

            </div>


        </>

    )

}