import { FormEvent, useEffect, useState } from "react"
import useFormValidation from "../../hooks/useFormValidator"
import DataService from "../../services/DataService"
import ClientFormData from "../../models/ClientFormData"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import { useNavigate, useParams } from "react-router"

export default function ClientForm() {
  const { clientId } = useParams()
  let navigate = useNavigate()
  const { formErrors, validateForm } = useFormValidation()
  const [formData, setFormData] = useState<ClientFormData>({
    fullName: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    if (clientId) {
      const client = DataService.getClients().find(
        (client) => client.id === clientId
      )
      if (client) {
        setFormData({
          fullName: client.name,
          email: client.email,
          phone: client.phone,
        })
      }
    }
  }, [clientId])

  function handleChange(name: string, value: string) {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm(formData)) {
      const { fullName, email, phone } = formData
      DataService.saveClient(fullName, email, phone, clientId)
      navigate("../")
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Full name</label>
        <input
          className="input"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        {formErrors.fullName && (
          <h5 className="error">{formErrors.fullName}</h5>
        )}
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        {formErrors.email && <h5 className="error">{formErrors.email}</h5>}
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <PhoneInput
          className="input"
          defaultCountry="hr"
          name="phone"
          value={formData.phone}
          onChange={(phone) => handleChange("phone", phone)}
        />
        {formErrors.phone && <h5 className="error">{formErrors.phone}</h5>}
      </div>
      <button className="submit" type="submit">
        Add
      </button>
    </form>
  )
}
