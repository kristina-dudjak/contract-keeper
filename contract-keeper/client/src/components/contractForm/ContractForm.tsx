import Contract from "../../models/Contract"
import DataService from "../../services/DataService"
import formatDate from "../../utils/dateUtils"
import ClientPicker from "../clientPicker/ClientPicker"
import DatePicker from "../datePicker/DatePicker"
import "./ContractForm.css"
import { Form, useActionData } from "react-router-dom"

interface ContractFormProps {
  contract: Contract
}

export default function ContractForm({ contract }: ContractFormProps) {
  const errors = useActionData() as any

  return (
    <Form method="post" className="form">
      <div className="field">
        <label className="label">Contract name</label>
        <input
          className="input"
          name="name"
          defaultValue={contract ? contract.name : ""}
        />
        {errors?.name && <h5 className="error">{errors.name}</h5>}
      </div>
      <ClientPicker
        defaultValue={
          contract ? DataService.getClient(contract.clientId)!.name : ""
        }
        error={errors?.clientName}
      />

      <DatePicker
        name="startDate"
        label="Start date"
        defaultValue={contract ? formatDate(contract.startDate) : ""}
        error={errors?.startDate}
      />

      <DatePicker
        name="endDate"
        label="End date"
        defaultValue={contract ? formatDate(contract.endDate) : ""}
        error={errors?.endDate}
      />

      <div className="field">
        <label className="label">Details</label>
        <textarea
          className="textarea"
          name="details"
          defaultValue={contract ? contract.details : ""}
          rows={6}
        />
        {errors?.details && <h5 className="error">{errors.details}</h5>}
      </div>

      <button className="submit" type="submit">
        Save
      </button>
    </Form>
  )
}
