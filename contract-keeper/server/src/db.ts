import { Client } from "models/Client"
import { Collection, Db, MongoClient } from "mongodb"

const url = "mongodb://localhost:27017"
const dbName = "contractkeeper"

export const connectToDb = async () => {
  const client = new MongoClient(url)
  await client.connect()
  const db = client.db(dbName)
  collections.initCollections(db)
}

class Collections {
  private collections: Partial<{
    clients: Collection<Client>
  }> = {}

  initCollections(db: Db) {
    this.collections.clients = db.collection("clients")
  }

  get clients() {
    if (!this.collections.clients) {
      throw Error("Cannot get clients")
    }
    return this.collections.clients
  }
}

export const collections = new Collections()
