# 별들에게 물어봐!

![별들에게 물어봐 스크린샷](https://absolutelyfullycapable.github.io/portfolio/common/images/img-work-screenshot-ask.png)
<br>
🌟 사이트 바로가기: https://askstars.vercel.app/

<br>
<br>
<br>

## 📝 프로젝트 개요

'별들에게 물어봐!'는 AI 기반 별자리 운세 안내 웹 서비스입니다.

평소 아침마다 별자리 운세를 확인하는 습관에서 아이디어를 얻어, React와 Claude API 연동 학습을 겸해 시작하게 된 개인 프로젝트입니다.
사용자가 이름과 생년월일을 입력하면 함수로 별자리를 판별하고, 해당 별자리 정보를 Claude API에 전달해 오늘의 운세와 행운 아이템을 응답받아 화면에 출력합니다. 결과 화면은 이미지로 저장해 여러 사람과 공유할 수 있도록 했습니다.
기획부터 배포까지 프로젝트 전 과정을 간단하지만 직접 경험해 보며 프로젝트 진행 워크플로우를 한 층 더 잘 이해할 수 있게 되었습니다.

<br>
<br>
<br>

## 🛠️ 사용 기술 & 툴

`React` <br>
`Vite` <br>
`CSS Modules` <br>
`JavaScript` <br>
`Express` <br>
`Claude API` <br>
`html2canvas` <br>
<br><br>
`Visual Studio Code` <br>
`Git` <br>
`Github` <br>
`Figma` <br>
`Photoshop` <br>
`Render`, `Vercel` <br>

<br>
<br>
<br>

## 👩🏻‍💻 작업 내용

- React + Vite 기반 프론트엔드 개발
  - 메인, 정보 입력, 로딩, 에러, 결과 페이지 작업 (반응형)
  - CSS Modules를 활용한 페이지별 스타일 모듈화
- 생년월일을 기반으로 함수를 통해 별자리 판별
- 판별된 별자리를 Claude API에 전달하여 당일 운세 및 행운 아이템 생성
- 응답 결과를 화면에 출력
  - html2canvas 활용해 결과 화면을 이미지로 저장할 수 있는 기능 구현
- API 키 노출 없는 안전한 Express 백엔드 서버 구축
- 서버 / 클라이언트 분리 환경 구성 및 배포
  - 서버: Render 배포
  - 클라이언트: Vercel 배포
