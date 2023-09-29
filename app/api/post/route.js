import { NextResponse } from "next/server"

var post = [
    {
        id: 1,
        title : "Next js 13 ",
        descrition : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores rerum nostrum sequi corrupti delectus quos in nemo vel, ut, inventore assumenda. Fugiat dolores voluptas ab. Pariatur exercitationem consequuntur illum!" ,
        img : "url"
    },{
        id: 2,
        title : "Type scrit ",
        descrition : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maiores rerum nostrum sequi corrupti delectus quos in nemo vel, ut, inventore assumenda. Fugiat dolores voluptas ab. Pariatur exercitationem consequuntur illum!" ,
        img : "url"
    },
]

export const GET = () =>{
    return NextResponse.json(post)
}

export const POST = async ( req) =>{
    const body  = await req.json();
    post.push(body);
    return NextResponse.json({message: " Post successfully created"})
}


export const DELETE =  (req) =>{
    const id = new URL(req.url).searchParams.get("id")
    post = post.filter((posts)=> posts.id != id )
    return NextResponse.json({message: " Post successfully Deleted"})

}

export const PUT = async (req) =>{
    const body = await req.json()
    post = post.map((posts)=>{
        if (posts.id = body.id) {
            return body
        }
        else{
            return posts
        }
    })
    return NextResponse.json({message: " Post successfully updated"})
}