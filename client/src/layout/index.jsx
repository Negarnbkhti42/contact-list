import "./layout.scss";

function Layout({ children }) {
  return (
    <>
      <div className="layout_container">{children}</div>
    </>
  );
}

export default Layout;
