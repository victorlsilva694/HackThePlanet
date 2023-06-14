import { Button } from "react-bootstrap";
import { InProgressTravelsTableWrapper } from "./styles";
import { useContext, useEffect, useState } from "react";
import { dashboardApiRequests } from "../../../../../../hooks/useApi";
import { AuthContext } from "../../../../../../UserContextStore/AuthContext";
import { ImFilesEmpty } from "react-icons/im";
import { format, addMonths, parse, parseISO } from "date-fns";
import TravelsTableBody from "./TravelsTableBody";

interface IButtonProps {
  buttonSelected: string;
}

function InProgressTravels({ buttonSelected }: IButtonProps) {
  interface IUserTravelsTableData {
    id: number;
    name: string | JSX.Element;
    lengthTableData: string;
  }

  interface Transaction {
    covid_data: string;
    created_at: string;
    id: number;
    passport: string;
    price_values: string;
    transaction_name: string;
    travel_code: string;
    updated_at: string;
    user_id: number;
    warning_annotation: string;
  }

  interface StringComponentProps {
    value: string;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [travelsInProgressData, setTravelsInProgressData] = useState<
    Transaction[]
  >([]);
  const [travelsFinalizedData, setTravelsFinalizedData] = useState<
    Transaction[]
  >([]);
  const [futureTravelsData, setFutureTravelsData] = useState<Transaction[]>([]);

  const requestDashboard = dashboardApiRequests();
  const { user } = useContext(AuthContext);

  const userTravelsTableData: IUserTravelsTableData[] = [
    {
      id: 0,
      lengthTableData: "col-xs-2",
      name: <input type="checkbox" style={{ width: "18px", height: "18px" }} />,
    },
    {
      id: 1,
      name: "ID",
      lengthTableData: "col-xs-4",
    },
    {
      id: 2,
      name: "Destino ou nome da viagem",
      lengthTableData: "col-xs-6",
    },
    {
      id: 3,
      name: "Dia da voo",
      lengthTableData: "col-xs-4",
    },
    {
      id: 4,
      name: "Excluir",
      lengthTableData: "col-xs-5",
    },
  ];

  function TravelsInProgressComponent() {
    return (
      <>
        {travelsInProgressData.length === 0 ? (
          <div className="empty-data-travel">
            <ImFilesEmpty
              style={{ width: "32px", height: "32px", color: "rgb(120, 120, 120)" }}
            />
            <h1>Não existem viagens em andamento</h1>
            <p>
              Adicione viagens no painel principal para que seja visível nessa tabela
            </p>
          </div>
        ) : (
          <TravelsTableBody tableBodyTravels={travelsInProgressData} />
        )}
      </>
    );
  }

  function TravelsFinalizedComponent() {
    return (
      <div className="empty-data-travel">
        <ImFilesEmpty
          style={{ width: "32px", height: "32px", color: "rgb(120, 120, 120)" }}
        />
        <h1>Não existem viagens finalizadas</h1>
        <p>
          Adicione viagens no painel principal para que seja visivel nessa
          tabela
        </p>
      </div>
    );
  }

  function FutureTravelsComponent() {
    return (
      <div className="empty-data-travel">
        <ImFilesEmpty
          style={{ width: "32px", height: "32px", color: "rgb(120, 120, 120)" }}
        />
        <h1>Não existem viagens Futuras planejadas</h1>
        <p>
          Adicione viagens no painel principal para que seja visivel nessa
          tabela
        </p>
      </div>
    );
  }

  function EmptyDataTabel({ value }: StringComponentProps) {
    const componentMap: { [key: string]: React.ReactElement } = {
      "Viagens em andamento": <TravelsInProgressComponent />,
      "Viagens concluídas": <TravelsFinalizedComponent />,
      "Viagens Futuras": <FutureTravelsComponent />,
    };

    const componentToRender = componentMap[value];

    return <div>{componentToRender}</div>;
  }

  interface DataProvider {
    [key: string]: Transaction[];
  }

  function processData(modifiedTransactions: Transaction[]): DataProvider {
    const dataProvider: DataProvider = {
      travelsInProgress: [],
      travelsFinalized: [],
      futureTravels: [],
    };

    const currentDate = new Date();

    modifiedTransactions.forEach((transaction: Transaction) => {
      const createdAtDate = new Date(
        transaction.created_at.split("/").reverse().join("/")
      );

      const key =
        currentDate < createdAtDate
          ? "travelsInProgress"
          : currentDate > createdAtDate
          ? "travelsFinalized"
          : "futureTravels";

      dataProvider[key].push(transaction);
    });

    setTravelsInProgressData(dataProvider.travelsInProgress)

    return dataProvider;
  }

  useEffect(() => {
    const fetchData = async () => {
      const trasactionResponse =
        await requestDashboard.getAllTransactionsByUserId(
          parseInt((user?.id ?? "").toString(), 10)
        );
      const modifiedTransactions = trasactionResponse.map(
        (transaction: any) => {
          const originalDate = parseISO(transaction.created_at);
          const modifiedDate = addMonths(originalDate, 6);
          const formattedDate = format(modifiedDate, "dd/MM/yyyy");

          return {
            ...transaction,
            created_at: formattedDate,
          };
        }
      );

      processData(modifiedTransactions)["travelsInProgress"];
      processData(modifiedTransactions)["travelsFinalized"];
      processData(modifiedTransactions)["futureTravels"];

    };

    fetchData();
  }, []);

  return (
    <InProgressTravelsTableWrapper>
      <div className="table-header-travels-layer">
        {userTravelsTableData.map(
          (userTravelsTableDataCallBack: IUserTravelsTableData, key: any) => {
            return (
              <div
                key={key}
                className={userTravelsTableDataCallBack.lengthTableData}
              >
                {userTravelsTableDataCallBack.name}
              </div>
            );
          }
        )}
      </div>
      
      <div>
        <EmptyDataTabel key={buttonSelected} value={buttonSelected} />
      </div>
    </InProgressTravelsTableWrapper>
  );
}

export default InProgressTravels;
