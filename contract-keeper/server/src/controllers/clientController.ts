import { Response } from "express"
import clientRepository from "../repositories/clientRepository"

class ClientController {
  async getClients(res: Response) {
    res.send(await clientRepository.getClients())
  }

  // getClientById(id: string) {
  //   ClientModel.findOne({ id })
  // }

  // createClient(values: Record<string, any>) {
  //   new ClientModel(values).save().then((client) => client.toObject())
  // }

  // deleteClientById(id: string) {
  //   ClientModel.findOneAndDelete({ _id: id })
  // }

  // updateClientById(id: string, values: Record<string, any>) {
  //   ClientModel.findByIdAndUpdate({ id, values })
  // }
}

export default new ClientController()
