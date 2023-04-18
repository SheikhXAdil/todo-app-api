import { NextRequest, NextResponse } from "next/server";
import { deleteTodo } from "../methods";
// import qs from 'qs';

export async function DELETE(request: NextRequest, response: NextResponse) {
    // console.log("working")
    if (request.method === "DELETE") {
        // let { id }: { id: string } = await request.json();

        const id = request.nextUrl.searchParams.get('id');
        // console.log(id)
        if (typeof id === "string") {
            deleteTodo(id);
            return NextResponse.json({ msg: "Todo deleted" }, { status: 200 })
        }

    } else {
        return NextResponse.json({ msg: "invalid request method" }, { status: 400 })
    }
}