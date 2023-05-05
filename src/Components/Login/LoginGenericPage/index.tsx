import { Button, Carousel, Form } from "react-bootstrap";
import { RootContainerPage } from "./styles";
import { SiPlanetscale } from "react-icons/si";
import HomeImage from "./images/HomeImage.png";

function LoginGenericPage() {
  return (
    <RootContainerPage>
      <div className="login-col-boxform">
        <div className="header-login-form">
          <SiPlanetscale style={{ width: "20px", height: "20px" }} />
          <h1>Hack the Planet</h1>
        </div>
        <div className="box-form">
          <div className="box-central">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Endereço de email</Form.Label>
                <Form.Control
                  style={{ height: "3rem" }}
                  type="email"
                  placeholder="emailexemplo@exemplo.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  style={{ height: "3rem" }}
                  type="password"
                  placeholder="***********************"
                />
              </Form.Group>
              <Form.Text className="text-muted">
                Não compartilhe com ninguém suas informações, por algumas
                questões de segurança.
              </Form.Text>
              <br />
              <br />
              <Form.Group className="mb-3" style={{ display: 'flex', justifyContent: 'space-between' }} controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Quero salvar minha senha" />
                <a href="/register">Registre-se agora</a>
              </Form.Group>
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
                Entrar agora
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div className="carousel-col-boxform">
        <img src={HomeImage} alt="" />
      </div>
    </RootContainerPage>
  );
}

export default LoginGenericPage;
