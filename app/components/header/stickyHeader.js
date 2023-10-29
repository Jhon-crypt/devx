'use client'
import Link from "next/link"
import { FaUserSecret } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function StickyHeader(props) {

    const router = useRouter();
    const [hanko, setHanko] = useState(null);

    useEffect(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) =>
            setHanko(new Hanko(hankoApi ?? ""))
        );
    }, []);


    const logout = async () => {
        try {
          await hanko?.user.logout();
          router.push("/Login");
          router.refresh();
          return;
        } catch (error) {
          console.error("Error during logout:", error);
        }
      };

    return (

        <>

            <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">{props.title}</h5>
                    <div class="md:hidden">
                        <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">

                            <Link href="/" class="inline-flex items-center gap-x-2 text-xl font-semibold ">
                                <div class="drop-shadow-md px-3 py-1 rounded text-white bg-indigo-500 w-11 h-10"><FaUserSecret className='mt-2 mx-auto' /></div>
                                <span className='font-bold text-indigo-500'>DevX</span>
                            </Link>

                        </div>
                    </div>
                    <div class="flex space-x-4 justify-center">

                        <div className="dropdown dropdown-end">
                            <button tabIndex={0} type='button' class="w-12 h-16 -mr-2 border-r lg:hidden" data-hs-overlay="#hs-overlay-right">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <Link href="/Portfolio" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-indigo-500 hover:text-white hover:bg-indigo-500">
                                <ImProfile class="-ml-1 h-6 w-6" />
                                <span class="-mr-1 font-medium">Portfolios</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Create" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-indigo-500 hover:text-white hover:bg-indigo-500">
                                <AiOutlinePlusSquare class="-ml-1 h-6 w-6" />
                                <span class="-mr-1 font-medium">Create</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Settings" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-indigo-500 hover:text-white hover:bg-indigo-500">
                                <BiCog class="-ml-1 h-6 w-6" />
                                <span class="-mr-1 font-medium">Settings</span>
                            </Link>
                        </li>
                        <li onClick={logout}>
                            <a aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-indigo-500 hover:text-white hover:bg-indigo-500">
                                <GrLogout class="-ml-1 h-6 w-6" />
                                <span class="-mr-1 font-medium">Logout</span>
                            </a>
                        </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </>

    )

}