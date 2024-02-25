class DataService {
  private contracts: Contract[] = [
    {
      id: 0,
      name: "Contract A",
      clientId: 0,
      startDate: new Date(),
      endDate: new Date(),
      details: "Contract details",
    },
    {
      id: 1,
      name: "Contract B",
      clientId: 0,
      startDate: new Date(),
      endDate: new Date(),
      details: "Contract details",
    },
    {
      id: 2,
      name: "Contract A",
      clientId: 1,
      startDate: new Date(),
      endDate: new Date(),
      details: "Contract details",
    },
  ]

  private clients: Client[] = [
    {
      id: 0,
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: 1,
    },
    {
      id: 1,
      name: "Johnny Doe",
      email: "johnny.doe@gmail.com",
      phone: 1,
    },
  ]

  getContracts(): Contract[] {
    return this.contracts
  }

  getClients(): Client[] {
    return this.clients
  }

  getClient(clientId: number): Client | undefined {
    return this.clients.find((client) => client.id === clientId)
  }

  getClientContracts(clientId: number): Contract[] {
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
}

export default new DataService()
