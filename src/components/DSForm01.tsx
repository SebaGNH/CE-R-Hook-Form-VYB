import { useForm } from "react-hook-form";
import { ButtonBack } from "../shared/ButtonBack";

interface FormI {
  nombre: string;
  email: string;
  edad: number;
  password: string;
}

export const DSForm01 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
		reset
  } = useForm<FormI>();

  const onSubmit = (data: FormI) => {
    console.log('Form Data',data); // { email: '...', password: '...' }
		reset(); // <- Limpia todos los campos después del envío exitoso
  };

  return (
    <div className="container d-flex flex-column mt-5">
      <ButtonBack />
      <div className="d-flex justify-content-center contenedor1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate // Desactiva la validación nativa del navegador
        >
          <input
            type="text"
            placeholder={errors.password ? errors.nombre?.message : "Nombre"}
            {...register("nombre", {
              required: "Nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres",
              },
            })}
          />

          <input
            type="email"
            placeholder={errors.password ? errors.email?.message : "Email"}
            {...register("email", {
              required: "Email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Debe ingresar un mail válido",
              },
            })}
          />

          <input
            type="number"
            placeholder={errors.email ? errors.edad?.message : "Edad"}
            {...register("edad", {
              required: "Edad debe ser obligatoria",
              min: {
                value: 18,
                message: "Edad mínima debe ser 18",
              },
              max: {
                value: 99,
                message: "Edad máxima debe ser entre 18 y 99",
              },
            })}
          /><span>{errors.edad?.message}</span>

          <input
            type="password"
            placeholder={
              errors.password ? errors.password?.message : "Contraseña"
            }
            {...register("password", { required: "Contraseña es obligatoria" })}
          />

          <button type="submit" className="btn btn-outline-success">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
