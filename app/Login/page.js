'use client'

import Header from "../components/header/header"
import HankoAuth from "../components/HankoAuth/HankoAuth"

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