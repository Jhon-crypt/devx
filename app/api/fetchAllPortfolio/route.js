// Importing the NextResponse object from the next/server module
import { NextResponse } from "next/server";

// Importing the supabase client from the app/supabase/supabase module
import supabase from "@/app/supabase/supabase";

export async function GET(req) {

    try {

        // Parsing the URL search params from the request URL
        const { searchParams } = new URL(req.url)

        // Extracting the user_id parameter from the search params
        const user_id = searchParams.get("user_id");

        // Querying the portfolio table in the supabase client with the user_id
        let { data: portfolio, error } = await supabase
            .from('portfolio')
            .select('*')
            .eq("user-id", `${user_id}`) 

        if(error){

            const error_message  = "Error while fetching portfolio, try again by refreshing your browser"
            return NextResponse.json({ error: error_message, error_status: 500})

        }else{

            return NextResponse.json({ portfolios: portfolio })

        }


    } catch (error) {

        return NextResponse.json({ error: error_message})

    }

}