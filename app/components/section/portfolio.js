import { AiFillGithub, AiOutlineShareAlt, AiFillDelete, AiFillTwitterCircle, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export function Profile() {

    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
                <h1 class="text-lg text-gray-700"> Oladele John </h1>
                <h3 class="text-sm text-gray-400 "> Front-end Developer </h3>
                <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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