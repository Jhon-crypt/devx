"use client"
import PortfolioPreviewTabs from "../tabs/portfolioPreviewTabs"

export default function PortfolioPreviewModal(props) {

    return (

        <>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Preview</h3>
                    <div>
                        <PortfolioPreviewTabs id={props.id} />
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>

        </>

    )

}