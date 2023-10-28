"use client";
import { useState } from "react";

import supabase from "@/app/supabase/supabase";

export default function EditContactForm(props) {

    const [emailLoading, setEmailLoading] = useState(false)
    const [emailStatus, setEmailStatus] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const [updateXLoading, setUpdateXLoading] = useState(false)
    const [updateXStatus, setUpdateXStatus] = useState(false)
    const [updateXError, setUpdateXError] = useState(false)

    const [updateLinkedLoading, setUpdateLinkedLoading] = useState(false)
    const [updateLinkedStatus, setUpdateLinkedStatus] = useState(false)
    const [updateLinkedError, setUpdateLinkedError] = useState(false)

    const [updateNumberLoading, setUpdateNumberLoading] = useState(false)
    const [updateNumberStatus, setUpdateNumberStatus] = useState(false)
    const [updateNumberError, setUpdateNumberError] = useState(false)


    async function updateEmail(event) {

        event.preventDefault();

        setEmailLoading(true)

        try {

            const update_email_data = {
                updated_email: String(event.target.email.value),
            }


            const { data, error } = await supabase
                .from('project-contact')
                .update({ ["email_link"]: `${update_email_data.updated_email}` })
                .eq('portfolio_id', `${props.id}`)
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

    async function updateXlink(event) {

        event.preventDefault();

        setUpdateXLoading(true)

        try {

            const update_xlink_data = {
                updated_xlink: String(event.target.xlink.value),
            }


            const { data, error } = await supabase
                .from('project-contact')
                .update({ ["x_link"]: `${update_xlink_data.updated_xlink}` })
                .eq('portfolio_id', `${props.id}`)
                .select()

            if (error) {

                setUpdateXLoading(false)

                setUpdateXStatus(false)

                setUpdateXError(true)

            } else {

                setUpdateXLoading(false)

                setUpdateXStatus(true)

                setUpdateXError(false)

            }

        } catch (error) {

            setUpdateXLoading(false)

            setUpdateXStatus(false)

            setUpdateXError(true)
        }

    }

    async function updateLinkedIn(event) {

        event.preventDefault();

        setUpdateLinkedLoading(true)

        try {

            const update_linkedin_data = {
                updated_linkedin: String(event.target.linkedin.value),
            }


            const { data, error } = await supabase
                .from('project-contact')
                .update({ ["linkedin_link"]: `${update_linkedin_data.updated_linkedin}` })
                .eq('portfolio_id', `${props.id}`)
                .select()

            if (error) {

                setUpdateLinkedLoading(false)

                setUpdateLinkedStatus(false)

                setUpdateLinkedError(true)

            } else {

                setUpdateLinkedLoading(false)

                setUpdateLinkedStatus(true)

                setUpdateLinkedError(false)

            }

        } catch (error) {

            setUpdateLinkedLoading(false)

            setUpdateLinkedStatus(false)

            setUpdateLinkedError(true)
        }

    }

    async function updateNumber(event) {

        event.preventDefault();

        setUpdateNumberLoading(true)

        try {

            const update_number_data = {
                updated_number: String(event.target.number.value),
            }


            const { data, error } = await supabase
                .from('project-contact')
                .update({ ["phone_number"]: `${update_number_data.updated_number}` })
                .eq('portfolio_id', `${props.id}`)
                .select()

            if (error) {

                setUpdateNumberLoading(false)

                setUpdateNumberStatus(false)

                setUpdateNumberError(true)

            } else {

                setUpdateNumberLoading(false)

                setUpdateNumberStatus(true)

                setUpdateNumberError(false)

            }

        } catch (error) {

            setUpdateNumberLoading(false)

            setUpdateNumberStatus(false)

            setUpdateNumberError(true)
        }

    }

    function deleteAlert() {

        setEmailStatus(false)

    }

    function deleteErrorAlert() {

        setEmailError(false)

    }

    function deleteXAlert() {

        setUpdateXStatus(false)

    }

    function deleteXErrorAlert() {

        setUpdateXError(false)

    }

    function deleteLinkedInAlert() {

        setUpdateLinkedStatus(false)

    }

    function deleteLinkedInErrorAlert() {

        setUpdateLinkedError(false)

    }

    function deletePhoneNumberAlert() {

        setUpdateNumberStatus(false)

    }

    function deletePhoneNumberErrorAlert() {

        setUpdateNumberError(false)

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
                <form onSubmit={updateXlink}>
                    <label for="xlink" class="leading-7 text-sm text-gray-600">X(Twitter) link</label>
                    <input
                        placeholder="x.com/john"
                        type="text"
                        id="xlink"
                        name="xlink"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {updateXStatus ?
                        <>

                            <div onClick={deleteXAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>X link updated</span>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {updateXError ?

                        <>
                            <div onClick={deleteXErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                                <span>Error!</span>
                            </div>
                        </>
                        :
                        <></>

                    }
                    {updateXLoading ?

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Updating x link...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Update x link
                            </button>
                        </>

                    }
                </form>
            </div>

            <div class="relative mb-4">
                <form onSubmit={updateLinkedIn}>
                    <label for="name" class="leading-7 text-sm text-gray-600">LinkedIn link</label>
                    <input
                        placeholder="x.com/john"
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {updateLinkedStatus ?
                        <>

                            <div onClick={deleteLinkedInAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>LinkedIn updated</span>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {updateLinkedError ?

                        <>
                            <div onClick={deleteLinkedInErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                                <span>Error!</span>
                            </div>
                        </>
                        :
                        <></>

                    }
                    {updateLinkedLoading ?

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Updating LinkedIn...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Update linkedIn
                            </button>
                        </>

                    }
                </form>
            </div>

            <div class="relative mb-4">
                <form onSubmit={updateNumber}>
                    <label for="name" class="leading-7 text-sm text-gray-600">Phone number</label>
                    <input
                        placeholder="+234000000000"
                        type="text"
                        id="number"
                        name="number"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {updateNumberStatus ?
                        <>

                            <div onClick={deletePhoneNumberAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>Phone number updated</span>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {updateNumberError ?

                        <>
                            <div onClick={deletePhoneNumberErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                                <span>Error!</span>
                            </div>
                        </>
                        :
                        <></>

                    }
                    {updateNumberLoading ?

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Updating Phone number...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Update phone number
                            </button>
                        </>

                    }
                </form>
            </div>

        </>

    )

}