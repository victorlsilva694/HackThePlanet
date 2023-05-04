import { Button, Carousel, Form } from "react-bootstrap";
import { RootContainerPage } from "./styles";
import { SiPlanetscale } from "react-icons/si";
import HomeImage from "./images/HomeImage.png";

function LoginGenericPage() {
  const carouselDataServicesProvided = [
    {
      id: 1,
      images:
        "https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-da-guia-de-informacoes_114360-4868.jpg?w=826&t=st=1683132555~exp=1683133155~hmac=eeb7656c6e829fae2222864f20a215a89cfea3e47b592f1783f94ed4647c3770",
      bodyDataServices: [
        {
          image_id: 1,
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dicta nemo corrupti sed, consectetur, laborum dolorum quisquam enim unde optio ab perspiciatis distinctio a atque in dolores. Blanditiis, libero neque?",
        },
      ],
    },
    {
      id: 2,
      images:
        "https://img.freepik.com/vetores-gratis/data-center-de-midia-social-estatisticas-de-smm-pesquisa-de-marketing-digital-analise-de-tendencias-de-mercado-perita-estudando-os-resultados-da-pesquisa-online-ilustracao-vetorial-de-metafora-de-conceito-isolado_335657-2815.jpg?w=826&t=st=1683132571~exp=1683133171~hmac=0254a30e07c8d8f2608d2ecfdae789432685ead3705e0d3f79379b2608dc6c1b",
      bodyDataServices: [
        {
          image_id: 1,
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dicta nemo corrupti sed, consectetur, laborum dolorum quisquam enim unde optio ab perspiciatis distinctio a atque in dolores. Blanditiis, libero neque?",
        },
      ],
    },
    {
      id: 3,
      images:
        "https://img.freepik.com/vetores-gratis/pesquisa-de-dados-estatisticos-indicadores-de-desempenho-da-empresa-retorno-do-investimento-razao-percentual-flutuacao-dos-indices-variacao-significativa_335657-2552.jpg?w=826&t=st=1683132620~exp=1683133220~hmac=3e23798462544c271477e2cd2972306cabd2d29a9bea048167d5ac272b1de840",
      bodyDataServices: [
        {
          image_id: 1,
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dicta nemo corrupti sed, consectetur, laborum dolorum quisquam enim unde optio ab perspiciatis distinctio a atque in dolores. Blanditiis, libero neque?",
        },
      ],
    },
  ];

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
