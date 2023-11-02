'use-client'
import { AiFillGithub, AiOutlineLink, AiFillDelete, AiFillTwitterCircle, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs"
import { useState, useEffect } from 'react';
import supabase from "@/app/supabase/supabase";

export function Profile(props) {

    // Initialize state variables for profile loading and user data
    const [profileLoading, setProfileLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");

    // Use the useEffect hook to fetch and load user profile data when the component mounts
    useEffect(() => {
        // Set the profile loading state to true while fetching data
        setProfileLoading(true);

        // Define an async function to fetch user profile data
        async function fetchProfile() {
            try {
                // Fetch user profile data from Supabase
                const { data: portfolio, error } = await supabase
                    .from('portfolio')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`)
                    .single();

                if (portfolio) {
                    // If profile data is available, update the state variables with user data
                    setUsername(portfolio.user_name);
                    setTitle(portfolio.user_title);
                    setAbout(portfolio.user_about);

                    // Set the profile loading state to false after data is loaded
                    setProfileLoading(false);
                } else if (error) {
                    // Handle any errors, if encountered
                    setProfileLoading(false);
                }
            } catch (error) {
                // Handle errors that occur during data fetching
                setProfileLoading(false);
            }
        }

        // Call the fetchProfile function when the component mounts
        fetchProfile();
    }, []);



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

    // Initialize state variables for profile skills and loading state
    const [profile_skills, setprofile_skills] = useState([]);
    const [skillsLoading, setSkillsLoading] = useState(false);

    // Use the useEffect hook to fetch and load user skills when the component mounts
    useEffect(() => {
        // Set the skills loading state to true while fetching data
        setSkillsLoading(true);

        // Define an async function to fetch user skills data
        async function fetchSkills() {
            try {
                // Fetch user skills data from an external source 
                const { data: skills, error } = await supabase
                    .from('portfolio-skills')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`);

                if (skills) {
                    // If skills data is available, update the state variable with user skills
                    setprofile_skills(skills);

                    // Set the skills loading state to false after data is loaded
                    setSkillsLoading(false);
                } else if (error) {
                    // Handle any errors, if encountered
                    setSkillsLoading(false);
                }
            } catch (error) {
                // Handle errors that occur during data fetching
                setSkillsLoading(false);
            }
        }

        // Call the fetchSkills function when the component mounts 
        fetchSkills();
    }, []);

    useEffect(() => {
        // This useEffect sets up a listener for changes to the 'portfolio-projects' table in the database.

        const skillsListener = supabase
            .channel('any')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'portfolio-skills' }, payload => {
                const newSkill = payload.new;
                setprofile_skills((oldSkill) => {
                    // Add the newly inserted project to the list of projects and sort them by ID.
                    const newSkills = [...oldSkill, newSkill];
                    newSkills.sort((a, b) => b.id - a.id);
                    return newSkills;
                });
            })
            .subscribe();

        return () => {
            supabase.removeChannel(skillsListener); // Cleanup: remove the listener when the component is unmounted.
        };

    }, []);


    return (

        <>

            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <h1 class="text-lg text-gray-700"> Skills </h1>
                {/*}
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
                {*/}

                {skillsLoading ?
                    <>
                        <div className="flex justify-center mb-2">
                            <span className="loading loading-spinner loading-md"></span>
                        </div>
                    </>
                    :
                    <>

                        <div className="flex justify-center mb-2">
                            <div class="bg-white rounded-lg border border-gray-200 w-48 text-gray-900 text-sm font-medium">
                                {profile_skills.map((skills) => (
                                    <>
                                        <a href="#" class="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                                            {skills.skills_name}
                                        </a>
                                    </>
                                ))}
                            </div>
                        </div>

                    </>
                }

            </div>

        </>

    )

}

export function Projects(props) {

    const [project, setProjects] = useState([]); // State to store the list of projects.
    const [projectLoading, setProjectLoading] = useState(false); // State to track project loading status.
    const [deleteLoading, setDeleteLoading] = useState(false); // State to track project deletion status.

    useEffect(() => {
        // This useEffect is used to fetch projects when the component is mounted.

        async function fetchProjects() {
            try {
                setProjectLoading(true); // Set project loading to true.

                // Fetch projects from a database (likely Supabase).
                const { data: projects, error } = await supabase
                    .from('portfolio-projects')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`);

                if (projects) {
                    setProjects(projects); // Update the state with fetched projects.
                    setProjectLoading(false); // Set project loading back to false.
                } else {
                    setProjectLoading(false); // Set project loading to false on error.
                }
            } catch (error) {
                setProjectLoading(false); // Set project loading to false on exception.
            }
        }

        fetchProjects(); // Call the fetchProjects function when the component is mounted.

    }, []);

    useEffect(() => {
        // This useEffect sets up a listener for changes to the 'portfolio-projects' table in the database.

        const projectListener = supabase
            .channel('any')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'portfolio-projects' }, payload => {
                const newProject = payload.new;
                setProjects((oldProject) => {
                    // Add the newly inserted project to the list of projects and sort them by ID.
                    const newProjects = [...oldProject, newProject];
                    newProjects.sort((a, b) => b.id - a.id);
                    return newProjects;
                });
            })
            .subscribe();

        return () => {
            supabase.removeChannel(projectListener); // Cleanup: remove the listener when the component is unmounted.
        };

    }, []);

    const deleteProject = async (id) => {
        // Function to delete a project.

        try {
            setDeleteLoading(true); // Set delete loading to true.

            // Delete the project with the given ID from the database.
            const { error } = await supabase
                .from('portfolio-projects')
                .delete()
                .eq('id', `${id}`);

            if (error) {
                setDeleteLoading(false); // Set delete loading to false on error.
            } else {
                setDeleteLoading(false); // Set delete loading to false on success.
                setProjects(project.filter((x) => x.id != id)); // Remove the deleted project from the state.
            }
        } catch (error) {
            console.log(error); // Log any errors that occur during the delete operation.
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
                                    <hr style={{ width: "160px" }} />
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

    // State to track the loading status of contact information.
    const [contactLoading, setContactLoading] = useState(false);

    // States to store various contact information.
    const [mail, setMail] = useState(""); // Email
    const [x, setX] = useState(""); // X link (possibly a website or profile)
    const [linkedIn, setLinkedIn] = useState(""); // LinkedIn profile link
    const [phoneNumber, setPhoneNumber] = useState(""); // Phone number

    useEffect(() => {
        // This useEffect is used to fetch contact information when the component is mounted.

        async function fetchContacts() {

            try {

                setContactLoading(true); // Set contact loading to true.
                // Fetch contact information from a database (likely Supabase).
                const { data: contact, error } = await supabase
                    .from('project-contact')
                    .select('*')
                    .eq('portfolio_id', `${props.id}`)
                    .single();

                if (contact) {
                    // Update the state with the fetched contact information.
                    setMail(contact.email_link);
                    setX(contact.x_link);
                    setLinkedIn(contact.linkedin_link);
                    setPhoneNumber(contact.phone_number);
                    setContactLoading(false); // Set contact loading back to false.
                }else if(error){
                    setContactLoading(false); 
                }
            } catch (error) {
                setContactLoading(false); // Set contact loading to false on exception or error.
            }
        }

        fetchContacts(); // Call the fetchContacts function when the component is mounted.

    }, []);



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