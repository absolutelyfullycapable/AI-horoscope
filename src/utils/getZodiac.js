function getZodiac(birthData) {
  const month = Number(birthData.slice(4, 6));
  const day = Number(birthData.slice(6, 8));

  switch (month) {
    case 1:
      if (day >= 20) return "물병자리";
      else return "염소자리";
    case 2:
      if (day >= 19) return "물고기자리";
      else return "물병자리";
    case 3:
      if (day >= 21) return "양자리";
      else return "물고기자리";
    case 4:
      if (day >= 20) return "황소자리";
      else return "양자리";
    case 5:
      if (day >= 21) return "쌍둥이자리";
      else return "황소자리";
    case 6:
      if (day >= 22) return "게자리";
      else return "쌍둥이자리";
    case 7:
      if (day >= 23) return "사자자리";
      else return "게자리";
    case 8:
      if (day >= 23) return "처녀자리";
      else return "사자자리";
    case 9:
      if (day >= 24) return "천칭자리";
      else return "처녀자리";
    case 10:
      if (day >= 23) return "전갈자리";
      else return "천칭자리";
    case 11:
      if (day >= 23) return "사수자리";
      else return "전갈자리";
    case 12:
      if (day >= 25) return "염소자리";
      else return "사수자리";
  }
}

export default getZodiac;
