function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo-title">📰 WorldTech</h1>
        <h1 className="logo-subtitle">
          Un vistazo a los últimos avances tecnológicos
        </h1>
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
