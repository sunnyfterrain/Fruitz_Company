지속적인 리팩토링 중입니다.

- 리팩토링 진행 상항
  - 완료 : 상태관리 라이브러리 변경 (Context API -> Redux)
  - 완료 : 상품 정보 리소스 백엔드API -> MockData
  - 진행중 : 타입스크립트 적용
  - 대기중 : 기타 자잘한 버그 수정

---

# Fruitz Company

- 과일이나 음료, 과일세트 등 과일 관련 상품들을 판매하는 이커머스
- UI만 참고하고 이외의 기능은 하나부터 열까지 직접 코드 작성

## 📌프로젝트 선정 이유

- 시간이 많이 들지 않는 깔끔하고 심플한 UI
- 프론트엔드 개발을 위한 필수적인 기본 기능이 있고 구현하기에 크게 어렵지 않음

## 📌개발 기간 및 인원

- 개발기간 : 2022/3/28 ~ 2022/4/7 (약 2주)
- 개발 인원 :

### 🧑‍💻 프론트엔드

|                                                                         남용현                                                                          |                                                                         김동욱                                                                          |                                                                         노영완                                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="200" height="200" alt="남용현" src="https://user-images.githubusercontent.com/95746551/162573146-2b6f6d85-c928-4fd0-ba62-94644140fa53.png"> | <img width="200" height="200" alt="김동욱" src="https://user-images.githubusercontent.com/95746551/162573111-31bcb64a-e7c9-4ded-88a8-5e5eaa512bab.JPG"> | <img width="200" height="200" alt="노영완" src="https://user-images.githubusercontent.com/95746551/162573168-cf925827-c623-47f3-b02b-b40ac7e5fdc7.png"> |
|                                                       [Github](https://github.com/sunnyfterrain)                                                        |                                                          [Github](https://github.com/dan2dong)                                                          |                                                        [Github](https://github.com/nohnohnohnoh)                                                        |

### 🧑‍💻 백엔드

|                                                                         류미류                                                                          |                                                                         한상안                                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="200" height="200" alt="류미류" src="https://user-images.githubusercontent.com/95746551/162573414-d623d83b-91c4-4713-b9b1-6ac5fd93d488.JPG"> | <img width="200" height="200" alt="한상안" src="https://user-images.githubusercontent.com/95746551/162573392-6abdda80-b63d-4cd4-8efe-705a5d6d07d6.png"> |
|                                                           [Github](https://github.com/mquat)                                                            |                                                         [Github](https://github.com/sangahnhan)                                                         |

🔗[Fruitz Company : Backend](https://github.com/wecode-bootcamp-korea/31-1st-TheCreationOfWeb-backend)

## 📌적용 기술 및 구현 기능

### 적용 기술

- Front-End : React.js, React Router, SASS, TypeScript, ReduxTK
- Back-End : Django
- AWS : EC2

### 소통 툴

- Git, Github, Slack, Trello
  ​

### 구현 기능

- 남용현(PM) : NAV, ASIDE, 상품리스트, 상품상세, 장바구니
- 김동욱 : 회원가입 로그인 페이지, 마이페이지
- 노영완 : 메인페이지, 팀멤버 소개페이지

|                                                                        메인페이지                                                                         |                                                                         회원관리                                                                          |                                                                        상품페이지                                                                         |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="300" height="200" alt="회원가입" src="https://user-images.githubusercontent.com/95746551/162576974-3ff8621d-a1af-42ac-8655-0a1601669f4f.gif"> | <img width="300" height="200" alt="회원관리" src="https://user-images.githubusercontent.com/95746551/162576969-6428e9f7-e756-4a7f-9e42-4cc082b38785.gif"> | <img width="300" height="200" alt="회원가입" src="https://user-images.githubusercontent.com/95746551/162374253-77dfda2e-fbc5-4890-90c2-861b596dadf2.gif"> |

#### 🧑‍💻내가 맡은 기능

- Navbar
  - 로그인 시 토큰 이 확인되면 로그인 메뉴가 LOGIN -> LOGOUT으로 변환되어
    사용자가 직관적으로 로그인 상태를 확인가능, 로그아웃 클릭시 토큰삭제와 함께 로그아웃
  - Context API 를 통해 페이지별 로그인 인가 확인

- Aside
  - 트리 구조의 메뉴구성, 메뉴 클릭시 라우터 이동 및 백엔드 통신

- 상품 리스트 페이지
  - Query String 을 이용한 API 통해 리스트 페이지 호출

- 상품 상세 페이지
  - Path Parameter 를 통한 API를 이용하여 각 품목별 상세 페이지 구현
  - 제품의 수량 조절 시 백엔드 서버에 즉시 반영

- 장바구니
  - 회원 유무를 감지하여 해당 회원에게 저장된 장바구니 데이터 수신
  - 주문 계속하기와, 장바구니 바로 가기 모달창을 구현하여 사용자의 편리한 페이지 이동 구현
  - 장바구니 내 제품의 수량변경 및 삭제 는 즉시 백엔드에 반영

<!-- ## [구현 및 기술 논의 - Wiki](https://github.com/sunnyfterrain/Fruitz-Company/wiki/Fruitz-Company) -->

<!-- https://documenter.getpostman.com/view/20018497/Uyr8ndt3 -->

## [프로젝트 회고 링크](https://sunnyfterrain.github.io/life/life-1st.html)

## 배포

### AWS (현재는 백엔드API가 연결이 안되는 관계로 Mock Data 로 변경하였습니다.)

<!-- S3 :
http://fruitzcompany.s3-website.ap-northeast-2.amazonaws.com/ -->

EC2 :
http://3.34.188.158:8000/

### 로컬 실행

- git clone
- npm install
- npm start

## 영상시연

https://www.youtube.com/watch?v=K4G5Y80j6Yw

## 📌Reference

- 이 프로젝트는 [프릳츠커피](https://fritz.co.kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
