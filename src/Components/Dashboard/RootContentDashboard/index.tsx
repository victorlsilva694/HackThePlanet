import { useContext } from "react";
import Sidebar from "../Sidebar";
import { RootContent } from "./styles";
import { UserContext } from "../../../UserContextStore/UserContext";

interface INameDashboard {
  name: string;
}

interface IComponents {
  [key: string]: JSX.Element;
}

function renderComponentByName(name: string) {
  const components: IComponents = {
    MdDashboard: <h1>ASDDDDD</h1>,
    AiFolderOpen: <h1>DDDDDD</h1>,
    GoGraph: <h1>GAAAoGraph</h1>,
    Default: <h1>aAAAAAsdasdasd</h1>
  };

  return components[name] || null;
}

function RootContentDashboard({ name }: INameDashboard) {
  const { nameDashboard } = useContext(UserContext);
  const componentToRender = renderComponentByName(nameDashboard ?? "Default");
  return (
    <RootContent>
      <Sidebar />
      {componentToRender}
    </RootContent>
  );
}

export default RootContentDashboard;
