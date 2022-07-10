import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./Config/routes";
import { AuthProvider } from "./context";
//commit prueba Oscar 

const App = () => {
  return (
    <div className="App">
      <AuthProvider> {/* provee el auth a la aplicación */}
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
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
