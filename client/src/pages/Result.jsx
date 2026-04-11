import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

import getZodiac from "../utils/getZodiac";
import { askClaude } from "../utils/claudeAPI";

import resultStyles from "../assets/css/Result.module.css";

function Result() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const birth = searchParams.get("birth");
  const zodiac = getZodiac(birth);

  const [result, setResult] = useState(""); // Claude 답변 결과 저장
  const [isLoading, setIsLoading] = useState(true); // 로딩
  const [error, setError] = useState(""); // 에러

  // 별자리 타이틀 이미지
  const zodiacImages = {
    양자리: new URL("../assets/images/img-aries-title.png", import.meta.url)
      .href,
    황소자리: new URL("../assets/images/img-taurus-title.png", import.meta.url)
      .href,
    쌍둥이자리: new URL(
      "../assets/images/img-gemini-title.png",
      import.meta.url,
    ).href,
    게자리: new URL("../assets/images/img-cancer-title.png", import.meta.url)
      .href,
    사자자리: new URL("../assets/images/img-leo-title.png", import.meta.url)
      .href,
    처녀자리: new URL("../assets/images/img-virgo-title.png", import.meta.url)
      .href,
    천칭자리: new URL("../assets/images/img-libra-title.png", import.meta.url)
      .href,
    전갈자리: new URL("../assets/images/img-scorpio-title.png", import.meta.url)
      .href,
    사수자리: new URL(
      "../assets/images/img-sagittarius-title.png",
      import.meta.url,
    ).href,
    염소자리: new URL(
      "../assets/images/img-capricorn-title.png",
      import.meta.url,
    ).href,
    물병자리: new URL(
      "../assets/images/img-aquarius-title.png",
      import.meta.url,
    ).href,
    물고기자리: new URL(
      "../assets/images/img-pisces-title.png",
      import.meta.url,
    ).href,
  };

  useEffect(() => {
    // Claude API 호출
    async function fetchResult() {
      try {
        setIsLoading(true);
        const text = await askClaude(name, zodiac);
        setResult(text);
      } catch (err) {
        setError("운세를 불러오지 못했어 T.T");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    if (name && zodiac) fetchResult();
  }, []);

  return (
    <>
      <section className={resultStyles.result}>
        <div className={resultStyles["result-wrap"]}>
          {isLoading && (
            <p className={resultStyles["loading-txt"]}>
              <span className={resultStyles.l1}>별</span>
              <span className={resultStyles.l2}>들</span>
              <span className={resultStyles.l3}>이</span>
              <span className={resultStyles.l4}>고</span>
              <span className={resultStyles.l5}>민</span>
              <span className={resultStyles.l6}>중</span>
              <span className={resultStyles.l7}>.</span>
              <span className={resultStyles.l8}>.</span>
              <span className={resultStyles.l9}>.</span>
              <span className={resultStyles.l10}>💭</span>
            </p>
          )}
          {error && (
            <div className={resultStyles["error-area"]}>
              <p className={resultStyles["error-txt"]}>{error}</p>
              <div className="btn-wrap">
                <Link to="/" className="btn">
                  홈 화면으로 이동하기 🏠
                </Link>
              </div>
            </div>
          )}
          {result && (
            <div className="result-area">
              <div className={resultStyles["result-box"]}>
                <div className={resultStyles["tit"]}>
                  <img src={zodiacImages[zodiac]} alt={zodiac} />
                </div>
                {result.split("\n").map(
                  (line, i) => line.trim() && <p key={i}>{line}</p>,
                  // line.trim(): 비어 있는 줄은 건너뛰고 내용 있는 줄만 렌더링
                )}
              </div>
              <div className="btn-wrap">
                <Link to="/" className="btn">
                  홈 화면으로 이동하기 🏠
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Result;
