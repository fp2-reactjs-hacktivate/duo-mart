import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalRoutes from "./routes/GlobalRoutes";

const App = () => {
    return (
        <div className="app_container">
            <GlobalRoutes />
        </div>
    );
}

export default App;
