import { useMemo } from "react"
import DataService from "../../services/DataService"

interface ClientPickerProps {
  defaultValue: string
  error: string
}

export default function ClientPicker({
  defaultValue,
  error,
}: ClientPickerProps) {
  const clients = useMemo(() => DataService.getClients(), [])

  return (
    <>
      <div className="field">
        <label className="label">Pick a client:</label>
        <input
          className="input"
          list="clients"
          name="clientName"
          autoComplete="off"
          defaultValue={defaultValue}
        />
        {error && <h5 className="error">{error}</h5>}
      </div>
      <datalist className="datalist" id="clients">
        {clients &&
          clients.map((client) => (
            <option className="option" key={client.id} value={client.name} />
          ))}
      </datalist>
    </>
  )
}
