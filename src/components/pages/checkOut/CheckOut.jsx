


export const CheckOut = ({envioDeFormulario,captureData}) => {
  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={envioDeFormulario}>
        <input type="text" placeholder="Nombre" name="name" onChange={captureData} required autoComplete="none"/>
        <input type="text" placeholder="Apellido" name="lastName" onChange={captureData} required autoComplete="none" />
        <input type="number" placeholder="DNI" name="dni" onChange={captureData} required autoComplete="none"/>
        <input type="email" placeholder="Correo electrónico" name="mail" onChange={captureData} required autoComplete="none"/>
        <button type="submit">Finalizar</button>
      </form>
    </>
  )
}
