import HomeSection from "../components/section/HomeSection"
import SidebarHeader from "../components/header/sidebarHeader"
import StickyHeader from "../components/header/stickyHeader"

export default function Home() {

    return (

        <>

            <SidebarHeader />

            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

                <StickyHeader title="Your Portfolios"/>

                <HomeSection />

            </div>


        </>

    )

}