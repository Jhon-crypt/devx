'use client'
import dynamic from 'next/dynamic';
const SidebarHeader = dynamic(() => import('../components/header/sidebarHeader'), { ssr: false })
const StickyHeader = dynamic(() => import('../components/header/stickyHeader'), { ssr: false })
const CreatePortfolio = dynamic(() => import('../components/section/createPortfolioSection'), { ssr: false })

export default function Create() {

    return (

        <>

            <SidebarHeader />

            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <StickyHeader title="Create Portfolios" />

                <CreatePortfolio />

            </div>

        </>

    )

}