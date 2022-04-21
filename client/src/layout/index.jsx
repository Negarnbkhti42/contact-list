import Sidebar from "../components/Sidebar";
import "./layout.scss";

function Layout({ children }) {
  return (
    <>
      <header className="layout_header">
        <div className="layout_header-container">
          <h1>contact list</h1>
        </div>
      </header>
      <div className="layout_container">
        <Sidebar />
        <main className="layout_main">{children}</main>
      </div>
    </>
  );
}

export default Layout;
