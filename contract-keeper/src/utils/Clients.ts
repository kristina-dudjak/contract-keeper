export const clients: Client[] = [
  {
    id: 0,
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: 1,
    contracts: [
      {
        id: 0,
        name: "Contract A",
        beginDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        details: "Contract details",
      },
      {
        id: 1,
        name: "Contract B",
        beginDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        details: "Contract details",
      },
    ],
  },
  {
    id: 1,
    name: "Johnny Doe",
    email: "johnny.doe@gmail.com",
    phone: 1,
    contracts: [
      {
        id: 0,
        name: "Contract A",
        beginDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        details: "Contract details",
      },
    ],
  },
]
