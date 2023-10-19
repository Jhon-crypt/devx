'use client'
import Link from "next/link"
import { FaUserSecret } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function SidebarHeader() {

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

            <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div class="-mx-6 px-6 py-4">
                        <Link href="/" class="inline-flex items-center gap-x-2 text-xl font-semibold">
                            <div class="drop-shadow-md px-3 py-1 rounded text-white bg-indigo-500 w-11 h-10"><FaUserSecret className='mt-2 mx-auto' /></div>
                            <span className='font-bold text-indigo-500'>DevX</span>
                        </Link>
                    </div>

                    <div class="mt-8 text-center">
                        <img src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp" alt="" class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
                        <span class="hidden text-gray-400 lg:block">Front-end developer</span>
                    </div>

                    <ul class="space-y-2 tracking-wide mt-8">
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

                    </ul>
                </div>

                <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button onClick={logout} class="px-4 py-3 flex items-center space-x-4 rounded-md text-indigo-500 group">
                        <GrLogout class="h-6 w-6 text-indigo-500" />
                        <span class="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>

        </>

    )

}