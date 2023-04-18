import { NextRequest, NextResponse } from "next/server";
import { updateTodo } from "../methods";


type todo = {
    id: string;
    name: string;
    isDone: boolean;
}

export async function POST(request: NextRequest, response: NextResponse) {
    if (request.method === "POST") {
        let { id, name, isDone } = await request.json();
        updateTodo({ id, isDone: Boolean(isDone) });
        return NextResponse.json({ msg: "Todo updated" }, { status: 200 })
    } else {
        return NextResponse.json({ msg: "invalid request method" }, { status: 400 })
    }
}