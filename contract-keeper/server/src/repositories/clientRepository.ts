import { collections } from "../db"

class ClientRepository {
  async getClients() {
    const clients = await collections.clients.find().toArray()
    return clients
  }
}

export default new ClientRepository()
