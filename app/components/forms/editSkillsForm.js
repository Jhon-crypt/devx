"use client"

import { useState, useEffect } from 'react';

import supabase from "@/app/supabase/supabase";

export default function SkillsForm(props) {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState(false);

    const [profile_skills, setprofile_skills] = useState([]);
    const [skillsLoading, setSkillsLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {

        setSkillsLoading(true)

        async function fetchSkills() {

            try {

                const { data: skills, error } = await supabase
                    .from('portfolio-skills')
                    .select('*')
                    .eq('portfolio-id', `${props.id}`)

                if (skills) {

                    setprofile_skills(skills)

                    setSkillsLoading(false)

                } else if (error) {

                    setSkillsLoading(false)

                }

            } catch (error) {

                setSkillsLoading(false)

            }

        }

        fetchSkills()

    }, [])

    useEffect(() => {

        const skillsListener = supabase
            .channel('any')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'portfolio-skills' }, payload => {
                const newSkill = payload.new;
                setprofile_skills((oldSkill) => {
                    const newSkills = [...oldSkill, newSkill];
                    newSkills.sort((a, b) => b.id - a.id);
                    return newSkills;
                });
            })
            .subscribe()

        return () => {

            supabase.removeChannel(skillsListener)

        };

    }, [])



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
                    "skills_name": `${add_skills_data.add_skills}`,
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

    const deleteSkills = async (id) => {

        try {

            setDeleteLoading(true)

            const { error } = await supabase
                .from('portfolio-skills')
                .delete()
                .eq('id', `${id}`)

            if (error) {

                setDeleteLoading(false)

            } else {

                setDeleteLoading(false)

                setprofile_skills(profile_skills.filter((x) => x.id != id))

            }

        } catch (error) {

            console.log(error)

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
                        required
                        placeholder="Html..."
                        type="text"
                        id="skills"
                        name="skills"
                        class="mb-3 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    {status ?
                        <>

                            <div onClick={deleteAlert} className="alert alert-success  mb-3 p-2 text-sm">
                                <span>Skill added</span>
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
                {deleteLoading ?

                    <div className="flex justify-center mb-2">
                        <span className="loading loading-spinner loading-xm"></span><small>Deleting</small>
                    </div>
                    :
                    <></>
                
                }
                {skillsLoading ?

                    <>
                        <div className="flex justify-center mb-2">
                            <span className="loading loading-spinner loading-xm"></span>
                        </div>
                    </>
                    :
                    <>
                        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                            {profile_skills.map((skills) => (
                                <>
                                    <li key={skills.id}>
                                        <a>
                                            <div className="badge badge-outline gap-2">
                                                <svg onClick={() => deleteSkills(skills.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                {skills.skills_name}
                                            </div></a>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </>

                }

            </div>

        </>

    )

}