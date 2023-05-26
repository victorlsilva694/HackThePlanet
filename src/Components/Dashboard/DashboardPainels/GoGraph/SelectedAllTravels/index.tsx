import { SelectedAllTravelsBoxWrapper } from "./styles";

function SelectedAllTravels() {
  interface IMyTravels {
    id: number;
    classNameComponent: string;
  }

  const MyTravelsData: IMyTravels[] = [
    {
      id: 1,
      classNameComponent: "my-travles",
    },
    {
      id: 2,
      classNameComponent: "user-details",
    },
  ];

  return (
    <SelectedAllTravelsBoxWrapper>
      <div className="body-items-travels-referece">
        {MyTravelsData.map((myTravelsData: IMyTravels) => {
          return (
            <div
              key={myTravelsData.id}
              className={myTravelsData.classNameComponent}
            ></div>
          );
        })}
      </div>

      <div className="user-card-reference"></div>
    </SelectedAllTravelsBoxWrapper>
  );
}

export default SelectedAllTravels;
