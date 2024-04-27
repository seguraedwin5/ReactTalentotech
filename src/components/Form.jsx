function Form() {
  return (
    <div>
      <form method="post">
        <div>
          <label htmlFor="nombre">nombre</label>
          <input type="text" name="nombre" />
        </div>
        <div>
          <label htmlFor="correo">correo</label>
          <input type="text" name="correo" />
        </div>
        <div>
          <label htmlFor="telefono">telefono</label>
          <input type="text" name="telefono" />
        </div>
      </form>
    </div>
  );
}

export default Form;
