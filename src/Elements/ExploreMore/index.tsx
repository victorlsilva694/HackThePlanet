import React from "react";
import { Container } from "./styles";
import { SiGooglemaps } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsCalendarDayFill } from "react-icons/bs";

function HorizontalContainer() {

  const items = [
    {
      nome: "Lugar",
      id: 1,
      icon: <SiGooglemaps style={{ width: '22px', height: '22px', color: 'rgb(80, 80, 80)' }} />
    },
    {
      nome: "Pessoas",
      id: 2,
      icon: <BsFillPeopleFill style={{ width: '22px', height: '22px', color: 'rgb(80, 80, 80)'  }} />
    },
    {
      nome: "Data",
      id: 3,
      icon: <BsCalendarDayFill style={{ width: '22px', height: '22px', color: 'rgb(80, 80, 80)'  }} />
    },
  ];

  return (
    <Container>
      {items.map((item: any) => {
        return (
          <div className="box-selected">
            <div className="header-box">
              <div className="icon-box">
                {item.icon}
              </div>
              <h1>{item.nome}</h1>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default HorizontalContainer;
