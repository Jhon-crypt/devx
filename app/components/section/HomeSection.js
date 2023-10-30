'use client'
import { AiOutlineLink } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { Hanko } from "@teamhanko/hanko-elements";
import clipboardCopy from 'clipboard-copy';
import Link from "next/link";
import { useState, useEffect } from 'react';
import supabase from "@/app/supabase/supabase";
import { useRouter } from "next/navigation";

export default function HomeSection() {

    // Import necessary modules and functions
    const router = useRouter();

    // Initialize state variables for portfolios and loading state
    const [portfolios, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(false);

    // Use the useEffect hook to fetch user portfolios when the component mounts
    useEffect(() => {
        // Set the loading state to true while fetching data
        setLoading(true);

        // Define an async function to fetch user portfolios
        async function fetchPortfolio() {
            // Get the Hanko API URL from environment variables
            const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

            // Create a Hanko instance using the API URL
            const hanko = new Hanko(hankoApi);

            // Retrieve the current user's ID from Hanko
            const { id } = await hanko.user.getCurrent();

            try {
                // Fetch user portfolio data from an external source (e.g., Supabase)
                const { data: portfolio, error } = await supabase
                    .from('portfolio')
                    .select('*')
                    .eq('user_id', `${id}`);

                if (portfolio) {
                    // If portfolio data is available, check if there are any portfolios
                    if (portfolio.length === 0) {
                        // If no portfolios exist, redirect the user to a creation page and refresh the router
                        router.push("/Create");
                        router.refresh();
                    }

                    // Update the state variable with the fetched portfolio data
                    setPortfolio(portfolio);

                    // Set the loading state to false after data is loaded
                    setLoading(false);
                } else if (error) {
                    // Handle any errors, if encountered
                    setLoading(false);
                }
            } catch (error) {
                // Handle errors that occur during data fetching
                setLoading(false);
            }
        }

        // Call the fetchPortfolio function when the component mounts
        fetchPortfolio();
    }, []);

    // Define a function to copy a link to the clipboard
    const copyToClipBoard = async (id) => {
        // Use clipboardCopy to copy a URL to the clipboard
        clipboardCopy(`https://devxx.vercel.app/dev/${id}`);

        // Show an alert to indicate that the link has been copied to the clipboard
        alert("Link copied to clipboard");
    }



    return (

        <>

            <div class="px-6 pt-6 2xl:container">

                {loading ?
                    <>

                        <div className="flex justify-center mt-20">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>

                    </>
                    :
                    <>

                        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {portfolios.map((portfolio) => (
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

                    </>
                }


            </div>




        </>

    )

}
