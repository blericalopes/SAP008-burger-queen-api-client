import Button from "../components/button"

export function System() {
  return (
    <>
      <div id="system-buttons">
        <Button text={"Café da manhã"}></Button>
        <Button text={"Cardápio dia todo"}></Button>
      </div>
      <div id="system-buttons-orders">
        <Button text={"Pedidos prontos"}></Button>
      </div>
      
    </>
  )
}