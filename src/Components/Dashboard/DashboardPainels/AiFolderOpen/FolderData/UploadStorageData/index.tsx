import { Button, Form } from "react-bootstrap";
import { UploadStorageContainer } from "./styles";
import { IoIosDocument } from "react-icons/io";
import platform from "platform";
import { useDropzone } from "react-dropzone";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";

function UploadStorageData() {
  interface FileData {
    file: File | null;
    content: string | ArrayBuffer | null;
  }

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
      }
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const submitFile = async (event: React.FormEvent) => {
    if (selectedFile) {
      console.log(selectedFile);
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        await axios.post("http://127.0.0.1/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fileItems = acceptedFiles ? (
    acceptedFiles.map((file) => <h1>{file.name}</h1>)
  ) : (
    <h1>Adicione um arquivo de ao máximo 50mb de tamanho</h1>
  );

  return (
    <UploadStorageContainer>
      <Form.Text id="transaction-name" muted>
        Digitalize os documentos ou tire fotos claras deles e envie-os por meio
        da opção de upload disponível. Certifique-se de seguir todas as
        diretrizes fornecidas e aguarde a confirmação de recebimento.
      </Form.Text>

      <form onSubmit={submitFile} >
        <div {...getRootProps()} className="upload-document">
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
          <input {...getInputProps({ onChange: handleFileChange })} />
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
          <Button
            onClick={submitFile}
            style={{ height: "3rem", width: "180px" }}
            variant="primary"
          >
            Salvar Documento
          </Button>
        </div>
      </form>
    </UploadStorageContainer>
  );
}

export default UploadStorageData;
