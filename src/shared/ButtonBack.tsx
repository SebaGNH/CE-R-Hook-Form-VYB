import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-end">
      <button onClick={ () => navigate('/') } className='btn btn-outline-primary my-2'>Volver</button>
    </div>
  )
}