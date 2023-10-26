import dynamic from 'next/dynamic';
import SidebarHeader from "../components/header/sidebarHeader"
import StickyHeader from "../components/header/stickyHeader"
const CreatePortfolio = dynamic(() => import('../components/section/createPortfolioSection'), { ssr: true })

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