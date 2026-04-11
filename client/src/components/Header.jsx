import { Link } from "react-router-dom";
import logoImg from "../assets/images/icon-logo.png";

function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">
            <img src={logoImg} title="홈 화면으로 이동" />
          </Link>
        </h1>
        <p className="notice">클릭 시 홈 화면으로 이동해요!</p>
      </header>
    </>
  );
}

export default Header;
