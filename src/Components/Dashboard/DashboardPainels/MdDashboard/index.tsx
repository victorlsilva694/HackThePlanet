import DashboardHeader from "../../DashboardHeader";
import FilesMdDashboard from "./FilesMdDashboard";
import { DashboardCenterAllData } from "./styles";

function MdDashboard() {
    return(
        <DashboardCenterAllData>
            <DashboardHeader />

            <FilesMdDashboard />
        </DashboardCenterAllData>
    )
}

export default MdDashboard;