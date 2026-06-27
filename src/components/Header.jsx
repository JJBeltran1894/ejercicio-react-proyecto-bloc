function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo-title">📰 Bloc de Noticias</h1>
      </div>
      <div className="header-tools">
        <span className="badge-live">
          <span className="punto-rojo"></span> Actualizado al momento
        </span>
      </div>
    </header>
  );
}

export default Header;
