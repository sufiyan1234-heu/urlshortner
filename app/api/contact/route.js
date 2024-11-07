import clientPromise from "@/lib/mongodb"

export async function POST(request) {

  const body = await request.json()
  console.log(body)

  if (body.name == "" & body.email == "" & body.message == "") {
    return Response.json({ success: false, error: true, message: 'fields must not be empty' })
  }

  const client = await clientPromise;
  const db = client.db("urlshortner")
  const collection = db.collection("contact")


  const result = await collection.insertOne({
    name: body.name,
    email: body.email,
    message: body.message
  })


  return Response.json({ success: true, error: false, message: 'form submitted' })
}