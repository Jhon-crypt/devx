'use-client'
import { AiFillGithub, AiOutlineLink, AiFillDelete, AiFillTwitterCircle, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
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

export function Skills(props) {

    const [profile_skills, setprofile_skills] = useState([]);
    const [skillsLoading, setSkillsLoading] = useState(false);


    useEffect(() => {

        setSkillsLoading(true)

        async function fetchSkills() {

            try {

                const { data: skills, error } = await supabase
                    .from('portfolio-skills')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`)

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



    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <h1 class="text-lg text-gray-700"> Skills </h1>
                {skillsLoading ?
                    <>
                        <div className="flex justify-center mb-2">
                            <span className="loading loading-spinner loading-md"></span>
                        </div>
                    </>
                    :
                    <>
                        <ul className="menu bg-base-200  rounded-box overflow-x-auto max-h-[10rem]" style={{ height: "auto", maxHeight: "20px;", overflow: "auto;" }}>
                            {profile_skills.map((skills) => (
                                <>
                                    <li><a>
                                        <div className="badge badge-outline gap-2">
                                            {skills.skills_name}
                                        </div>
                                    </a></li>
                                </>
                            ))}
                        </ul>
                    </>
                }



            </div>

        </>

    )

}

export function Projects(props) {

    const [project, setProjects] = useState([]);
    const [projectLoading, setProjectLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false)

    useEffect(() => {

        async function fetchProjects() {

            try {

                setProjectLoading(true)

                const { data: projects, error } = await supabase
                    .from('portfolio-projects')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`)

                if (projects) {

                    setProjects(projects)

                    setProjectLoading(false)

                } else {

                    setProjectLoading(false)

                }


            } catch (error) {

                setProjectLoading(false)

            }

        }

        fetchProjects()

    }, [])

    useEffect(() => {

        const projectListener = supabase
            .channel('any')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'portfolio-projects' }, payload => {
                const newProject = payload.new;
                setProjects((oldProject) => {
                    const newProjects = [...oldProject, newProject];
                    newProjects.sort((a, b) => b.id - a.id);
                    return newProjects;
                });
            })
            .subscribe()

        return () => {

            supabase.removeChannel(projectListener)

        };

    }, [])

    const deleteProject = async (id) => {

        try {

            setDeleteLoading(true)

            const { error } = await supabase
                .from('portfolio-projects')
                .delete()
                .eq('id', `${id}`)

            if (error) {

                setDeleteLoading(false)

            } else {

                setDeleteLoading(false)

                setProjects(project.filter((x) => x.id != id))

            }

        } catch (error) {

            console.log(error)

        }

    }

    return (



        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">

                <div class="w-60 overflow-x-auto max-h-[18rem]" style={{ height: "auto", maxHeight: "20px;", overflow: "auto;" }}>
                    {deleteLoading ?
                        <>
                            <div className="flex justify-center mb-2">
                                <span className="loading loading-spinner loading-xm"></span> Deleting
                            </div>
                        </>
                        :
                        <>

                        </>
                    }
                    {projectLoading ?
                        <>
                            <div className="flex justify-center mb-2">
                                <span className="loading loading-spinner loading-xm"></span>
                            </div>
                        </>
                        :
                        <>
                            {project.map((projects) => (
                                <>
                                    <div class="relative flex w-full flex-col rounded-xl bg-clip-border text-gray-700">
                                        <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white ">
                                            <div class="h-32">
                                                <img
                                                    src="/img/code2.svg"
                                                    alt="ui/ux review check"
                                                    class=" object-cover w-25 h-full"
                                                />
                                            </div>
                                        </div>
                                        <div class="p-4">
                                            <div class="mb-2 flex items-center justify-between">
                                                <h5 class="block font-sans text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                    {projects.project_name}
                                                </h5>

                                            </div>
                                            <div class="mt-4 flex flex-wrap items-center gap-2">
                                                <span class="cursor-pointer rounded-full bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70">
                                                    <a href={`https://${projects.github_link}`} target="_blank">
                                                        <AiFillGithub class="h-5 w-5" />
                                                    </a>
                                                </span>
                                                <span class="cursor-pointer rounded-full bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70">
                                                    <a href={`https://www.example.com/${projects.project_link}`} target="_blank">
                                                        <AiOutlineLink class="h-5 w-5" />
                                                    </a>
                                                </span>
                                                <span onClick={() => deleteProject(projects.id)} class="cursor-pointer rounded-full bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70">
                                                    <AiFillDelete class="h-5 w-5" />
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                    <hr style={{ width: "160px"}} />
                                    <br />

                                </>
                            ))}
                        </>
                    }

                </div>
            </div>


        </>

    )

}

export function Contact(props) {

    const [contactLoading, setContactLoading] = useState(false)

    const [mail, setMail] = useState("")
    const [x, setX] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    useEffect(() => {

        async function fetchContacts() {

            setContactLoading(true)

            try {

                const { data: contact, error } = await supabase
                    .from('project-contact')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`)
                    .single()

                if (contact) {

                    setMail(contact.email_link)

                    setX(contact.x_link)

                    setLinkedIn(contact.linkedin_link)

                    setPhoneNumber(contact.phone_number)

                    setContactLoading(false)

                }

            } catch (error) {

                setContactLoading(false)

            }

        }

        fetchContacts()

    }, [])


    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <h1 class="text-lg text-gray-700"> Contact </h1>
                {contactLoading ?
                    <>
                        <div className="flex justify-center mb-2">
                            <span className="loading loading-spinner loading-xm"></span>
                        </div>
                    </>
                    :
                    <>

                        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                            <li>
                                <a href={`mailto:${mail}`} target="_blank">
                                    <BiLogoGmail className="h-5 w-5" />

                                </a>
                            </li>
                            <li>
                                <a href={`https://${x}`} target="_blank">
                                    <AiFillTwitterCircle className="h-5 w-5" />

                                </a>
                            </li>
                            <li>
                                <a href={`https://${linkedIn}`} target="_blank">
                                    <AiFillLinkedin className="h-5 w-5" />
                                </a>
                            </li>
                        </ul>
                        <ul className="mt-3 menu lg:menu-horizontal bg-base-200 rounded-box">
                            <li>
                                <a href={`tel:${phoneNumber}`} target="_blank">
                                    <AiFillPhone className="h-5" />Phone
                                </a>
                            </li>
                        </ul>

                    </>
                }

            </div>

        </>

    )

}