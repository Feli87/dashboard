// import { fetchUserById } from "../lib/data"
import { NextResponse } from "next/server"
export async function GET() {
    return NextResponse.json({
        test:'hello world'
    });
}