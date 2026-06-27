function TarjetaNoticia({ info }) {
  return (
    <div className="card">
      {/* Imagen generada dinámicamente según el ID de la noticia */}
      <img
        src={`https://picsum.photos/seed/${info.id}/400/200`}
        alt="Portada de noticia"
        className="card-imagen"
      />

      <div className="card-contenido">
        <span className="card-etiqueta">Última hora</span>
        <h3 className="noticia-titulo">{info.title}</h3>
        <p className="noticia-cuerpo">{info.body}</p>
        <button className="btn-interaccion">Leer más</button>
      </div>
    </div>
  );
}

export default TarjetaNoticia;
