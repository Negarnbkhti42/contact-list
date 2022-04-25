import "./layout.scss";

function Layout({ children }) {
  return (
    <>
      <div className="layout_container">
        <header className="layout_header">my contacts</header>
        {children}
      </div>
    </>
  );
}

export default Layout;
