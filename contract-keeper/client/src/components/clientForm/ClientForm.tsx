import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import "./ClientForm.css"
import Client from "../../models/Client"
import { Form, useActionData } from "react-router-dom"

interface ClientFormProps {
  client: Client
}

export default function ClientForm({ client }: ClientFormProps) {
  const errors = useActionData() as any

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
        {errors?.fullName && <h5 className="error">{errors.fullName}</h5>}
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          defaultValue={client ? client.email : ""}
        />
        {errors?.email && <h5 className="error">{errors.email}</h5>}
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <PhoneInput
          className="input phone"
          defaultCountry="hr"
          name="phone"
          value={client ? client.phone : ""}
        />
        {errors?.phone && <h5 className="error">{errors.phone}</h5>}
      </div>
      <button className="submit" type="submit">
        Add
      </button>
    </Form>
  )
}
