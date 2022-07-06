지속적인 리팩토링 중입니다.

- 리팩토링 우선 적용 사항
  - ~~로그인 접근 권한 및 상태관리 재설정 (Context API -> Redux)~~ -> 완료
  - ~~상품 정보를 백엔드API -> MockData로 수정 (상품별 MockData 재정의 필요)~~ -> 완료
  - 타입스크립트 적용
  - 기타 자잘한 버그 수정

---

# Fruitz Company

- 과일이나 음료, 과일세트 등 과일 관련 상품들을 판매하는 웹 커머스
- 과일류를 파는 곳으로 'fruitz company' 라고 명명
- UI외에는 하나부터 열까지 직접 코드 작성

## 📌프로젝트 선정 이유

- 깔끔하고 심플한 UI
- 시간이 많이 들어가는 디자인이 많지 않아 기능 구현에 집중 가능
- 프론트엔드 개발을 위한 필수적인 기능이지만 구현하기에 크게 어렵지 않음

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

- Front-End : React.js, React Router, SASS
- Back-End : Python, Django web framework, AWS

### 소통 툴

- Git, Github, Slack, Trello
  ​

### 구현 기능

- 남용현(PM) : NAV, ASIDE, 회원인가 시스템, 상품리스트, 상품상세, 장바구니
- 김동욱 : 회원가입로그인, 마이페이지
- 노영완 : 메인페이지, 팀멤버소개페이지

|                                                                        메인페이지                                                                         |                                                                         회원관리                                                                          |                                                                        상품페이지                                                                         |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="300" height="200" alt="회원가입" src="https://user-images.githubusercontent.com/95746551/162576974-3ff8621d-a1af-42ac-8655-0a1601669f4f.gif"> | <img width="300" height="200" alt="회원관리" src="https://user-images.githubusercontent.com/95746551/162576969-6428e9f7-e756-4a7f-9e42-4cc082b38785.gif"> | <img width="300" height="200" alt="회원가입" src="https://user-images.githubusercontent.com/95746551/162374253-77dfda2e-fbc5-4890-90c2-861b596dadf2.gif"> |

#### 🧑‍💻내가 맡은 기능

- Navbar
  - 상수데이터를 이용 네브바 메뉴 구성
  - 로그인시 토근저장후 LOGIN -> LOGOUT으로 변환, 로그아웃 클릭시 토큰삭제와 함께 로그아웃
  - Context API 를 통해 로그인 접근권한 설정
- Aside
  - 상수데이터를 이용 아코디언 트리 구조의 메뉴구성
  - 메뉴 클릭시 라우터를 이용 해당하는 페이지로 이동 및 백엔드 통신
- 상품 리스트
  - 백엔드 서버간 Query String 전달 API 사용
  - API 이용 상품 리스트 페이지 구현
- 상품 상세
  - 백엔드 서버간 Path Parameter 전달 API 사용
  - API 를 이용하여 상품의 세부 정보 페이지 구현
  - 제품의 수량 조절 기능구현 백엔드서버 반영 API 전달
- 장바구니
  - 회원 유무를 감지하여 해당 회원에게 저장된 장바구니 데이터 API 수신
  - 주문 계속하기와, 장바구니 바로 가기 모달창 구현 페이지 이동간 편한 플로우
  - 장바구니 내 제품의 수량변경 및 삭제 백엔드 Query String API 전달 백엔드 서버 반영

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
