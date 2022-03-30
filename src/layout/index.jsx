import "./layout.scss";

function Layout({ children }) {
  return (
    <>
      <header className="layout_header">
        <h1>contact list</h1>
      </header>
      <main className="layout_main">
        <div className="layout_container">{children}</div>
      </main>
    </>
  );
}

export default Layout;
