import PortfolioPreviewTabs from "@/app/components/tabs/portfolioPreviewTabs"

export default function ViewPortfolio({ params }) {

    return (

        <>

            <div className="flex flex-col items-center justify-center h-screen md:flex-row">
                <PortfolioPreviewTabs id={params.id} />
            </div>


        </>

    )

}