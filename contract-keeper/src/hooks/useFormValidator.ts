import { useMemo, useState } from "react"
import DataService from "../services/DataService"
import isPhoneValid from "../utils/phoneUtils"

const useFormValidation = () => {
  const clients = useMemo(() => DataService.getClients(), [])
  const [formErrors, setFormErrors] = useState({
    name: "",
    clientId: "",
    startDate: "",
    endDate: "",
    details: "",
    fullName: "",
    email: "",
    phone: "",
  })

  function validateForm(formData: any): boolean {
    let updatedFormErrors = { ...formErrors }
    for (const key in formData) {
      const value = formData[key as keyof typeof formData]
      switch (key) {
        case "name":
          updatedFormErrors.name = value ? "" : "Contract name is required."
          break
        case "clientId":
          const isValidClient = clients.some((client) => client.id === value)
          updatedFormErrors.clientId = isValidClient
            ? ""
            : "Choose a valid client."
          break
        case "startDate":
          updatedFormErrors.startDate =
            value === null ? "Start date is required." : ""
          break
        case "endDate":
          updatedFormErrors.endDate =
            value === null ? "End date is required." : ""
          break
        case "details":
          updatedFormErrors.details = value ? "" : "Details field is required."
          break
        case "fullName":
          updatedFormErrors.fullName = value ? "" : "Client name is required."
          break
        case "email":
          updatedFormErrors.email = value ? "" : "Email is required."
          break
        case "phone":
          updatedFormErrors.phone = isPhoneValid(value)
            ? ""
            : "Phone is not valid."
          break
      }
    }
    setFormErrors(updatedFormErrors)
    return Object.values(updatedFormErrors).every((er) => er === "")
  }

  return { formErrors, validateForm }
}

export default useFormValidation
