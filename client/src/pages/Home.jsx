import { Link } from "react-router-dom";

import homeStyles from "../assets/css/Home.module.css";
import titleImg from "../assets/images/img-home-title.png";

function Home() {
  return (
    <>
      <section className={homeStyles.home}>
        <h2>
          <img src={titleImg} alt="별들에게 물어봐!" />
        </h2>
        <div className="btn-wrap">
          <Link to="/info" className="btn">
            시작해 볼까?
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
