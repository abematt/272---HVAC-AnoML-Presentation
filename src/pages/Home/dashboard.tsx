import { lazy } from "react";
const tableau =require("tableau-api");
const TableauEmbed = lazy(()=>import("./TableauEmbed"))
const Container = lazy(() => import("../../common/Container"));



const Dashboard = () => {
    return (
        <Container>
            <TableauEmbed/>
        </Container>
    );
};

export default Dashboard;