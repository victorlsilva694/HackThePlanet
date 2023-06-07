import { Button, Form } from "react-bootstrap";
import { UploadStorageContainer } from "./styles";
import { IoIosDocument } from "react-icons/io";

function UploadStorageData() {
  return (
    <UploadStorageContainer>
      <Form.Text id="transaction-name" muted>
        Digitalize os documentos ou tire fotos claras deles e envie-os por meio
        da opção de upload disponível. Certifique-se de seguir todas as
        diretrizes fornecidas e aguarde a confirmação de recebimento.
      </Form.Text>

      <div className="upload-document">
        <div className="radius-upload-button">
          <IoIosDocument
            style={{
              color: "rgb(150, 150, 150)",
              width: "28px",
              height: "28px",
            }}
          />
        </div>

        <h1><a href="/download">Clique ou segure</a> e arraste para fazer upload do arquivo</h1>
        <p>Adicione um arquivo de ao máximo 50mb de tamanho </p>
      </div>

      <div className="link-upload">
        <Form style={{ width: "100%" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Link do arquivo</Form.Label>
            <Form.Control
              style={{ height: "3rem" }}
              type="text"
              placeholder="https://caminhodaimagem.com/image/suaimagem.png" 
            />
          </Form.Group>
          <Form.Check
            type="checkbox"
            id="check-validate-token"
            label="Quero fazer o download do arquivo e salvar em meus documentos"
          />
        </Form>
        <br />
        <Button style={{ height: "3rem", width: "180px" }} variant="primary">
          Salvar Documento
        </Button>
      </div>
    </UploadStorageContainer>
  );
}

export default UploadStorageData;
