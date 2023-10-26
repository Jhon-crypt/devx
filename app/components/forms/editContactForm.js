"use client";
import { useState } from "react";

import supabase from "@/app/supabase/supabase";

export default function EditContactForm(props) {

    const [emailLoading, setEmailLoading] = useState(false)
    const [emailStatus, setEmailStatus] = useState(false)
    const [emailError, setEmailError] = useState(false)

    async function updateEmail(event) {

        event.preventDefault();

        setEmailLoading(true)

        try {

            const update_email_data = {
                updated_email: String(event.target.email.value),
            }


            const { data, error } = await supabase
                .from('project-contact')
                .update({ ["email-link"]: `${update_email_data.updated_email}` })
                .eq('portfolio-id', `${props.id}`)
                .select()

            if (error) {

                setEmailLoading(false)

                setEmailStatus(false)

                setEmailError(true)

            } else {

                setEmailLoading(false)

                setEmailStatus(true)

                setEmailError(false)

            }

        } catch (error) {

            setEmailLoading(false)

            setEmailStatus(false)

            setEmailError(true)

        }

    }

    function deleteAlert() {

        setEmailStatus(false)

    }

    function deleteErrorAlert() {

        setEmailError(false)

    }

    return (

        <>


            <div class="relative mb-4">
                <form onSubmit={updateEmail}>
                    <label for="name" class="leading-7 text-sm text-gray-600">Your email</label>
                    <input
                        placeholder="youngjohn@mail.com"
                        type="email"
                        id="email"
                        name="email"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {emailStatus ?
                        <>

                            <div onClick={deleteAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>Email updated</span>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {emailError ?

                        <>
                            <div onClick={deleteErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                                <span>Error!</span>
                            </div>
                        </>
                        :
                        <></>

                    }
                    {emailLoading ?

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Updating email...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Update email
                            </button>
                        </>

                    }
                </form>
            </div>

            <div class="relative mb-4">
            a
                <label for="name" class="leading-7 text-sm text-gray-600">X(Twitter) link</label>
                <input
                    placeholder="x.com/john"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update X(Twitter) link
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">LinkedIn link</label>
                <input
                    placeholder="x.com/john"
                    type="text"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update linkedin link
                </button>
            </div>

            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Phone number</label>
                <input
                    placeholder="+234000000000"
                    type="number"
                    id="name"
                    name="name"
                    class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                    Update phone number
                </button>
            </div>

        </>

    )

}