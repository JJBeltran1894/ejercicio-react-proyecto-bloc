function TarjetaNoticia({ info }) {
  return (
    <div className="card">
      <h3 className="noticia-titulo">{info.titulo}</h3>
      <p className="noticia-cuerpo">{info.body}</p>
      <button className="btn-interaccion">Leer más</button>
    </div>
  );
}

export default TarjetaNoticia;
