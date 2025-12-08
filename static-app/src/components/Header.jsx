export default function Header() {
  return (
    <>
      <header className="header-nav">
        <img className="logo" src="src/assets/react.svg" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-items">Pricing</li>
            <li className="nav-list-items">About</li>
            <li className="nav-list-items">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
