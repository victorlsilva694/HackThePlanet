import { CampaignsSidebar, SidebarBox } from "./styles";
import { SiPlanetscale } from "react-icons/si";
import { MdDashboardCustomize } from "react-icons/md";
import { TbArrowsExchange2 } from 'react-icons/tb';
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../../UserContextStore/UserContext";
import React, { useContext } from "react";
import { AuthContext } from "../../../UserContextStore/AuthContext";

interface IObjectListSidebarItens {
  sidebarId: number;
  item: string;
  link: string;
}

interface IconData {
  id: number;
  name: string;
  icon: JSX.Element;
  listSidebarItens: IObjectListSidebarItens[];
}

const iconsDataInformation: IconData[] = [
  {
    id: 1,
    name: "MdDashboard",
    icon: (
      <MdDashboardCustomize
        style={{
          width: "22px",
          color: "rgb(110, 110, 110)",
          height: "25px",
          margin: "2rem 30px",
        }}
      />
    ),
    listSidebarItens: [
      {
        sidebarId: 1,
        item: " informações de viagem",
        link: "/info/data",
      },
      {
        sidebarId: 1,
        item: "Horários de voos",
        link: "/air/data",
      },
      {
        sidebarId: 1,
        item: "Destinos de viagem",
        link: "/location/data",
      },
      {
        sidebarId: 1,
        item: "Mudanças de planos",
        link: "/change/data",
      },
      {
        sidebarId: 1,
        item: "Alterações de reservas",
        link: "/modify/data",
      },
    ],
  },
  {
    id: 2,
    name: "AiFolderOpen",
    icon: (
      <AiOutlineFolderOpen
        style={{
          width: "22px",
          color: "rgb(110, 110, 110)",
          height: "25px",
          margin: "2rem 30px",
        }}
      />
    ),
    listSidebarItens: [
      {
        sidebarId: 1,
        item: "Documentos de viagem",
        link: "/documents/documents",
      },
      {
        sidebarId: 2,
        item: "Validade de documentos",
        link: "/validate/documents",
      },
      {
        sidebarId: 3,
        item: "Uploads de documentos de viagem",
        link: "/uploads/documents",
      },
    ],
  },
  {
    id: 3,
    name: "GoGraph",
    icon: (
      <GoGraph
        style={{
          width: "22px",
          color: "rgb(110, 110, 110)",
          height: "25px",
          margin: "2rem 30px",
        }}
      />
    ),
    listSidebarItens: [
      {
        sidebarId: 1,
        item: "Minhas viagens",
        link: "/info/data",
      },
      {
        sidebarId: 2,
        item: "Próximos destinos",
        link: "/more-seller/data",
      },
      {
        sidebarId: 3,
        item: "Cartão de usuário",
        link: "/packages/data",
      },
    ],
  },
  {
    id: 4,
    name: "AiSetting",
    icon: (
      <TbArrowsExchange2
        style={{
          width: "22px",
          color: "rgb(110, 110, 110)",
          height: "25px",
          margin: "2rem 30px",
        }}
      />
    ),
    listSidebarItens: [
      {
        sidebarId: 1,
        item: "Backup de documentos",
        link: "/backup/data",
      },
      {
        sidebarId: 2,
        item: "Gerenciamento de conta",
        link: "/management/data",
      },
      {
        sidebarId: 1,
        item: "Configurações de relatório",
        link: "/report/data",
      },
    ],
  },
];

function Sidebar() {
  const [iconSelectedId, setIconSelectedId] = useState<number | null>(null);
  const [nameSelectedIcon, setNameSelectedIcon] = useState<string>('MdDashboard');
  const { setterDashBoardName } = useContext(AuthContext);

  function setIconForUsing(
    idParamIconCallBack: number,
    nameParamIconCallBack: string
  ) {
    setIconSelectedId(idParamIconCallBack);
    setterDashBoardName(nameSelectedIcon);
    setNameSelectedIcon(nameParamIconCallBack);
  }

  return (
    <SidebarBox>
      <div className="header-sidebar">
        <SiPlanetscale /> <h1>Hack the Planet</h1>
      </div>
      <div className="box-layers-sidebar">
        <div className="layer-icons-sidebar">
          <div className="icons-sidebar">
            {iconsDataInformation.map((iconData: IconData) => (
              <div
                key={iconData.id}
                className={`icon-selected ${
                  iconSelectedId === iconData.id ? "add-border-right" : ""
                }`}
                onClick={() => setIconForUsing(iconData.id, iconData.name)}
              >
                {iconData.icon}
              </div>
            ))}
          </div>
        </div>
        <CampaignsSidebar>
          <h1>Campanhas ativas</h1>
          {iconsDataInformation
            .filter(
              (iconsDataCallBack) => iconsDataCallBack.name === nameSelectedIcon
            )
            .map((iconsDataCallBack) => (
              <div
                className="layer-campaigns-sidebar"
                key={iconsDataCallBack.id}
              >
                {iconsDataCallBack.listSidebarItens.map(
                  (sidebarItemsCallBack: IObjectListSidebarItens) => {
                    return (
                      <div className="box-campaigns">
                        <p>{sidebarItemsCallBack.item}</p>
                      </div>
                    );
                  }
                )}
              </div>
            ))}
        </CampaignsSidebar>
      </div>
    </SidebarBox>
  );
}

export default Sidebar;
