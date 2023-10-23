"use client"
import { useState } from 'react';

//import supabase from "@/app/supabase/supabase";

export default function ProfileForm(props) {

    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);

    async function updateName(event) {

        event.preventDefault();

        setLoading(true);

        try {

            const update_name_data = {
                updated_name: String(event.target.name.value),
            }


            const { data, error } = await supabase
                .from('portfolio')
                .update({ ["user-name"]: `${update_name_data.updated_name}` })
                .eq('portfolio-id', 'someValue')
                .select()

            if(error){



            }

            setLoading(false)

        } catch (error) {

            setLoading(false)

        }

    }

    return (

        <>

            <div class="relative mb-4">
                <form onSubmit={updateName}>
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input
                        placeholder="Oladele John"
                        type="text"
                        id="name"
                        name="name"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {loading ?

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Updating name...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Update name
                            </button>
                        </>

                    }
                </form>
            </div>

            <hr />

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Display picture</label>
                <input type="file" className="mb-3 file-input file-input-bordered file-input-sm w-full max-w-xs" />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update display picture
                </button>
            </div>

            <hr />

            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Title</label>
                <input
                    placeholder="Front-end developer"
                    type="text"
                    id="email"
                    name="email"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {loading ?

                    <>
                        <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                            Updating title...
                        </button>
                    </>
                    :
                    <>
                        <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                            Update title
                        </button>
                    </>

                }

            </div>

            <hr />

            <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">About you</label>
                <textarea
                    id="message"
                    name="message"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update about
                </button>
            </div>

        </>

    )

}