


export const CheckOut = ({envioDeFormulario,captureData}) => {
  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={envioDeFormulario}>
        <input type="text" placeholder="Nombre" name="name" onChange={captureData} required autoComplete="none"/>
        <input type="number" placeholder="Teléfono" name="phone" onChange={captureData} required autoComplete="none"/>
        <input type="email" placeholder="Correo electrónico" name="email" onChange={captureData} required autoComplete="none"/>
        <button type="submit">Finalizar</button>
      </form>
    </>
  )
}
