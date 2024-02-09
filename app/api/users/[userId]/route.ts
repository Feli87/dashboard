import { NextResponse } from "next/server"
import { fetchUserById } from "../../../lib/data";

export async function POST(request: Request, context:any) {
    const { userId } = context.params

    let user = await fetchUserById(userId);

    return NextResponse.json(user);
}