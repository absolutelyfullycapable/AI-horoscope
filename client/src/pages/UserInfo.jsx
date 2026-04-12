import { useState } from "react";
import { useNavigate } from "react-router-dom";

import infoStyles from "../assets/css/UserInfo.module.css";

function UserInfo() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const nav = useNavigate();
  const handleNav = () => {
    if (name === "" && birth === "")
      return alert("이름과 생년월일을 입력해 줘 T.T");
    if (name === "") return alert("이름을 입력해 줘 T.T");
    if (birth === "") return alert("생년월일을 입력해 줘 T.T");
    if (birth.length < 6) return alert("생년월일을 정확하게 입력해 줘 T.T");

    nav(`/result?name=${name}&birth=${birth}`);
  };

  return (
    <>
      <section className={infoStyles.info}>
        <div className={infoStyles["form-wrap"]}>
          <div className={infoStyles["form-item"]}>
            <label htmlFor="userName">
              <span>너를 어떻게 부르면 좋을까?</span>
            </label>
            <input
              type="text"
              name="user-name"
              id="userName"
              placeholder="이름 입력하기"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={infoStyles["form-item"]}>
            <label htmlFor="userBirth">
              <span>이제 별자리를 찾아볼게!</span>
            </label>
            <p className={infoStyles.notice}>※ 6 자리 숫자로 입력해 줘</p>
            <input
              type="text"
              name="user-birth"
              id="userBirth"
              maxLength={8}
              placeholder="생년월일 입력하기"
              value={birth}
              onChange={(e) => setBirth(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
        </div>
        <div className="btn-wrap">
          <button type="button" className="btn" onClick={handleNav}>
            오늘 내 별자리 운세는... 💫
          </button>
        </div>
      </section>
    </>
  );
}

export default UserInfo;
