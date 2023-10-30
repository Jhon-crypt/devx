'use client'
import { Hanko } from "@teamhanko/hanko-elements";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePortfolio() {

    // Import necessary modules and functions
    const router = useRouter();

    // Initialize state variables for loading, status, and error handling
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);

    // Get the Hanko API URL from environment variables and create a Hanko instance
    const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
    const hanko = new Hanko(hankoApi);

    // Define a function to create a new portfolio
    async function createPortfolio(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Set the loading state to true while processing the form submission
        setLoading(true);

        try {
            // Get the current user's ID using Hanko
            const { id } = await hanko.user.getCurrent();

            // Prepare the data for creating a new portfolio
            const create_portfolio_data = {
                portfolio_title: String(event.target.name.value),
                user_id: `${id}`
            }

            // Send a POST request to the server (API) to create a new portfolio
            const response = await fetch('/api/createPortfolio', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(create_portfolio_data),
            });

            // Parse the response data
            const data = await response.json();

            if (data.status === 201) {
                // If the portfolio creation is successful

                // Update the status state to indicate success
                setStatus(true);

                // Reset the error state
                setError(false);

                // Set the loading state to false
                setLoading(false);

                // Redirect the user to the edit portfolio page
                router.push(`/editPortfolio/${data.id}`);
                router.refresh();
            } else {
                // If the portfolio creation is not successful

                // Update the error state to indicate an error
                setError(true);

                // Reset the status state
                setStatus(false);

                // Set the loading state to false
                setLoading(false);
            }
        } catch (error) {
            // Handle errors that may occur during the portfolio creation process

            // Update the error state to indicate an error
            setError(true);

            // Reset the status state
            setStatus(false);

            // Set the loading state to false
            setLoading(false);
        }
    }


    return (

        <>

            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 pt-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/img/createdev1.svg" />
                        <div class="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Create portfolio</h2>
                            <form onSubmit={createPortfolio}>
                                <div class="relative mb-4">
                                    <label for="name" class="leading-7 text-sm text-gray-600">What do you wanna name your portfolio</label>
                                    <input required type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>

                                {status ?
                                    <>
                                        <div className="alert alert-success mb-4 text-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span>Portfolio Created, chill while we redirect you</span>
                                        </div>
                                    </>

                                    :

                                    <></>
                                }

                                {error ?
                                    <>
                                        <div className="alert alert-error mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span>Error!, while creating portfolio.</span>
                                        </div>
                                    </>

                                    :

                                    <></>
                                }



                                <div class="flex justify-center">
                                    {loading ?

                                        <>

                                            <button type="submit" class="text-white btn btn-wide bg-indigo-500 opacity-50 cursor-not-allowed" disabled>

                                                <span className="loading loading-spinner loading-lg"></span>

                                            </button>

                                        </>
                                        :
                                        <>

                                            <button type="submit" className="text-white btn btn-wide bg-indigo-500">
                                                Create
                                            </button>

                                        </>
                                    }
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}