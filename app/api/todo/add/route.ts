import { NextRequest, NextResponse } from "next/server";
import { addTodo } from "../methods";

export async function POST(request: NextRequest, response: NextResponse) {
    console.log("working")
    if (request.method === "POST") {
        let { name } = await request.json();
        addTodo(name);
        return NextResponse.json({ msg: "Todo added" }, { status: 200 })
    } else {
        return NextResponse.json({ msg: "invalid request method" }, { status: 400 })
    }
}