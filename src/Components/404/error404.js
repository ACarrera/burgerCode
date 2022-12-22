import "./Error404.css";

const Error404 = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Página no encontrada!</h2>
        <p>
          La página que esta buscando podría haber sido eliminada por haber
          cambiado su nombre o no está temporalmente disponible.
        </p>
        <a href="/">Inicio</a>
      </div>
    </div>
  );
};

export default Error404;
