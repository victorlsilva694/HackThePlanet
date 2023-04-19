import React from "react";
import { Container } from "./styles";

function HorizontalContainer() {
  interface Item {
    nome: string;
    id: number;
  }

  const items: Item[] = [
    {
      nome: "Lugar",
      id: 1,
    },
    {
      nome: "Pessoas",
      id: 2,
    },
    {
      nome: "Data",
      id: 3,
    },
  ];

  return (
    <Container>
      {items.map((item: any) => {
        return (
          <div className="box-selected">
            <div className="header-box">
              <div className="icon-box"></div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default HorizontalContainer;
