"use client";
import { Hanko } from "@teamhanko/hanko-elements";
import { useState } from "react";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function UserProfile() {

    const [user_email, setUserEmail] = useState("")

    async function getUserEmail() {

        const hanko = new Hanko(hankoApi);

        const { id, email } = await hanko.user.getCurrent();
        
        setUserEmail(email)

    }

    getUserEmail()

    return (

        <>

            <span>{user_email}</span>

        </>

    )

}
