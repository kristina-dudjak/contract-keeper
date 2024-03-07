import { v4 as uuid } from "uuid"
import Contract from "../models/Contract"
import Client from "../models/Client"

class DataService {
  private clients: Client[] = [
    {
      id: uuid(),
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "099999999",
    },
    {
      id: uuid(),
      name: "Johnny Doe",
      email: "johnny.doe@gmail.com",
      phone: "099999999",
    },
  ]

  private contracts: Contract[] = [
    {
      id: uuid(),
      name: "Contract A",
      clientId: this.clients[0].id,
      startDate: new Date(),
      endDate: new Date(),
      details:
        "Contract details Contract details Contract details Contract details Contract details Contract details Contract details Contract details Contract details Contract details Contract details",
    },
    {
      id: uuid(),
      name: "Contract B",
      clientId: this.clients[0].id,
      startDate: new Date(),
      endDate: new Date(),
      details: "Contract details",
    },
    {
      id: uuid(),
      name: "Contract A",
      clientId: this.clients[1].id,
      startDate: new Date(),
      endDate: new Date(),
      details: "Contract details",
    },
  ]

  getContracts(): Contract[] {
    return this.contracts
  }

  getClients(): Client[] {
    return this.clients
  }

  getClient(clientId: string): Client | undefined {
    return this.clients.find((client) => client.id === clientId)
  }

  getContract(contractId: string): Contract | undefined {
    return this.contracts.find((contract) => contract.id === contractId)
  }

  getClientContracts(clientId: string): Contract[] {
    return this.contracts.filter((contract) => contract.clientId === clientId)
  }

  getClientId(name: string): string {
    return this.clients.find((client) => client.name === name)!.id
  }

  searchContracts(query: string | null, date: Date | null): Contract[] {
    return this.contracts.filter((contract) => {
      const matchesName = query
        ? contract.name.toLowerCase().includes(query.toLowerCase())
        : true
      const matchesClient = query
        ? this.getClient(contract.clientId)
            ?.name.toLowerCase()
            .includes(query.toLowerCase())
        : true
      const matchesDate = date
        ? this.isInRange(contract.startDate, contract.endDate, date)
        : true
      return (matchesName || matchesClient) && matchesDate
    })
  }

  private isInRange(start: Date, end: Date, date: Date): boolean {
    date.setHours(0, 0, 0, 0)
    start.setHours(0, 0, 0, 0)
    end.setHours(0, 0, 0, 0)
    return date <= end && date >= start
  }

  saveContract(
    name: string,
    clientId: string,
    startDate: Date,
    endDate: Date,
    details: string,
    id?: string
  ) {
    if (id) {
      this.contracts = this.contracts.map((contract) => {
        if (contract.id === id) {
          return {
            id: id,
            clientId: clientId,
            name: name,
            startDate: startDate,
            endDate: endDate,
            details: details,
          }
        } else {
          return contract
        }
      })
    } else {
      this.contracts.push({
        id: uuid(),
        clientId: clientId,
        name: name,
        startDate: startDate,
        endDate: endDate,
        details: details,
      })
    }
  }

  saveClient(name: string, email: string, phone: string, id?: string) {
    if (id) {
      this.clients = this.clients.map((client) => {
        if (client.id === id) {
          return {
            id: id,
            name: name,
            email: email,
            phone: phone,
          }
        } else {
          return client
        }
      })
    } else {
      this.clients.push({
        id: uuid(),
        name: name,
        email: email,
        phone: phone,
      })
    }
  }

  deleteContract(id: string) {
    this.contracts = this.contracts.filter((contract) => contract.id !== id)
  }

  deleteClient(id: string) {
    this.contracts = this.contracts.filter(
      (contract) => contract.clientId !== id
    )
    this.clients = this.clients.filter((client) => client.id !== id)
  }
}

export default new DataService()
