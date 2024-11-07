import clientPromise from "@/lib/mongodb"

export async function POST(request) {

  const body = await request.json()
  console.log(body)
  if (body.url == '' & body.shorturl == '') {
    return Response.json({ success: false, error: true, message: 'fields must not be empty' })
  }
  if (body.url == '') {
    return Response.json({ success: false, error: true, message: 'fields must not be empty' })
  }
  if (body.shorturl == '') {
    return Response.json({ success: false, error: true, message: 'fields must not be empty' })
  }
  const client = await clientPromise;
  const db = client.db("urlshortner")
  const collection = db.collection("url")

  const doc = await collection.findOne({ shorturl: body.shorturl })
  if (doc) {
    return Response.json({ success: false, error: true, message: 'Url already exist' })

  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  })


  return Response.json({ success: true, error: false, message: 'Url Generated successfully' })
}