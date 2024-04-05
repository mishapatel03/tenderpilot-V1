import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/authentication/login";
import BuyerDashboard from "./components/buyer-dashboard";
import SupplierDashboard from "./components/supplier-dashboard";
import BuyerTender from "./components/buyer-tender";
import { Authentication, BuyerContract, BuyerDashboardRoute, BuyerOrders, BuyerTenders, SupplierDashboardRoute } from "./utils/routes";
import BuyerContracts from "./components/buyer-contracts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact="true" path={Authentication} element={<Login />} />
          <Route exact="true" path={BuyerDashboardRoute} element={<BuyerDashboard />} >
            <Route path={BuyerTenders} element={<BuyerTender />} />
            <Route path={BuyerContract} element={<BuyerContracts />} />
            <Route path={BuyerOrders} element={<h1>third</h1>} />
          </Route>
          <Route exact="true" path={SupplierDashboardRoute} element={<SupplierDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
