import { PhoneNumberUtil } from "google-libphonenumber"
import "react-international-phone/style.css"

const phoneUtil = PhoneNumberUtil.getInstance()

export default function isPhoneValid(phone: string): boolean {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
  } catch (error) {
    return false
  }
}
