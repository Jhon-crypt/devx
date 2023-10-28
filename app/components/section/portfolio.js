'use-client'
import { AiFillGithub, AiOutlineShareAlt, AiFillDelete, AiFillTwitterCircle, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs"
import { useState, useEffect } from 'react';
import supabase from "@/app/supabase/supabase";

export function Profile(props) {

    const [profileLoading, setProfileLoading] = useState(false)

    const [username, setUsername] = useState("")
    const [title, setTitle] = useState("")
    const [about, setAbout] = useState("")

    useEffect(() => {

        setProfileLoading(true)

        async function fetchProfile() {

            try {

                const { data: portfolio, error } = await supabase
                    .from('portfolio')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`)
                    .single()
                    

                if (portfolio) {

                    setUsername(portfolio.user_name)

                    setTitle(portfolio.user_title)

                    setAbout(portfolio.user_about)

                    setProfileLoading(false)

                } else if (error) {

                    setProfileLoading(false)

                }

            } catch (error) {

                setProfileLoading(false)

            }

        }

        fetchProfile()

    }, [])


    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <div className="flex items-center justify-center">

                    <div className="p-8 rounded-full bg-indigo-500 text-white font-bold text-2xl mb-2">

                        <b><BsCodeSlash /></b>

                    </div>

                </div>
                {profileLoading ?
                    <>
                        <div className="flex justify-center mb-2">
                            <span className="loading loading-spinner loading-md"></span>
                        </div>
                    </>
                    :
                    <>
                        <h1 class="text-lg text-gray-700"> {username} </h1>
                        <h3 class="text-sm text-gray-400 "> {title} </h3>
                        <p class="text-xs text-gray-400 mt-4"> {about}</p>
                    </>
                }


            </div>

        </>

    )

}

export function Skills() {
    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <h1 class="text-lg text-gray-700"> Skills </h1>
                <ul className="menu bg-base-200  rounded-box overflow-x-auto max-h-[10rem]" style={{ height: "auto", maxHeight: "20px;", overflow: "auto;" }}>
                    <li><a>Php</a></li>
                    <li><a>NextJs</a></li>
                    <li><a>React</a></li>
                    <li><a>Supabase</a></li>
                    <li><a>Php</a></li>
                    <li><a>NextJs</a></li>
                    <li><a>React</a></li>
                    <li><a>Supabase</a></li>
                </ul>

            </div>

        </>

    )

}

export function Projects() {

    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">

                <div class="w-60 overflow-x-auto max-h-[18rem]" style={{ height: "auto", maxHeight: "20px;", overflow: "auto;" }}>

                    <div class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <div class="h-32">
                                <img
                                    src="/img/dev1.svg"
                                    alt="ui/ux review check"
                                    class="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="mb-2 flex items-center justify-between">
                                <h5 class="block font-sans text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    SkyDrop
                                </h5>
                            </div>
                            <div class="group mt-4 inline-flex flex-wrap items-center gap-2">
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
                                    <AiFillDelete class="h-5 w-5" />
                                </span>
                            </div>
                        </div>
                        <div class="p-4 pt-2">
                            <button
                                class="block w-full select-none rounded-lg border border-indigo-500 py-2.5 px-5 text-center font-sans text-sm font-bold uppercase text-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/40 transition-all focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                View Project
                            </button>
                        </div>
                    </div>

                    <hr />

                    <div class="relative flex w-full max-w-[18rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <div class="h-32">
                                <img
                                    src="/img/dev1.svg"
                                    alt="ui/ux review check"
                                    class="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div class="p-4">
                            <div class="mb-2 flex items-center justify-between">
                                <h5 class="block font-sans text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Edustack
                                </h5>
                            </div>
                            <div class="group mt-4 inline-flex flex-wrap items-center gap-2">
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
                                    <AiFillDelete class="h-5 w-5" />
                                </span>
                            </div>
                        </div>
                        <div class="p-4 pt-2">
                            <button
                                class="block w-full select-none rounded-lg border border-indigo-500 py-2.5 px-5 text-center font-sans text-sm font-bold uppercase text-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/40 transition-all focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                View Project
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </>

    )

}

export function Contact() {

    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <h1 class="text-lg text-gray-700"> Contact </h1>
                <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                    <li>
                        <a>
                            <BiLogoGmail className="h-5 w-5" />

                        </a>
                    </li>
                    <li>
                        <a>
                            <AiFillTwitterCircle className="h-5 w-5" />

                        </a>
                    </li>
                    <li>
                        <a>
                            <AiFillLinkedin className="h-5 w-5" />
                        </a>
                    </li>
                </ul>
                <ul className="mt-3 menu bg-base-200 w-56 rounded-box">
                    <li align="center"><a><AiFillPhone className="h-5 w-5" /> 0*9********</a></li>
                </ul>
            </div>

        </>

    )

}