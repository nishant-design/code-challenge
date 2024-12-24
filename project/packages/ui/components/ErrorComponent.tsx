interface Props {
  error: string
}

export const ErrorComponent = ({error}: Props) => {

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