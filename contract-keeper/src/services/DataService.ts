import { v4 as uuid } from "uuid"
import Contract from "../models/Contract"

class DataService {
  private clients: Client[] = [
    {
      id: uuid(),
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: 1,
    },
    {
      id: uuid(),
      name: "Johnny Doe",
      email: "johnny.doe@gmail.com",
      phone: 1,
    },
  ]

  private contracts: Contract[] = [
    {
      id: uuid(),
      name: "Contract A",
      clientId: this.clients[0].id,
      startDate: new Date(),
      endDate: new Date(),
      details: "Contract details",
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

  getClientContracts(clientId: string): Contract[] {
    return this.contracts.filter((contract) => contract.clientId === clientId)
  }

  searchContracts(query: string): Contract[] {
    return this.contracts.filter(
      (contract) =>
        contract.name.toLowerCase().includes(query.toLowerCase()) ||
        this.getClient(contract.clientId)
          ?.name.toLowerCase()
          .includes(query.toLowerCase())
    )
  }

  private isInRange(start: Date, end: Date, date: Date): boolean {
    date.setHours(0, 0, 0, 0)
    start.setHours(0, 0, 0, 0)
    end.setHours(0, 0, 0, 0)
    return date <= end && date >= start
  }

  searchContractsByDate(date: Date | null): Contract[] {
    return date
      ? this.contracts.filter((contract) =>
          this.isInRange(contract.startDate, contract.endDate, date)
        )
      : this.contracts
  }

  saveContract(
    name: string,
    clientId: string,
    startDate: Date,
    endDate: Date,
    details: string
  ) {
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

export default new DataService()
