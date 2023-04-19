import React from "react";
import { Nav, Logo, Links, Link, Buttons, HamburguerButton } from "./styles";
import { Button } from "react-bootstrap";
import { SiPlanetscale } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const linksInformation = [
    {
      id: 1,
      name: "Hotéis",
      link: "/hoteis",
    },
    {
      id: 2,
      name: "Destinos",
      link: "/Destinos",
    },
    {
      id: 3,
      name: "Planos",
      link: "/Planos",
    },
    {
      id: 4,
      name: "Pacotes",
      link: "/Pacotes",
    },
  ];

  return (
    <Nav>
      <Logo>
        <SiPlanetscale /> <h1>Hack the Planet</h1>
      </Logo>
      <HamburguerButton>
        <AiOutlineMenu style={{ width: '30px', height: '30px' }} />
      </HamburguerButton>
      <Links>
        {linksInformation.map((linksInformationCallBack) => {
          return (
            <Link
              key={linksInformationCallBack.id}
              href={linksInformationCallBack.link}
            >
              {linksInformationCallBack.name}
            </Link>
          );
        })}
        <Buttons>
          <Button variant="light" style={{ width: "120px", height: "2.5rem" }}>
            Register
          </Button>
          <Button variant="dark" style={{ width: "120px", height: "2.5rem" }}>
            Primary
          </Button>
        </Buttons>
      </Links>
    </Nav>
  );
}

export default Navbar;
