import SidebarHeader from "../components/header/sidebarHeader"
import StickyHeader from "../components/header/stickyHeader"
import EditPortfolioSection from '../components/section/editPortfolioSection'

export default function EditPortfolio() {

    return (

        <>

            <SidebarHeader />

            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <StickyHeader title="Edit portfolio" />

                <EditPortfolioSection />

            </div>

        </>

    )

}