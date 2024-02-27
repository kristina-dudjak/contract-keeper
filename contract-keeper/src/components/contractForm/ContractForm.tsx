import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import DataService from "../../services/DataService"
import formatDate from "../../utils/dateUtils"
import ClientPicker from "../clientPicker/ClientPicker"
import DatePicker from "../datePicker/DatePicker"
import useFormValidation from "../../hooks/useFormValidator"
import ContractFormData from "../../models/ContractFormData"
import "./ContractForm.css"
import { useNavigate, useParams } from "react-router-dom"

export default function ContractForm() {
  const { contractId } = useParams()
  let navigate = useNavigate()
  const { formErrors, validateForm } = useFormValidation()
  const [formData, setFormData] = useState<ContractFormData>({
    name: "",
    clientId: "",
    startDate: null,
    endDate: null,
    details: "",
  })
  const [clientName, setClientName] = useState("")

  useEffect(() => {
    if (contractId) {
      const contract = DataService.getContract(contractId)
      if (contract) {
        const client = DataService.getClient(contract.clientId)
        setFormData({
          name: contract.name,
          clientId: contract.clientId,
          startDate: contract.startDate,
          endDate: contract.endDate,
          details: contract.details,
        })
        if (client) setClientName(client.name)
      }
    }
  }, [contractId])

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
      DataService.saveContract(
        name,
        clientId,
        startDate!,
        endDate!,
        details,
        contractId
      )
      navigate("../")
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Contract name</label>
        <input
          className="input"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <h5 className="error">{formErrors.name}</h5>}
      </div>
      <ClientPicker
        value={clientName}
        onClientPick={(value: string, id?: string) => {
          setClientName(value)
          setFormData({ ...formData, clientId: id ?? "" })
        }}
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

      <div className="field">
        <label className="label">Details</label>
        <textarea
          className="textarea"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
        />
        {formErrors.details && <h5 className="error">{formErrors.details}</h5>}
      </div>

      <button className="submit" type="submit">
        Save
      </button>
    </form>
  )
}
