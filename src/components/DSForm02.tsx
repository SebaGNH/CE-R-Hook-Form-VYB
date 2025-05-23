import { useForm } from "react-hook-form";
import { ButtonBack } from "../shared/ButtonBack";
import { useEffect, useState } from "react";

interface FormProps {
  nombre: string;
  email: string;
  edad: number;
}


export const DSForm02 = () => {
  const [usersData, setUsersData] = useState<Array<FormProps>>([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>();


  const onSubmit = (data: FormProps) => {
    setUsersData((prev: any)  => ([...prev, data]))
    reset();
  };

  return (
    <div className="container d-flex flex-column mt-5">
      <ButtonBack />
      <div style={{display: 'grid', gridTemplateColumns:'70% 30%', gap: '16px' }}>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container  d-flex justify-content-center align-items-center flex-column" noValidate>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre"
              {...register("nombre", {
                required: "Nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "Mínimo 3 caracteres",
                },
              })}
            />
            {errors.nombre && (
              <span className="error-message">{errors.nombre.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Edad"
              {...register("edad", {
                required: "Edad es obligatoria",
                min: {
                  value: 18,
                  message: "Mínimo 18 años",
                },
                max: {
                  value: 99,
                  message: "Máximo 99 años",
                },
              })}
            />
            {errors.edad && (
              <span className="error-message">{errors.edad.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-25">Enviar</button>
        </form>
        <div>
          <pre>{ usersData && usersData.length > 0 ? JSON.stringify(usersData, null, 2) : null }</pre>
        </div>
      </div>
    </div>
  );
};
