import { CardUserTravelPrice } from "./styles";
import { AiFillEdit } from 'react-icons/ai'

function CardUser() {
  return (
    <CardUserTravelPrice>
      <div className="title-card-user-travel">
        <h1>Valores e total de viagens</h1>
      </div>
      <div className="edit-card-user-travel">
        <AiFillEdit style={{ width: '18px', height: '18px' }} />
      </div>
    </CardUserTravelPrice>
  );
}

export default CardUser;
