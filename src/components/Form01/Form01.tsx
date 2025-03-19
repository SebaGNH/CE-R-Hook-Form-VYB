import { ButtonBack } from "../../shared/ButtonBack";
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let rerenders = 1;

interface FormI {
  username: string;
  email: string;
  channel: string;
}

export const Form01 = () => {
  const {
    register, // Función para registrar los campos del formulario
    control, // Objeto de control para DevTools
    handleSubmit, // Función para manejar el envío del formulario
    formState: { errors }, // Objeto que contiene los errores de validación
  } = useForm<FormI>();

  const onSubmit = (data: FormI) => {
    console.log('Submited', data);
  };

  return (
    <div className="container d-flex flex-column mt-5">
      <ButtonBack />

      <div className="d-flex justify-content-center contenedor1">
        <form
          className="d-flex align-items-start flex-column gap-2 contenedor2"
          onSubmit={handleSubmit(onSubmit)}
          noValidate // Desactiva la validación nativa del navegador
        >
          <h1>Re Renderizaciones ({rerenders})</h1>

          <label htmlFor='username' className="prueba">Username</label>
          <input
            type='text'
            autoComplete="off"
            id='username'
            {...register('username', { required: 'Usuario Requerido' })} // Registra el campo y lo hace obligatorio
          />
          <p className="text-danger">{errors.username?.message}</p>

          <label htmlFor='email'>E-Mail</label>
          <input
            type='text'
            id='email'
            autoComplete="off"
            {...register('email', {
              required: 'Email Requerido', // Validación requerida
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Validación de formato de email
                message: 'E-mail Invalido',
              },
              validate: {
                // Validación personalizada 1: Evitar un email específico
                notAdmin: (fieldValue) =>
                  fieldValue !== 'admin@example.com' || 'Ingresar un email diferente',
                // Validación personalizada 2: Evitar dominios bloqueados
                notBlackListed: (fieldValue) =>
                  !fieldValue.endsWith('hotmail.com') || 'Dominio no soportado',
              },
            })}
          />
          <p className="text-danger">{errors.email?.message}</p>


          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            autoComplete="off"
            {...register('channel', { required: 'Canal Requerido' })} // Registra el campo y lo hace obligatorio
          />
          <p className="text-danger">{errors.channel?.message}</p>

          <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>

        <DevTool control={control} />
      </div>
    </div>
  );
};