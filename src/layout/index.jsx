import "./layout.scss";

function Layout({ children }) {
  return (
    <>
      <header className="layout_header">
        <div className="layout_header-container">
          <h1>contact list</h1>
        </div>
      </header>
      <main className="layout_main">
        <div className="layout_container">{children}</div>
      </main>
    </>
  );
}

export default Layout;
