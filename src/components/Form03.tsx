import { ButtonBack } from "../shared/ButtonBack";
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormI {
  username: string;
  email: string;
  channel: string;
  social:{
    twitter: string;
    facebook: string;
  }
  phoneNumber: string[];
}

export const Form03 = () => {
  const {
    register, // Función para registrar los campos del formulario "validaciones"
    control, // Objeto de control para DevTools
    handleSubmit, // Función para manejar el envío del formulario
    formState: { errors }, // Objeto que contiene los errores de validación
  } = useForm<FormI>({
    defaultValues:{
      username: '',
      email: '',
      channel: 'dd',
      social: {
        twitter:'',
        facebook:''
      },
      phoneNumber:['','']
    }}
  );

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
          <h1>Formulario 3</h1>

          <label htmlFor='username' className="prueba">Username</label>
          <input
            type='text'
            autoComplete="off"
            id='username'
            {...register('username', { required: 'Usuario Requerido' })} // Registra el campo y lo hace obligatorio
          />
          <span className="text-danger">{errors.username?.message}</span>

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
          <span className="text-danger">{errors.email?.message}</span>


          <label htmlFor='channel'>Channel
            <span className="text-danger">{errors.channel?.message}</span>
          </label>
          <input
            type='text'
            id='channel'
            autoComplete="off"
            {...register('channel', { required: 'Canal Requerido' })} // Registra el campo y lo hace obligatorio
          />


          <label htmlFor='twitter'>Twitter</label>
          <input
            type='text'
            id='twitter'
            autoComplete="off"
            {...register('social.twitter', { required: 'Red solcial requerida' })}
          />


          <label htmlFor='facebook'>Facebook</label>
          <input
            type='text'
            id='facebook'
            autoComplete="off"
            {...register('social.facebook', { required: 'Red solcial requerida' })}
          />


          <label htmlFor='primaryphoneNumber'>Phone Number Primary</label>
          <input
            type='text'
            id='primaryphoneNumber'
            autoComplete="off"
            {...register('phoneNumber.0', { required: 'Telefono requerido' })}
          />

          <label htmlFor='secondaryPhoneNumber'>Phone Number Secondary</label>
          <input
            type='text'
            id='secondaryPhoneNumber'
            autoComplete="off"
            {...register('phoneNumber.1', { required: 'Telefono requerido' })}
          />

          <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>

        <DevTool control={control} />
      </div>
    </div>
  );
};