import { useForm } from "react-hook-form";

const SuscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();

  const handleSubmitForm = (data) => {
    localStorage.setItem("suscribeData", JSON.stringify(data));
    console.log("Formulario enviado");
  };

  const handleResetForm = () => {
    clearErrors();
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label>Nombre</label>
        <input
          type="text"
          {...register("firstName", {
            required: true,
          })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">Este campo es requerido</p>
        )}
        <label>Apellido</label>
        <input
          type="text"
          {...register("lastName", {
            required: true,
          })}
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert">Este campo es requerido</p>
        )}

        <label>Edad</label>

        <input
          type="number"
          {...register("age", {
            required: true,
            min: 1,
            max: 120,
            valueAsNumber: true,
          })}
          aria-invalid={errors.age ? "true" : "false"}
        />
        {errors.age?.type === "required" && (
          <p role="alert">Este campo es requerido</p>
        )}
        {errors.age?.type === "min" && (
          <p role="alert">La edad debe ser mayor o igual a 1</p>
        )}
        {errors.age?.type === "max" && (
          <p role="alert">La edad debe ser menor o igual a 120</p>
        )}

        <label>Correo</label>
        <input
          type="email"
          {...register("email", { required: "Este campo es requerido" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}

        <button type="submit">Suscribirse</button>
        <button type="button" onClick={handleResetForm}>
          Limpiar
        </button>
      </form>
    </>
  );
};

export default SuscribeForm;
