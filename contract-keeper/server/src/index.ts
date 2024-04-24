const port = 4000
import app from "./app"
import { connectToDb } from "./db"

async function main() {
  await connectToDb()

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

main()
