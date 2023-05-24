import '../Style/MiComponente.css';
import { FaBullseye, FaEye, FaFlag } from 'react-icons/fa';
import { FaEnvelope, FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa';
import { RiRouteLine } from 'react-icons/ri'; // importar el icono de ruta
import Header from "./Header"

function MiComponente() {
  return (
    <div className="mi-componente">
      <Header/>
      {/* <div className="header">
        <div className="icono"><i className="fas fa-icono"> <img className="logo"src={Rut} alt="/Rut-UCI/src/IMG/RUT-5.png" /></i></div>
        <div className="mensaje">RUT-UCI</div>
      </div> */}
      <div className="contenido">
        <div className="imagen">
          <img src="/src/IMG/R.jpg" alt="Imagen" />
          <div className="mensaje-enmarcado">Sistema de gestión de rutas</div>
          <p className="parrafo">Con nuestro sistema de gestión de rutas, podrás optimizar el transporte de tus productos y servicios de manera eficiente y rentable. Nuestra plataforma te permitirá planificar rutas personalizadas, gestionar los recursos de la empresa de manera más eficaz. ¡Únete a nosotros y lleva tu empresa al siguiente nivel!</p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-header"><FaFlag /> Misión</div>
            <div className="card-body">La misión de esta plataforma es proporcionar a las empresas una solución eficiente y fácil de usar para la planificación y control de rutas optimizadas. el seguimiento en tiempo real del transporte y el monitoreo del consumo de combustible, con el objetivo de mejorar la eficiencia operativa y reducir los costos de transporte y combustible de las empresas.</div>
          </div>
          <div className="card">
            <div className="card-header"><FaEye /> Visión</div>
            <div className="card-body">Ser la plataforma líder en el mercado de sistemas de gestión de rutas, ofreciendo a las empresas una solución integral para optimizar sus operaciones de transporte y alcanzar sus objetivos empresariales.</div>
          </div>
          <div className="card">
            <div className="card-header"><FaBullseye /> Objetivo</div>
            <div className="card-body">Nuestro objetivo es ayudar a las empresas a mejorar la eficiencia y rentabilidad de sus operaciones de transporte a través de una solución completa y fácil de usar que permita la planificación y control de rutas optimizadas, el seguimiento en tiempo real del transporte y el monitoreo del consumo de combustible.</div>
          </div>
        </div>
      </div>
      <section className="redes-sociales">
  <div className="container">
    <h2 className="titulo">Encuéntranos en redes sociales</h2>
    <div className="iconos">
      <a href="#"><i className="fab fa-facebook"><FaFacebook/></i></a>
      <a href="#"><i className="fab fa-twitter"><FaTwitter/></i></a>
      <a href="#"><i className="fab fa-instagram"><FaTelegram/></i></a>
      <a href="#"><i className="fab fa-youtube"><FaEnvelope/></i></a>
    </div>
  </div>
</section>
      <section className="contacto">
  <div className="container">
    <h2 className="titulo">Contáctanos</h2>
    <p className="descripcion">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
    <div className="iconos">
      <a href="#"><i className="fas fa-envelope"></i><span>info@ejemplo.com</span></a>
      <a href="#"><i className="fas fa-phone"></i><span>+1 555 123 456</span></a>
      <a href="#"><i className="fas fa-map-marker-alt"></i><span>Calle Ejemplo 123, Ciudad, País</span></a>
    </div>
  </div>
</section>
      <footer>
        <div className='footer'>
          <div className="izquierda">
            <a href="https://tusitio.com">https://tusitio.com</a>
          </div>
          <div className="derecha">
            <a href="https://tusitio.com"><i><RiRouteLine /></i></a> {/* agregar el icono de ruta */}
          </div>
        </div>
      </footer>
    </div>
  );
}
export default MiComponente;