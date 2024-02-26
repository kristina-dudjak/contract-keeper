import { useMemo, useState } from "react"
import DataService from "../../services/DataService"

interface ClientPickerProps {
  onClientPick: (id: string) => void
  error: string
}

export default function ClientPicker({
  onClientPick,
  error,
}: ClientPickerProps) {
  const clients = useMemo(() => DataService.getClients(), [])
  const [clientName, setClientName] = useState("")

  function handlePick(name: string) {
    setClientName(name)
    const client = clients.find((client) => client.name === name)
    onClientPick(client!.id)
  }

  return (
    <>
      <label>Clients</label>
      <input
        list="clients"
        autoComplete="off"
        value={clientName}
        onChange={(e) => handlePick(e.target.value)}
      />
      <p>{error}</p>
      <datalist id="clients">
        {clients &&
          clients.map((client) => (
            <option key={client.id} value={client.name} />
          ))}
      </datalist>
    </>
  )
}
