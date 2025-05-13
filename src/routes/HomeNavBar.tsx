import { NavLink } from 'react-router-dom';

export const HomeNavBar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex flex-column justify-content-start">
            <ul className="navbar-nav me-auto gap-2 mt-5">

              <NavLink to="/" className="border border-info text-info p-2 rounded" style={{ cursor: 'default' }} >
              CODEVOLUTION
              </NavLink>
              <NavLink to="/Form01" className="nav-link btn btn-outline-info">
              Form 01
              </NavLink>
              <NavLink to="/Form02" className="nav-link btn btn-outline-info">
              Form 02
              </NavLink>
              <NavLink to="/Form03" className="nav-link btn btn-outline-info">
              Form 03
              </NavLink>

            </ul>
            <ul className="navbar-nav me-auto gap-2 mt-5">
              <div className="border border-info text-info p-2 rounded" style={{ cursor: 'default' }} >
              DeepSeek
              </div>
              <NavLink to="/DSForm01" className="nav-link btn btn-outline-info">
              Ds Form 01
              </NavLink>
              <NavLink to="/DSForm02" className="nav-link btn btn-outline-info">
              Ds Form 02
              </NavLink>


            </ul>
          </div>
        </div>
      </nav>

      <h1 className='d-flex justify-content-center mt-5'>En esta sección están las rutas</h1>
    </div>
  )
}