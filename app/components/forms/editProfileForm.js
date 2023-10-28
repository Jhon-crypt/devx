"use client"
import { useState } from 'react';

import supabase from "@/app/supabase/supabase";

export default function ProfileForm(props) {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);

    const [updateTitleLoading, setUpdateTitleLoading] = useState(false);
    const [updateTitleStatus, setUpdateTitleStatus] = useState(false);
    const [updateTitleError, setUpdateTitleError] = useState(false);

    const [updateAboutLoading, setUpdateAboutLoading] = useState(false);
    const [updateAboutStatus, setUpdateAboutStatus] = useState(false);
    const [updateAboutError, setUpdateAboutError] = useState(false);

    async function updateName(event) {

        event.preventDefault();

        setLoading(true);

        try {

            const update_name_data = {
                updated_name: String(event.target.name.value),
            }


            const { data, error } = await supabase
                .from('portfolio')
                .update({ ["user_name"]: `${update_name_data.updated_name}` })
                .eq('portfolio_id', `${props.id}`)
                .select()

            if (error) {

                setLoading(false)

                setStatus(false)

                setError(true)

            } else {

                setLoading(false)

                setStatus(true)

                setError(false)

            }



        } catch (error) {

            setLoading(false)

        }

    }

    async function updateTitle(event) {

        event.preventDefault();

        setUpdateTitleLoading(true);

        try {

            const update_title_data = {
                updated_title: String(event.target.title.value),
            }

            const { data, error } = await supabase
                .from('portfolio')
                .update({ ["user_title"]: `${update_title_data.updated_title}` })
                .eq('portfolio_id', `${props.id}`)
                .select()

            if (error) {

                setUpdateTitleLoading(false)

                setUpdateTitleStatus(false)

                setUpdateTitleError(true)

            } else {

                setUpdateTitleLoading(false)

                setUpdateTitleStatus(true)

                setUpdateTitleError(false)

            }

        } catch (error) {

            setUpdateTitleLoading(false)

        }

    }

    async function updateAbout(event) {

        event.preventDefault();

        setUpdateAboutLoading(true);

        try {

            const update_about_data = {
                updated_about: String(event.target.about.value),
            }

            const { data, error } = await supabase
                .from('portfolio')
                .update({ ["user_about"]: `${update_about_data.updated_about}` })
                .eq('portfolio_id', `${props.id}`)
                .select()

            if (error) {

                setUpdateAboutLoading(false)

                setUpdateAboutStatus(false)

                setUpdateAboutError(true)

            } else {

                setUpdateAboutLoading(false)

                setUpdateAboutStatus(true)

                setUpdateAboutError(false)

            }

        } catch (error) {

            setUpdateAboutLoading(false)

        }

    }

    function deleteAlert() {

        setStatus(false)

    }

    function deleteErrorAlert() {

        setError(false)

    }

    function deleteTitleAlert() {

        setUpdateTitleStatus(false)

    }

    function deleteTitleErrorAlert() {

        setUpdateTitleError(false)

    }

    function deleteAboutAlert(){

        setUpdateAboutStatus(false)

    }

    function deleteAboutErrorAlert(){

        setUpdateAboutError(false)

    }

    return (

        <>

            <div class="relative mb-4 mt-2">
                <form onSubmit={updateName}>
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input
                        required
                        placeholder="Oladele John"
                        type="text"
                        id="name"
                        name="name"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {status ?
                        <>

                            <div onClick={deleteAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>Name updated</span>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {error ?

                        <>
                            <div onClick={deleteErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                                <span>Error!</span>
                            </div>
                        </>
                        :
                        <></>

                    }

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
                <form onSubmit={updateTitle}>
                    <label for="title" class="leading-7 text-sm text-gray-600">Title</label>
                    <input
                        required
                        placeholder="Front-end developer"
                        type="text"
                        id="title"
                        name="title"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {updateTitleStatus ?
                        <>

                            <div onClick={deleteTitleAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>Title updated</span>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {updateTitleError ?

                        <>
                            <div onClick={deleteTitleErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                                <span>Error!</span>
                            </div>
                        </>
                        :
                        <></>

                    }

                    {updateTitleLoading ?

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Updating title...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Update title
                            </button>
                        </>

                    }
                </form>

            </div>

            <hr />

            <div class="relative mb-4">
                <form onSubmit={updateAbout}>
                    <label for="about" class="leading-7 text-sm text-gray-600">About you</label>
                    <textarea
                        required
                        id="about"
                        name="about"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {updateAboutStatus ?
                        <>

                            <div onClick={deleteAboutAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>About updated</span>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {updateAboutError ?

                        <>
                            <div onClick={deleteAboutErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                                <span>Error!</span>
                            </div>
                        </>
                        :
                        <></>

                    }
                    {updateAboutLoading ?

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Updating about...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Update about
                            </button>
                        </>

                    }
                </form>
            </div>

        </>

    )

}