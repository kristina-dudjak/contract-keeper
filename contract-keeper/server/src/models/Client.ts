import { ObjectId } from "mongodb"

export interface Client {
  _id: ObjectId
  name: string
  email: string
  phone: string
}
