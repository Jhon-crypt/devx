'use client'
import dynamic from 'next/dynamic';
import Header from "../components/header/header"
const HankoAuth = dynamic(() => import('../components/HankoAuth/HankoAuth'), { ssr: false })

export default function Auth() {

    return (

        <>

            <div className="px-5">
                <Header />
            </div>

            <div className="pt-6 flex justify-center">
                <HankoAuth />
            </div>

        </>

    )

}