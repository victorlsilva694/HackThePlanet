import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { RootContainerPage } from "../Login/LoginGenericPage/styles";
import { SiPlanetscale } from "react-icons/si";
import HomeImage from "./images/HomeImage.png";
import { RegisterBoxForm } from "./styles";
import { useState } from "react";
import { useAxios } from "../../Providers/AxiosProvider";

function RegisterUser() {
  interface userData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [userState, setUserState] = useState<userData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { axiosInstance } = useAxios();

  async function fetchData() {
    const response = await axiosInstance.get('/users');
    console.log(response.data);
  }
  

  return (
    <RootContainerPage>
      <RegisterBoxForm>
        <div className="header-login-form">
          <SiPlanetscale style={{ width: "20px", height: "20px" }} />
          <h1>Hack the Planet</h1>
        </div>
        <div className="box-form">
          <div className="box-central">
            <Form>
              <Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nome de usuário</Form.Label>
                  <Form.Control
                    style={{ height: "3rem" }}
                    type="email"
                    placeholder="Digite seu nome completo"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        style={{ height: "3rem" }}
                        type="email"
                        placeholder="emailexemplo@exemplo.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Confirmar Senha</Form.Label>
                      <Form.Control
                        style={{ height: "3rem" }}
                        type="password"
                        placeholder="***********************"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Endereço de email</Form.Label>
                  <Form.Control
                    style={{ height: "3rem" }}
                    type="email"
                    placeholder="emailexemplo@exemplo.com"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  style={{ display: "flex", justifyContent: "space-between" }}
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label="Quero salvar minha senha"
                  />
                  <a href="/login">Já tem uma conta? Entre agora</a>
                </Form.Group>
                <br />
                <Button
                  style={{
                    backgroundColor: "#2d4550",
                    width: "100%",
                    height: "3.5rem",
                    border: "none",
                  }}
                  variant="primary"
                  type="submit"
                >
                  Criar sua conta
                </Button>
              </Container>
            </Form>
          </div>
        </div>
      </RegisterBoxForm>
      <div className="carousel-col-boxform">
        <img src={HomeImage} alt="" />
      </div>
    </RootContainerPage>
  );
}

export default RegisterUser;
