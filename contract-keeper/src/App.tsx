import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import Contracts from "./pages/contracts/Contracts"
import Header from "./components/header/Header"
import Customers from "./pages/customers/Customers"
import CustomerEditor from "./pages/customerEditor/CustomerEditor"
import Customer from "./pages/customer/Customer"

export default function App() {
  const router = createBrowserRouter([
    {
      Component: Layout,
      children: [
        {
          index: true,
          Component: Contracts,
        },
        {
          path: "/customers",
          children: [
            {
              index: true,
              Component: Customers,
            },
            {
              path: "new",
              Component: CustomerEditor,
            },
            {
              path: ":customerName",
              Component: Customer,
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
