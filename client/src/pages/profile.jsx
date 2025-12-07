import { useAuth } from '../context/AuthContext';
import '../styles/stylesheet.css';

function Perfil() {
  const { user } = useAuth();

  return (
    <section className="perfil-container">
      <h1 className="perfil-title">Mi Perfil</h1>

      {user ? (
        <div className="perfil-card">
          <p><span>Nombre de usuario:</span> {user.username}</p>
          <p><span>Email:</span> {user.email}</p>
          {user.id && <p><span>ID:</span> {user.id}</p>}
        </div>
      ) : (
        <p className="perfil-empty">No hay datos de usuario.</p>
      )}
    </section>
  );
}

export default Perfil;
