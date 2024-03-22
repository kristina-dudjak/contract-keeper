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
import ClientView from "./pages/clientView/ClientView"
import ContractView from "./pages/contractView/ContractView"
import ContractEditor from "./pages/contractEditor/ContractEditor"
import Error from "./pages/error/Error"
import { loader as contractsLoader } from "./pages/contracts/Contracts"
import { action as contractAction } from "./pages/contractEditor/ContractEditor"
import { loader as contractLoader } from "./pages/contractView/ContractView"
import { loader as clientsLoader } from "./pages/clients/Clients"
import {
  loader as clientLoader,
  action as clientAction,
} from "./pages/clientEditor/ClientEditor"

export default function App() {
  const router = createBrowserRouter([
    {
      Component: Layout,
      errorElement: <Error />,
      children: [
        {
          errorElement: <Error />,
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
                  loader: contractsLoader,
                },
                {
                  path: "new",
                  Component: ContractEditor,
                  action: contractAction,
                },
                {
                  path: ":contractId",
                  children: [
                    {
                      index: true,
                      Component: ContractView,
                      loader: contractLoader,
                    },
                    {
                      path: "edit",
                      Component: ContractEditor,
                      loader: contractLoader,
                      action: contractAction,
                    },
                  ],
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
              loader: clientsLoader,
            },
            {
              path: "new",
              Component: ClientEditor,
              action: clientAction,
            },
            {
              path: ":clientId",
              children: [
                {
                  index: true,
                  Component: ClientView,
                  loader: clientLoader,
                },
                {
                  path: "edit",
                  Component: ClientEditor,
                  loader: clientLoader,
                  action: clientAction,
                },
              ],
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
