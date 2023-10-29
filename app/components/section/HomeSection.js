'use client'
import { useState, useEffect } from "react"
import { AiOutlineLink, AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { Hanko } from "@teamhanko/hanko-elements";
import clipboardCopy from 'clipboard-copy';
import Link from "next/link";

export default function HomeSection() {

    const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
    const hanko = new Hanko(hankoApi);


    const [portfolio, setPortfolio] = useState([])

    const [loading, setLoading] = useState(false)

    const [deleteLoading, setDeleteLoading] = useState(false)
    const [deleteStatus, setDeleteStatus] = useState(false)
    const [deleteErrorStatus, setDeleteErrorStatus] = useState(false)

    useEffect(() => {

        async function fetchPortfolio() {
            try {

                const { id } = await hanko.user.getCurrent();

                setLoading(true)

                let { data: portfolios, error } = await supabase
                    .from('portfolio')
                    .select('*')
                    .eq("user_id", `${id}`)


                if (portfolios) {

                    if (portfolios.length === 0) {
                        window.location.href = '/Create';
                    } else {

                        // Setting the portfolio state variable to the portfolio data
                        setPortfolio(portfolios)

                        // Setting the loading state variable to false
                        setLoading(false)

                    }

                } else {

                    console.log(error)

                }
            } catch (error) {
                setLoading(false)
            }
        }


        fetchPortfolio()
    }, [])

    const copyToClipBoard = async (id) => {

        clipboardCopy(`https://devxx.vercel.app/portfolio/${id}`);

        alert("Link copied to clipboard")

    }

    const deleteSelectedPortfolio = async (id) => {

        try {

            setDeleteLoading(true)

            const { error } = await supabase
                .from('portfolio')
                .delete()
                .eq('portfolio_id', "6d45e510-1c48-401c-953d-2107d77425d5")

            if (error) {

                console.log(error)

                setDeleteLoading(false)

                setDeleteErrorStatus(true)

            } else {

                console.log("Deleted")

                setDeleteLoading(false)
                setDeleteStatus(true)

                setPortfolio(portfolio.filter((x) => x.id != id))


            }

        } catch (error) {



        }


    }


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
                                                    src="/img/code2.svg"
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


                                            </div>

                                            <div class="group mt-8 inline-flex flex-wrap items-center gap-3">

                                                <span onClick={() => copyToClipBoard(portfolio.portfolio_id)} class="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                                                >
                                                    <AiOutlineLink class="h-5 w-5" />
                                                </span>
                                                <span class="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                                                >
                                                    <Link href={`/editPortfolio/${portfolio.portfolio_id}`}>
                                                        <BiSolidEdit class="h-5 w-5" />
                                                    </Link>
                                                </span>
                                                {/*Delete button
                                                <span onClick={() => deleteSelectedPortfolio(portfolio.portfolio_id)} class="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                                                >
                                                    <AiFillDelete class="h-5 w-5" />
                                                </span>
                                                */}



                                            </div>
                                        </div>
                                        <div class="p-6 pt-3">
                                            <Link href={`/dev/${portfolio.portfolio_id}`}
                                                class="block w-full select-none rounded-lg border border-indigo-500 py-3.5 px-7 text-center font-sans text-sm font-bold uppercase text-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/40 transition-all focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                type="button"
                                                data-ripple-light="true"
                                            >
                                                View Portfolio
                                            </Link>

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
