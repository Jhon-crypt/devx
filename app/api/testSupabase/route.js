import { NextResponse } from "next/server";
import supabase from "@/app/supabase/supabase";

export async function GET(){

    console.log(supabase)

    return NextResponse.json({  message: "john"})

}