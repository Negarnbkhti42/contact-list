import Layout from "../layout";
import routes from "../routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
