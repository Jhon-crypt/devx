import PortfolioCards from "../cards/portfolioCards"

export default function HomeSection() {

    return (

        <>


            <div class="px-6 pt-6 2xl:container">
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div >
                        <PortfolioCards image="/img/dev1.svg"/>
                    </div>
                    <div>
                        <PortfolioCards image="/img/dev2.svg"/>
                    </div>
                    <div>
                        <PortfolioCards image="/img/dev3.svg"/>
                    </div>
                </div>
            </div>


        </>

    )

}