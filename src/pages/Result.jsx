import { useSearchParams, Link } from "react-router-dom";
import getZodiac from "../utils/getZodiac";

function Result() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const birth = searchParams.get("birth");
  const zodiac = getZodiac(birth);

  return (
    <>
      <section className="result">
        <div className="result-wrap"></div>
        <div className="btn-wrap">
          <Link to="/" className="btn">
            처음으로 돌아가기
          </Link>
        </div>
      </section>
    </>
  );
}

export default Result;
