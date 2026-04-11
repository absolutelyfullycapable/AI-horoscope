import { useState } from "react";
import { useNavigate } from "react-router-dom";

import infoStyles from "../assets/css/UserInfo.module.css";

function UserInfo() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  const nav = useNavigate();
  const handleNav = () => {
    if (name === "" && birth === "")
      return alert("이름과 생년월일을 입력해 주세요 😢");
    if (name === "") return alert("이름을 입력해 주세요 😢");
    if (birth === "") return alert("생년월일을 입력해 주세요 😢");
    if (birth.length < 8) return alert("생년월일을 제대로 입력해 주세요 😢");

    nav(`/result?name=${name}&birth=${birth}`);
  };

  return (
    <>
      <section className={infoStyles.info}>
        <div className={infoStyles["form-wrap"]}>
          <div className={infoStyles["form-item"]}>
            <label htmlFor="userName">
              <span>먼저 이름을 알고 싶어! ^-^</span>
            </label>
            <input
              type="text"
              name="user-name"
              id="userName"
              placeholder="이름을 입력해 주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={infoStyles["form-item"]}>
            <label htmlFor="userBirth">
              <span>이제 별자리를 찾아볼게 ^ㅁ^</span>
            </label>
            <p className={infoStyles.notice}>※ 8 자리 숫자로 입력해 주세요</p>
            <input
              type="text"
              name="user-birth"
              id="userBirth"
              maxLength={8}
              placeholder="생년월일을 입력해 주세요"
              value={birth}
              onChange={(e) => setBirth(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
        </div>
        <div className="btn-wrap">
          <button type="button" className="btn" onClick={handleNav}>
            오늘 나의 운세는... 💫
          </button>
        </div>
      </section>
    </>
  );
}

export default UserInfo;
