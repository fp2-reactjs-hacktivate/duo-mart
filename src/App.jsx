import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalRoutes from "./routes/GlobalRoutes";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="app_container">
      <GlobalRoutes />
      <Footer />
    </div>
  );
};

export default App;
