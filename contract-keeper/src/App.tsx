import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"
import "./App.css"
import Contracts from "./pages/contracts/Contracts"
import Header from "./components/header/Header"
import Clients from "./pages/clients/Clients"
import ClientEditor from "./pages/clientEditor/ClientEditor"
import Client from "./pages/client/Client"
import ContractView from "./pages/contractView/ContractView"
import ContractEditor from "./pages/contractEditor/ContractEditor"

export default function App() {
  const router = createBrowserRouter([
    {
      Component: Layout,
      children: [
        {
          children: [
            {
              index: true,
              element: <Navigate to="/contracts" replace={true} />,
            },
            {
              path: "/contracts",
              children: [
                {
                  index: true,
                  Component: Contracts,
                },
                {
                  path: "new",
                  Component: ContractEditor,
                },
                {
                  path: ":contractId",
                  Component: ContractView,
                },
              ],
            },
          ],
        },
        {
          path: "/clients",
          children: [
            {
              index: true,
              Component: Clients,
            },
            {
              path: "new",
              Component: ClientEditor,
            },
            {
              path: ":clientName",
              Component: Client,
            },
          ],
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
