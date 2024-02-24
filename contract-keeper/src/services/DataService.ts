class DataService {
  getContracts(): Contract[] {
    return [
      {
        id: 0,
        name: "Contract A",
        clientId: 0,
        beginDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        details: "Contract details",
      },
      {
        id: 1,
        name: "Contract B",
        clientId: 0,
        beginDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        details: "Contract details",
      },
      {
        id: 2,
        name: "Contract A",
        clientId: 1,
        beginDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        details: "Contract details",
      },
    ]
  }

  getClients(): Client[] {
    return [
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
  }

  getClient(clientId: number): Client | undefined {
    return this.getClients().find((client) => client.id === clientId)
  }

  getClientContracts(clientId: number): Contract[] {
    return this.getContracts().filter(
      (contract) => contract.clientId === clientId
    )
  }
}

export default new DataService()
