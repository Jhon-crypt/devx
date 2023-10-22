'use client'
import { useState, useEffect } from "react"
import { AiFillGithub, AiOutlineShareAlt, AiFillDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { BiSolidEdit } from "react-icons/bi";

export default function HomeSection() {

    const [portfolio, setPortfolio] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function fetchPortfolio() {
            try {
            
            setLoading(true)

            // Fetching portfolio data from the API endpoint
            const response = await fetch(`/api/fetchAllPortfolio?user_id=testin`)

            // Parsing the response data as JSON
            const data = await response.json()

            // If there are no portfolios, redirect to the Create page
            if (data.portfolios.length === 0) {
                window.location.href = '/Create';
            }

            // Setting the portfolio state variable to the portfolio data
            setPortfolio(data.portfolios)

            // Logging the portfolio data to the console
            console.log(data.portfolios)

            // Setting the loading state variable to false
            setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }


        fetchPortfolio()
    }, [])

    return (

        <>
            {/*} Conditional rendering based on the value of the loading state variable{*/}
            {loading ?
                
                <>
                    {/*}If loading is true, render a loading spinner{*/}
                    <div className="flex justify-center mt-20">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>

                </>
                :
                <>
                    {/*}If loading is false, render the portfolio items{*/}
                
                    <div class="px-6 pt-6 2xl:container">

                        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {portfolio.map((portfolio) => (
                                <div key={portfolio.id}>

                                    <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                            <div className="h-40">

                                                <img
                                                    src={`${portfolio["cover-image-link"]}`}
                                                    alt="ui/ux review check"
                                                    class="object-cover w-full h-full"
                                                />

                                            </div>



                                        </div>
                                        <div class="p-6">
                                            <div class="mb-3 flex items-center justify-between">
                                                <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                    {portfolio.name}
                                                </h5>
                                                <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                                    <GrView

                                                        class="-mt-0.5 h-5 w-5 text-yellow-700"
                                                    />
                                                    100
                                                </p>
                                            </div>

                                            <div class="group mt-8 inline-flex flex-wrap items-center gap-3">
                                                <span class="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                                                >
                                                    <AiFillGithub class="h-5 w-5" />
                                                </span>
                                                <span class="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                                                >
                                                    <AiOutlineShareAlt class="h-5 w-5" />
                                                </span>
                                                <span class="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                                                >
                                                    <BiSolidEdit class="h-5 w-5" />
                                                </span>
                                                <span class="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                                                >
                                                    <AiFillDelete class="h-5 w-5" />
                                                </span>



                                            </div>
                                        </div>
                                        <div class="p-6 pt-3">
                                            <button
                                                class="block w-full select-none rounded-lg border border-indigo-500 py-3.5 px-7 text-center font-sans text-sm font-bold uppercase text-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/40 transition-all focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                type="button"
                                                data-ripple-light="true"
                                            >
                                                View Portfolio
                                            </button>

                                        </div>
                                    </div>


                                    <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>

                                </div>
                            ))}
                            {/*}End of col{*/}

                        </div>
                    </div>

                </>

            }

        </>

    )

}