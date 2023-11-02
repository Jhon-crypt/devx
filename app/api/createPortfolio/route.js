// Importing the NextResponse object from the next/server module
import { NextResponse } from "next/server";

// Importing UUID library for generating unique identifiers
import { v4 as uuidv4 } from 'uuid';

// Importing the supabase client from the app/supabase/supabase module
import supabase from "@/app/supabase/supabase";

// Define a POST request handler function
export async function POST(req) {
    try {
        // Parsing the request body as JSON and extracting the portfolio_title and user_id properties
        const create_portfolio_data = await req.json();
        const { portfolio_title, user_id } = create_portfolio_data;

        // Generate a unique ID using UUID
        let portfolio_id = uuidv4();

        // Define functions to create entries for related tables (projects, skills, and contact)
        async function createPortfolioProjects() {
            const { error } = await supabase
                .from("portfolio-projects")
                .insert({
                    "portfolio_id": `${portfolio_id}`
                });
        }

        async function createPortfolioSkills() {
            const { error } = await supabase
                .from("portfolio-skills")
                .insert({
                    "portfolio_id": `${portfolio_id}`
                });
        }

        async function createPortfolioContact() {
            const { error } = await supabase
                .from("project-contact")
                .insert({
                    "portfolio_id": `${portfolio_id}`
                });
        }

        // Insert a new row into the portfolio table in the supabase client
        const { error } = await supabase
            .from("portfolio")
            .insert({
                name: `${portfolio_title}`,
                "user_id": `${user_id}`,
                "portfolio_id": `${portfolio_id}`
            });

        if (error) {
            // Handle the case where there's an error during portfolio creation
            return NextResponse.json({ error: error, status: 500 });
        } else {
            // If there's no error, create entries in related tables and return a success response
            createPortfolioProjects();
            createPortfolioSkills();
            createPortfolioContact();
            return NextResponse.json({ status: 201, id: portfolio_id });
        }
    } catch (error) {
        // Handle errors that may occur during request handling
        return NextResponse.json({ error: error, error_status: 500 });
    }
}
