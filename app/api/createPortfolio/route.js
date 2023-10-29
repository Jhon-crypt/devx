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

        async function createPortfolioProjects() {

            const { error } = await supabase
                .from("portfolio-projects")
                .insert({
                    "user_id": `${user_id}`,
                    "portfolio_id": `${portfolio_id}`
                });
    
        }
    
        async function createPortfolioSkills() {
    
            const { error } = await supabase
                .from("portfolio-skills")
                .insert({
                    "user_id": `${user_id}`,
                    "portfolio_id": `${portfolio_id}`
                });
    
        }
    
        async function createPortfolioViews() {
    
            const { error } = await supabase
                .from("portfolio-views")
                .insert({
                    "user_id": `${user_id}`,
                    "portfolio_id": `${portfolio_id}`
                });
    
        }
    
        async function createPortfolioContact() {
    
            const { error } = await supabase
                .from("project-contact")
                .insert({
                    "user_id": `${user_id}`,
                    "portfolio_id": `${portfolio_id}`
                });
    
        }
    

        // Inserting a new row into the portfolio table in the supabase client
        const { error } = await supabase
            .from("portfolio")
            .insert({
                name: `${portfolio_title}`,
                "user_id": `${user_id}`,
                "portfolio_id": `${portfolio_id}`
            });

        if (error) {

            const error_message = "Error while creating portfolio, try again"
            return NextResponse.json({ error: error_message, status: 500 })

        } else {

            createPortfolioProjects();
            createPortfolioSkills();
            createPortfolioViews();
            createPortfolioContact();

            return NextResponse.json({ status: 201, id: portfolio_id })

        }


    } catch (error) {

        const error_message = "Error while creating portfolio, try again"
        return NextResponse.json({ error: error_message, error_status: 500 })

    }

    


}