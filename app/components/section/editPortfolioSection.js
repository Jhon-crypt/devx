'use client'
import EditPortfolioTabs from '../../components/tabs/editPortfolioTabs.js'
import { useState, useEffect } from 'react';
import PortfolioPreviewTabs from '../tabs/portfolioPreviewTabs.js';
import { AiFillQuestionCircle } from 'react-icons/ai'

export default function EditPortfolioSection(props) {


    const [elementVisible, setElementVisible] = useState(true);

    // Simulate a change in element visibility
    useEffect(() => {
        // This is just an example. You can replace this with your logic for detecting element visibility.
        const checkElementVisibility = () => {
            const element = document.getElementById('hideMockUp');
            const isVisible = element && window.getComputedStyle(element).display !== 'none';
            setElementVisible(isVisible);
        };

        // Call the visibility check function when the component mounts and periodically
        checkElementVisibility();
        const interval = setInterval(checkElementVisibility, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (

        <>

            <section class="text-gray-600 body-font relative">
                <div class="container px-5 pt-6 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div id="hideMockUp" class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 ">
                        <div class="mb-4 flex items-start justify-start justify-center relative">
                            <PortfolioPreviewTabs id={props.id} />
                        </div>

                    </div>


                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div class="mb-3 flex justify-between items-center">
                            <div className="flex items-center">
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Edit Portfolio</h2>
                                <div className="tooltip" data-tip="Switch between the tabs on the left to see live chnges">
                                    <AiFillQuestionCircle className="text-gray-500 ml-2" />
                                </div>
                            </div>
                            {elementVisible ? (
                                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                    Full preview
                                </button>
                            ) : (
                                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                    Preview
                                </button>
                            )}
                        </div>

                        <EditPortfolioTabs id={props.id} />
                        {/*}
                        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        {*/}
                    </div>
                </div>
            </section>

        </>

    )

}