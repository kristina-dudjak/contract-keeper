import { useMemo } from "react"
import DataService from "../../services/DataService"

interface ClientPickerProps {
  value: string
  onClientPick: (value: string, id?: string) => void
  error: string
}

export default function ClientPicker({
  value,
  onClientPick,
  error,
}: ClientPickerProps) {
  const clients = useMemo(() => DataService.getClients(), [])

  function handlePick(value: string) {
    const client = clients.find((client) => client.name === value)
    onClientPick(value, client?.id)
  }

  return (
    <>
      <div className="field">
        <label className="label">Pick a client:</label>
        <input
          className="input"
          list="clients"
          autoComplete="off"
          value={value}
          onChange={(e) => handlePick(e.target.value)}
        />
        {error && <h5 className="error">{error}</h5>}
      </div>
      <datalist id="clients">
        {clients &&
          clients.map((client) => (
            <option key={client.id} value={client.name} />
          ))}
      </datalist>
    </>
  )
}
