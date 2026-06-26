import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import KPICards from "../components/KPICards";
import PredictionForm from "../components/PredictionForm";
import Charts from "../components/Charts";
import Footer from "../components/Footer";
import FeatureImportanceChart from "../components/FeatureImportanceChart";
import ModelPerformance from "../components/ModelPerformance";
function Dashboard() {

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: 250
        }}
      >

        <Navbar />

        <div style={{ padding: 30 }}>

          <KPICards />

          <PredictionForm />

          <Charts />

          <Footer />

        </div>

      </div>

    </div>

  );

}

export default Dashboard;