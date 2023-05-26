import { useContext, HTMLAttributes } from "react";
import Sidebar from "../Sidebar";
import { RootContent } from "./styles";
import { UserContext } from "../../../UserContextStore/UserContext";
import MdDashboard from "../DashboardPainels/MdDashboard";
import AiFolderOpen from "../DashboardPainels/AiFolderOpen";
import GoGraph from "../DashboardPainels/GoGraph";

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
    AiFolderOpen: <AiFolderOpen />,
    GoGraph: <GoGraph />,
    Default: <h1>aAAAAAsdasdasd</h1>,
  };

  return components[name] || null;
}


function RootContentDashboard({ name }: INameDashboard) {
  const { nameDashboard, userName } = useContext(UserContext);
  const componentToRender = renderComponentByName(nameDashboard ?? "Default");

  return (
    <RootContent>
      <Sidebar />
      {componentToRender}
    </RootContent>
  );
}

export default RootContentDashboard;
