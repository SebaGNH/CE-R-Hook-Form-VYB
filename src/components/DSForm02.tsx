import { useForm } from "react-hook-form";

interface FormDataInterface {
  nombre: string;
  email: string;
  edad: number;
}

export const DSForm02 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataInterface>();

  const onSubmit = (data: FormDataInterface) => {
    console.log("Form Data", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
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

      <button type="submit">Enviar</button>
    </form>
  );
};