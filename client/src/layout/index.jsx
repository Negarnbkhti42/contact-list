import "./layout.scss";

function Layout({ children }) {
  return (
    <>
      <div className="layout_container">
        <header className="layout_header">my contacts</header>
        <div className="layout_wrapper">{children}</div>
      </div>
    </>
  );
}

export default Layout;
