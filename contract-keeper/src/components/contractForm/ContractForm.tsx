import useFormValidation from "../../hooks/useFormValidator"
import Contract from "../../models/Contract"
import DataService from "../../services/DataService"
import formatDate from "../../utils/dateUtils"
import ClientPicker from "../clientPicker/ClientPicker"
import DatePicker from "../datePicker/DatePicker"
import "./ContractForm.css"
import { Form } from "react-router-dom"

interface ContractFormProps {
  contract: Contract
}

export default function ContractForm({ contract }: ContractFormProps) {
  const { formErrors } = useFormValidation()

  return (
    <Form method="post" className="form">
      <div className="field">
        <label className="label">Contract name</label>
        <input
          className="input"
          name="name"
          defaultValue={contract ? contract.name : ""}
        />
        {formErrors.name && <h5 className="error">{formErrors.name}</h5>}
      </div>
      <ClientPicker
        defaultValue={
          contract ? DataService.getClient(contract.clientId)!.name : ""
        }
        error={formErrors.clientId}
      />

      <DatePicker
        name="startDate"
        label="Start date"
        defaultValue={contract ? formatDate(contract.startDate) : ""}
        error={formErrors.startDate}
      />

      <DatePicker
        name="endDate"
        label="End date"
        defaultValue={contract ? formatDate(contract.endDate) : ""}
        error={formErrors.endDate}
      />

      <div className="field">
        <label className="label">Details</label>
        <textarea
          className="textarea"
          name="details"
          defaultValue={contract ? contract.details : ""}
          rows={6}
        />
        {formErrors.details && <h5 className="error">{formErrors.details}</h5>}
      </div>

      <button className="submit" type="submit">
        Save
      </button>
    </Form>
  )
}
