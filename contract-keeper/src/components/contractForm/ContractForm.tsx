import { ChangeEvent, FormEvent, useState } from "react"
import DataService from "../../services/DataService"
import formatDate from "../../utils/dateUtils"
import ClientPicker from "../clientPicker/ClientPicker"
import DatePicker from "../datePicker/DatePicker"
import useFormValidation from "../../hooks/useFormValidator"

interface ContractFormData {
  name: string
  clientId: string
  startDate: Date | null
  endDate: Date | null
  details: string
}

export default function ContractForm() {
  const { formErrors, validateForm } = useFormValidation()
  const [formData, setFormData] = useState<ContractFormData>({
    name: "",
    clientId: "",
    startDate: null,
    endDate: null,
    details: "",
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm(formData)) {
      const { name, clientId, startDate, endDate, details } = formData
      DataService.saveContract(name, clientId, startDate!, endDate!, details)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Contract name</label>
      <input name="name" value={formData.name} onChange={handleInputChange} />
      <p>{formErrors.name}</p>

      <ClientPicker
        onClientPick={(id: string) =>
          setFormData({ ...formData, clientId: id })
        }
        error={formErrors.clientId}
      />

      <DatePicker
        name="startDate"
        label="Start date"
        value={formatDate(formData.startDate)}
        onDateChange={(date: Date | null) =>
          setFormData({ ...formData, startDate: date })
        }
        error={formErrors.startDate}
      />

      <DatePicker
        name="endDate"
        label="End date"
        value={formatDate(formData.endDate)}
        onDateChange={(date: Date | null) =>
          setFormData({ ...formData, endDate: date })
        }
        error={formErrors.endDate}
      />

      <label>Details</label>
      <textarea
        name="details"
        value={formData.details}
        onChange={handleInputChange}
      />
      <p>{formErrors.details}</p>

      <button type="submit">Add</button>
    </form>
  )
}
