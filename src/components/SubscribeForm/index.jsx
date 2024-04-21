import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "./SubscribeForm.module.css";

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
    <Container className={styles.containerForm}>
      <Row xs={1} md={2} lg={2} className="g-4 m-auto">
        <Col>
          <h2 className={styles.honkLogo}>Suscríbete</h2>
          <p className={styles.pStyle}> 
            Completa este formulario con tus datos para recibir recomendaciones
            y noticias semanales sobre películas en tu correo electrónico.
          </p>
        </Col>
        <Col>
          <Form onSubmit={handleSubmit(handleSubmitForm)} className="w-75">
            <Form.Group controlId="formFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                {...register("firstName", { required: true })}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                Este campo es requerido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                {...register("lastName", { required: true })}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                Este campo es requerido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese su edad"
                {...register("age", {
                  required: true,
                  min: 1,
                  max: 120,
                  valueAsNumber: true,
                })}
                isInvalid={!!errors.age}
              />
              <Form.Control.Feedback type="invalid">
                {errors.age?.type === "required" && "Este campo es requerido"}
                {errors.age?.type === "min" &&
                  "La edad debe ser mayor o igual a 1"}
                {errors.age?.type === "max" &&
                  "La edad debe ser menor o igual a 120"}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                {...register("email", { required: "Este campo es requerido" })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email && errors.email.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className={styles.buttonGroup}>
            <Button type="submit" className={styles.buttonGroupItem} id={styles.buttonGroupItem}>
              Suscribirse
            </Button>
            <Button type="button" onClick={handleResetForm}  id={styles.buttonGroupItem}>
              Limpiar
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SuscribeForm;
