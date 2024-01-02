## client 설치
```bash
npx create-react-app .   
npm install react-router-dom   
npm install axios   
npm install http-proxy-middleware --save
npm install firebase
npm install react-redux   
npm install @reduxjs/toolkit  
npm install react-icons --save 
npm install moment --save
npm install swiper
```
   
## server 설치
```bash
npm init -y    
npm install express --save   
npm install nodemon --save   
npm install path --save   
npm install cors   
npm install node-fetch   
npm install mongoose --save    
npm install multer --save   
```

### KICKOFF

## 팀원소개
|윤영식|이명훈|문진호|윤지성|
|:---:|:---:|:---:|:---:|
|<img width="150px" src="https://avatars.githubusercontent.com/u/144635640?v=4" />|<img width="150px" src="https://avatars.githubusercontent.com/u/144664895?v=4">|<img width="150px" src="https://avatars.githubusercontent.com/u/144635615?v=4">|<img width="150px" src="https://avatars.githubusercontent.com/u/144635615?v=4">|


## 기능소개

- 로그인   
사용자의 이메일과 비밀번호를 입력 받아 Firebase의 인증 기능을 통해 로그인을 수행합니다.<br/>
입력된 이메일과 비밀번호가 유효한지 확인하고, 로그인에 성공하면 알림을 표시하고 메인 페이지로 이동합니다.<br/>
로그인하지 않은 사용자는 계정 만들기 또는 비밀번호 찾기 링크를 통해 해당 페이지로 이동할 수 있습니다.   

- 비밀번호찾기   
사용자가 이전에 사용한 이메일을 입력하면, 해당 이메일로 비밀번호 재설정 링크가 전송됩니다.<br/>
입력한 이메일이 유효하면 Firebase를 통해 비밀번호 재설정 이메일이 전송되며, 전송 완료 시 알림을 표시하고 로그인 페이지로 이동합니다.   

- 회원가입   
Firebase를 이용해 사용자의 이메일과 비밀번호로 회원가입하고, MongoDB를 통해 사용자 데이터를 저장합니다.<br/>
Axios를 사용하여 서버로 데이터를 전송하며, React Router를 이용하여 페이지 간 이동을 합니다.<br/>
또한, 사용자가 입력한 정보의 유효성을 검사하고, 이메일 중복 검사를 수행하여 회원가입 과정을 관리합니다.   

- 리그정보   
리그의 정보를 가져와 보여주는 기능을 구현하였습니다.<br/>
React Router를 통해 경로의 파라미터를 가져와 해당 리그의 정보를 API로 요청하여 가져옵니다.<br/>
리그 정보는 Football Data API에서 받아온 데이터를 사용하여 리그 이름, 팀 수, 팀 정보, 리그 로고 등을 화면에 표시합니다.

- 글작성
사용자가 게시글을 작성하는데 필요한 제목, 내용, 이미지 등의 정보를 입력할 수 있는 폼을 제공합니다.<br />
사용자는 로그인한 상태여야만 글을 작성할 수 있으며, 제출 시에는 유효성을 검사한 후 서버로 데이터를 전송하여 새로운 포스트를 생성합니다.<br/>
서버는 MongoDB와 상호 작용하여 포스트 정보를 저장하고, 작성 완료 후 사용자를 목록 페이지로 리디렉션합니다.<br />
프론트엔드는 React로 구현되었고, 백엔드는 Express와 MongoDB를 사용하여 인증 및 데이터 저장 기능을 통합하여 제공합니다.<br />
이를 통해 사용자는 게시판에 새로운 글을 손쉽게 작성하고 확인할 수 있습니다.   

## 트러블슈팅
