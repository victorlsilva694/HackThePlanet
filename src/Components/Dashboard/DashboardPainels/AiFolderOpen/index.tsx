import { HeaderDashboardContainer } from "../../DashboardHeader/styles";
import FolderData from "./FolderData";
import OverviewStorage from "./FolderData/OverviewStorage";
import { AiFolderOpenContainer } from "./styles";
import React, { useContext, useState } from "react";

function AiFolderOpen() {
  interface IStoreDate {
    currentDate: Date;
  }

  const [currentNewDate, setCurrentNewDate] = useState<IStoreDate>({
    currentDate: new Date(),
  });

  const formattedCurrentDate = currentNewDate.currentDate.toLocaleString(
    "pt-BR",
    { timeZone: "UTC" }
  );
  
  return (
    <AiFolderOpenContainer>
      <HeaderDashboardContainer>
        <div className="content-data-dashboard">
          <div className="layer-title-dashboard">
            <div className="sub-header">
              <h1>Documentação - Manipulação de arquivos e documentos</h1>
            </div>
            <div className="layer-buttons-header">
              <div className="date-layer">
                <h1>Agenda e tarefas - { formattedCurrentDate } </h1>
              </div>
            </div>
          </div>
        </div>
      </HeaderDashboardContainer>

      <FolderData />
    </AiFolderOpenContainer>
  );
}

export default AiFolderOpen;
