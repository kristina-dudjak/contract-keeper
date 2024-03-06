import useFormValidation from "../../hooks/useFormValidator"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import "./ClientForm.css"
import Client from "../../models/Client"
import { Form } from "react-router-dom"

interface ClientFormProps {
  client: Client
}

export default function ClientForm({ client }: ClientFormProps) {
  const { formErrors } = useFormValidation()

  return (
    <Form method="post" className="form">
      <div className="field">
        <label className="label">Full name</label>
        <input
          className="input"
          type="text"
          name="fullName"
          defaultValue={client ? client.name : ""}
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
          defaultValue={client ? client.email : ""}
        />
        {formErrors.email && <h5 className="error">{formErrors.email}</h5>}
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <PhoneInput
          className="input phone"
          defaultCountry="hr"
          name="phone"
          value={client ? client.phone : ""}
        />
        {formErrors.phone && <h5 className="error">{formErrors.phone}</h5>}
      </div>
      <button className="submit" type="submit">
        Add
      </button>
    </Form>
  )
}
