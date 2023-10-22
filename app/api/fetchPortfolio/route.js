// Importing the NextResponse object from the next/server module
import { NextResponse } from "next/server";

// Importing the supabase client from the app/supabase/supabase module
import supabase from "@/app/supabase/supabase";

export async function GET(req) {

    try {

        // Parsing the URL search params from the request URL
        const { searchParams } = new URL(req.url)

        // Extracting the portfolio_id parameter from the search params
        const portfolio_id = searchParams.get("portfolio_id");

        // Querying the portfolio table in the supabase client with the portfolio_id
        let { data: portfolio, error } = await supabase
            .from('portfolio')
            .select('*')
            .eq("portfolio-id", `${portfolio_id}`) 

        if(error){

            const error_message  = "Error while fetching portfolio, try again by refreshing your browser"
            return NextResponse.json({ error: error_message})

        }else{

            return NextResponse.json({ portfolios: portfolio})

        }


    } catch (error) {

        return NextResponse.json({ error: error_message})

    }

}