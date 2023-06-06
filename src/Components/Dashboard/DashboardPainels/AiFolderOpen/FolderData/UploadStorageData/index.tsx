import { Form } from "react-bootstrap";
import { UploadStorageContainer } from "./styles";

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

        </div>
      </div>
    </UploadStorageContainer>
  );
}

export default UploadStorageData;
