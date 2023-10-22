// Importing the NextResponse object from the next/server module
import { NextResponse } from "next/server";

//importing UUID library
import { v4 as uuidv4 } from 'uuid';

// Importing the supabase client from the app/supabase/supabase module
import supabase from "@/app/supabase/supabase";

export async function POST(req) {

    try {

        // Parsing the request body as JSON and extracting the portfolio_title property
        const create_portfolio_data = await req.json();
        const { portfolio_title, user_id } = create_portfolio_data;

        let portfolio_id = uuidv4();

        // Inserting a new row into the portfolio table in the supabase client
        const { error } = await supabase
            .from("portfolio")
            .insert({
                name: `${portfolio_title}`,
                "user-id": `${user_id}`,
                "portfolio-id": `${portfolio_id}`
            });

        if (error) {

            const error_message = "Error while creating portfolio, try again"
            return NextResponse.json({ error: error_message })

        } else {

            return NextResponse.json({ message: "Portfolio Created", data: portfolio_id })

        }


    } catch (error) {

        const error_message = "Error while creating portfolio, try again"
        return NextResponse.json({ error: error_message })

    }



}