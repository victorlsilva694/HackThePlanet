import { Button, Form } from "react-bootstrap";
import { UploadStorageContainer } from "./styles";
import { IoIosDocument } from "react-icons/io";
import platform from "platform";
import { useDropzone } from "react-dropzone";
import React, { ChangeEvent, useState } from "react";

function UploadStorageData() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [selectedFile, setSelectedFile] = useState<FileData>({
    file: null,
    content: null,
  });

  interface FileData {
    file: File | null;
    content: string | ArrayBuffer | null;
  }

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileContent = await readFileContent(file);
      setSelectedFile({ file, content: fileContent });
    } else {
      setSelectedFile({ file: null, content: null });
    }
  };

  const readFileContent = (file: File): Promise<string | ArrayBuffer> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target?.result);
      };
      reader.onerror = (event) => {
        reject(event.target?.error);
      };
      reader.readAsText(file);
    });
  };

  const fileItems = acceptedFiles ? (
    acceptedFiles.map((file) => <h1>{file.name}</h1>)
  ) : (
    <h1>Adicione um arquivo de ao máximo 50mb de tamanho</h1>
  );

  return (
    <UploadStorageContainer {...getRootProps()}>
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

        <h1>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            style={{ display: "none" }}
          />{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>
            Clique aqui para escolher os arquivos
          </span>{" "}
          ou segure e arraste para fazer upload do arquivo
        </h1>
        <h1>{fileItems}</h1>
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
