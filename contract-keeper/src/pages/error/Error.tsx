import { useRouteError } from "react-router"
import errorMessage from "../../utils/errorUtils"

export default function Error() {
  const error = useRouteError()
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage(error)}</i>
      </p>
    </div>
  )
}
