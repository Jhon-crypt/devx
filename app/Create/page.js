import SidebarHeader from "../components/header/sidebarHeader"
import StickyHeader from "../components/header/stickyHeader"
import CreatePortfolio from "../components/section/createPortfolioSection"

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