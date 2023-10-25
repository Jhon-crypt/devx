"use client"

import { useState, useEffect } from 'react';

import supabase from "@/app/supabase/supabase";

export default function SkillsForm(props) {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);

    async function addSkills(event) {

        event.preventDefault();

        setLoading(true);

        try {

            const add_skills_data = {
                add_skills: String(event.target.skills.value),
            }

            const { error } = await supabase
                .from('portfolio-skills')
                .insert({
                    "skills-name": `${add_skills_data.add_skills}`,
                    "portfolio-id": `${props.id}`
                });

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

            setStatus(false)

            setError(true)

        }

    }

    function deleteAlert() {

        setStatus(false)

    }

    function deleteErrorAlert() {

        setError(false)

    }

    return (

        <>

            <div class="relative mb-4 mt-2">
                <form onSubmit={addSkills}>
                    <label for="skills" class="leading-7 text-sm text-gray-600">Skills</label>
                    <input
                        placeholder="Html..."
                        type="text"
                        id="skills"
                        name="skills"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {status ?
                        <>

                            <div className="alert alert-success  mb-3 p-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Skill added</span>
                                <div>
                                    <svg onClick={deleteAlert} xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                    }

                    {error ?

                        <>
                            <div className="alert alert-error  mb-3 p-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Error!</span>
                                <div>
                                    <svg onClick={deleteErrorAlert} xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                            </div>
                        </>
                        :
                        <></>

                    }

                    {loading ?

                        <>
                            <button type="submit" class="mb-3 bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                                <span className="loading loading-spinner loading-xs"></span> Adding skill...
                            </button>
                        </>

                        :

                        <>
                            <button type="submit" class="mb-3 bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                                Add skill
                            </button>
                        </>

                    }
                </form>

                <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Html
                            </div></a>
                    </li>
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Css
                            </div></a>
                    </li>
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Javascript
                            </div></a>
                    </li>
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Php
                            </div></a>
                    </li>
                    <li>
                        <a>
                            <div className="badge badge-outline gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Python
                            </div></a>
                    </li>
                </ul>

            </div>

        </>

    )

}