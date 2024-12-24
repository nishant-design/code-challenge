import { useSelector } from "react-redux"
import { RootState } from "../store/store"

const ErrorComponent = () => {
  const {error} = useSelector((state:RootState) => state.pokemon);

  const reloadApp = () => {
    window.location.reload()
  }

  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <p style={{fontSize: 20, fontWeight: 600}}>
        {error}
      </p>
      <button onClick={reloadApp}>Refresh App</button>
    </div>
  )
}

export default ErrorComponent;