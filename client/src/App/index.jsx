import Layout from "../layout";
import routes from "../routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={routes.path} {...route} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
