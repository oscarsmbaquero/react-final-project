import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./Config/routes";
//commit prueba Oscar 

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
