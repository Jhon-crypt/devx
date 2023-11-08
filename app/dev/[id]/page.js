import PortfolioPreviewTabs from "@/app/components/tabs/portfolioPreviewTabs"

export default function ViewPortfolio({ params }) {

    return (

        <>

          
            <div className="h-100" style={{ "background-image": "url('/img/bg.jpg')" }}>
                <div className="flex flex-col items-center justify-center h-screen md:flex-row backdrop-blur-sm">
                    <PortfolioPreviewTabs id={params.id} />
                </div>
            </div>
            

            {/*}
            <div className="flex flex-col items-center justify-center h-screen md:flex-row">
                <div class="w-full bg-[url('/img/bg.jpg')] bg-cover bg-center">
                    <PortfolioPreviewTabs id={params.id} />
                </div>
            </div>
            {*/}
        </>

    )

}
