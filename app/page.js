const fetchPost = async ()=>{
  const res = await fetch("http://localhost:3000/api/post",{cache:"no-cache"})
  const response = await res.json()
  return response
}

export default async function Home() {
  const post = await fetchPost()
  return (
    <>
    <h1 className=" text-center">posts</h1>
    {
      post.map((posts)=>{
        return (
        <>
        <h1>{posts.title}</h1>
        <p>{posts.descrition}</p>
        {/* <p>{posts.title}</p> */}
        <hr />
        </>)
      })
    }

    </>
  )
}
