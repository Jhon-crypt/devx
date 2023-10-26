"use client";
import { useState } from "react";

import supabase from "@/app/supabase/supabase";

export default function EditProjectForm(props) {

    const [updateTitleLoading, setUpdateTitleLoading] = useState(false);
    const [updateTitleStatus, setUpdateTitleStatus] = useState(false);
    const [updateTitleError, setUpdateTitleError] = useState(false);

    async function projectTitle(event) {

        event.preventDefault();

        setUpdateTitleLoading(true);

        try {

            const add_project_data = {
                project_title: String(event.target.title.value),
                project_link: String(event.target.link.value),
                project_github: String(event.target.github.value),
            }

            //console.log(add_project_data)


            const { error } = await supabase
                .from('portfolio-projects')
                .insert({
                    "project-name": `${add_project_data.project_title}`,
                    "project-link": `${add_project_data.project_link}`,
                    "github-link": `${add_project_data.project_github}`,
                    "portfolio-id": `${props.id}`

                });

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

            setUpdateTitleStatus(false)

            setUpdateTitleError(true)

        }

    }

    
    function deleteAlert() {

        setUpdateTitleStatus(false)

    }

    function deleteErrorAlert() {

        setUpdateTitleError(false)

    }

    return (

        <>

            <form onSubmit={projectTitle}>
                <div class="relative mb-4">

                    <label for="name" class="leading-7 text-sm text-gray-600">Project title</label>
                    <input
                        required
                        placeholder="DevX"
                        type="text"
                        id="title"
                        name="title"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />


                </div>

                <div class="relative mb-4">
                    <label for="link" class="leading-7 text-sm text-gray-600">Project Link</label>
                    <input
                        required
                        placeholder="www.devx.dev"
                        type="text"
                        id="link"
                        name="link"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                </div>

                <div class="relative mb-4">
                    <label for="github" class="leading-7 text-sm text-gray-600">Github Link</label>
                    <input
                        placeholder="github.com/blahblahblah"
                        type="text"
                        id="github"
                        name="github"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                </div>
                
                {updateTitleStatus ?
                    <>

                        <div onClick={deleteAlert} className="alert alert-success  mb-3 p-2 text-sm">
                            <span>Project added</span>
                        </div>
                    </>
                    :
                    <></>
                }

                {updateTitleError ?

                    <>
                        <div onClick={deleteErrorAlert} className="alert alert-error  mb-3 p-2 text-sm">
                            <span>Error!</span>
                        </div>
                    </>
                    :
                    <></>

                }
                {updateTitleLoading ?

                    <>
                        
                        <button type="submit" class="mt-2 bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 opacity-50 cursor-not-allowed" disabled>
                            <span className="loading loading-spinner loading-xs"></span> Adding project...
                        </button>
                    </>

                    :

                    <>
                        
                        <button type="submit" class=" mt-2 bg-white border border-indigo-500 text-indigo-500 rounded-md px-2 py-1 text-sm hover:bg-indigo-500 hover:text-white hover:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
                            Add projects
                        </button>
                    </>

                }
            </form>

        </>

    )

}