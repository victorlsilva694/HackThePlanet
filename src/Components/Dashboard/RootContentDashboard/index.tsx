import { useContext, HTMLAttributes } from "react";
import Sidebar from "../Sidebar";
import { RootContent } from "./styles";
import { UserContext } from "../../../UserContextStore/UserContext";
import MdDashboard from "../DashboardPainels/MdDashboard";

interface INameDashboard {
  name: string;
}

interface IComponents {
  [key: string]: JSX.Element;
}

function renderComponentByName<Props extends HTMLAttributes<HTMLElement>>(
  name: string,
  props?: Props
) {
  const components: IComponents = {
    MdDashboard: <MdDashboard />,
    AiFolderOpen: <h1>DDDDDD</h1>,
    GoGraph: <h1>GAAAoGraph</h1>,
    Default: <h1>aAAAAAsdasdasd</h1>,
  };

  return components[name] || null;
}


function RootContentDashboard({ name }: INameDashboard) {
  const { nameDashboard, userName } = useContext(UserContext);
  const componentToRender = renderComponentByName(nameDashboard ?? "Default");

  console.log("USER", userName)
  return (
    <RootContent>
      <Sidebar />
      {componentToRender}
    </RootContent>
  );
}

export default RootContentDashboard;
