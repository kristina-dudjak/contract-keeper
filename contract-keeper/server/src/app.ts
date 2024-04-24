import clientController from "./controllers/clientController"
import express, { Application, Router } from "express"

const app: Application = express()
const router: Router = express.Router()

app.use(express.json())
app.use("/api", router)

router.get("/clients", clientController.getClients)

export default app
