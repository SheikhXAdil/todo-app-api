import { NextRequest, NextResponse } from "next/server";
import { todos } from "../methods";

export async function GET(request: NextRequest) {
    console.log(todos)
    return NextResponse.json(todos)
}