# We'thing
| 다함께 참여하는 결혼 문화를 이끌어가는 모바일 청첩장 서비스

- 기간: 2024/5/20 ~ 2024/5/31(2주)
- 인원: 4인(Fullstack)

# 기획
## 고객 니즈
1. **독특한 청첩장**을 만들고 싶고, **하객들이 찍어준 사진**도 받고 싶은 신랑신부 👰‍♀️🤵‍♂️
2. **잘 찍은 사진이 있지만** 신랑신부랑 아는 사이가 아니라서 못보내서 아쉽고, **다른 사람들 사이에서 어색**한 하객 👪

## 솔루션
**공유 앨범**과 **실시간 채팅** 기능이 있는 새로운 **모바일 청첩장**
- 공유 앨범을 통해 하객들은 사진 공유를, 신랑신부는 사진 저장을 서로의 연락처 교환없이 간편하게 할 수 있습니다.
- 실시간 채팅을 통해 하객들은 익명으로 부담없이 다른 사람들과 얘기할 수 있고, 신랑신부는 하객들이 궁금하거나 필요한 부분을 빠르게 확인할 수 있습니다. 

# 기능 소개

| 메인 | 하객 명단 관리 | 앨범 |  
|:---:|:---:|:---:|
|<img width="200" alt="메인" src="https://github.com/WE-thing/.github/assets/85729858/3bdd128c-70d3-470b-8f4f-24700f44c985">| <img width="200" alt="하객입력" src="https://github.com/WE-thing/.github/assets/85729858/673e5fae-19a1-496d-97db-0e1b64b60276"> | <img width="200" alt="앨범" src="https://github.com/WE-thing/.github/assets/85729858/de8e4187-598f-445b-b6bd-a4572a1d904d"> |

| 일정 | 채팅 | 내 정보 | 
|:---:|:---:|:---:|
|<img width="200" alt="일정" src="https://github.com/WE-thing/.github/assets/85729858/22af8e90-a3db-4657-be87-a95298cf6e4a"> | <img width="200" alt="채팅" src="https://github.com/WE-thing/.github/assets/85729858/bf39d7a6-18db-4de5-ba11-2d2da3bdeea3">  | <img width="200" alt="내 정보" src="https://github.com/WE-thing/.github/assets/85729858/30e78eef-e9ec-4c96-bced-d271e0e0da76"> |


## 메인 기능 4가지
### ⭐️ 메인 청첩장
- 사용자가 등록한 부부 및 결혼식 정보와 소개글을 보여준다.
- 사용자가 등록한 사진을 갤러리 탭을 통해 제공한다.

### ⭐️ 하객 명단 관리
- 참석 의사 전달 폼으로 하객 등록을 통해 하객 유저가 DB에 생성된다.
- 토큰으로 인증된 사용자는 폼을 통해 수정이 가능하다.
- 인증 상태에 따라 폼의 형태가 바뀐다.
  
### ⭐️ 공유 앨범
- S3와 연결하여 사진을 저장 하고 조회 할 수 있다.
- 토큰으로 인증된 사용자는 사진 업로드가 가능하다.
- 사진을 다운로드 받을 수 있다.

### ⭐️ 실시간 채팅
- 토큰으로 인증된 하객들과 신랑 신부가 채팅을 통해 소통할 수 있다.
- 하객들은 채팅을 통해 결혼식 관련된 질문사항들을 해결할 수 있다.
- 신랑, 신부의 메시지는 하이라이트 처리된다. 


## 서브 기능 2가지
### ⭐️ 일정
- 사용자가 입력한 결혼식 일정을 시간대별로 리스트업하여 보여준다.
- 해당 시간대의 일정 진행시 하이라이트 효과를 준다.
### ⭐️ 내 정보
- 토큰으로 인증된 사용자의 정보를 알 수 있다.
- 하객과 신랑 신부의 UI를 다르게 구성한다. -> 하객 관리 기능 사용 가능.

# 사용 기술
![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![tailwindcss](https://img.shields.io/badge/-tailwindcss-000?&logo=tailwindcss)


![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=node.js)
![AWS](https://img.shields.io/badge/-AWS-000?&logo=Amazon-AWS&logoColor=F90)
![MongoDB](https://img.shields.io/badge/-MongoDB-000?&logo=MongoDB)
![mongoose](https://img.shields.io/badge/-mongoose-000?&logo=mongoose)


![Git](https://img.shields.io/badge/-Git-000?&logo=git)
![Figma](https://img.shields.io/badge/-Figma-000?&logo=Figma)
![Notion](https://img.shields.io/badge/-Notion-000?&logo=Notion)
![Slack](https://img.shields.io/badge/-Slack-000?&logo=Slack)


# 아키텍처
![wething drawio](https://github.com/WE-thing/.github/assets/85729858/773aaf14-75f8-4f4f-b227-3d74de78f147)
```
WE-THING\SRC
│   App.css
│   App.jsx
│   index.css
│   main-router.jsx
│   main.jsx
│   StyleTest.jsx
│
├───components
│   ├───chat
│   │       Chat.jsx
│   │       ChatMessage.jsx
│   │
│   ├───contact
│   │       Contact.jsx
│   │
│   ├───gallery
│   │       Gallery.jsx
│   │
│   ├───gusetbook
│   │       GuestBook.jsx
│   │       GuestBookAfter.jsx
│   │       GuestBookBefore.jsx
│   │
│   ├───home
│   │       Home.jsx
│   │
│   ├───info
│   │       Info.jsx
│   │
│   ├───invitation
│   │       Invitation.jsx
│   │
│   ├───location
│   │       Location.jsx
│   │
│   ├───schedule
│   │       Schedule.jsx
│   │
│   ├───sharedAlbum
│   │       SharedAlbum.jsx
│   │
│   ├───tabList
│   │       TabList.jsx
│   │
│   └───weddinggift
│           WeddingGift.jsx
│
├───hook
│       useAuth.jsx
│
├───lib
│   ├───apis
│   │       album.js
│   │       chat.js
│   │       info.js
│   │       user.js
│   │
│   └───modules
│           AlbumPhotos.jsx
│           Photos.jsx
│
├───routes
│       InvitationCreatePage.jsx
│       InvitationPage.jsx
│       MainPage.jsx
│
└───store
    │   index.js
    │
    └───reducers
            test.js
```

```
server
│   .env
│   .gitignore
│   app.js
│   package-lock.json
│   package.json
│   README.md
│
├───.github
│   └───workflows
│           main.yml
│
├───bin
│       www
│
├───lib
│       updateExpiredInvitations.js
│
├───middleware
│       image.uploader.js
│       uuid.js
│
├───models
│       Album.js
│       Couple.js
│       example.js
│       Invitation.js
│       Message.js
│       Role.js
│       User.js
│
├───public
│   └───stylesheets
│           style.css
│
├───routes
│   └───api
│           album.js
│           couple.js
│           index.js
│           info.js
│           invitations.js
│           message.js
│           user.js
│
└───utils
        auth.js
```

# 팀원 소개
<table>
  <tbody>
    <tr>
        <td align="center"><a href="https://github.com/KimRiun"><b>김경륜</b></td>
        <td align="center"><a href="https://github.com/KimRiun"><b>이동인</b></td>
        <td align="center"><a href="https://github.com/KimRiun"><b>이원규</b></td>
        <td align="center"><a href="https://github.com/KimRiun"><b>임세현</b></td>
    </tr>
    <tr>
      <td align="center"><img width = "150px" src="https://avatars.githubusercontent.com/u/56223389?v=4" alt=""/><br /><br /></td>
      <td align="center"><img width = "150px" src="https://avatars.githubusercontent.com/u/55528388?v=4" alt=""/><br /></td>
      <td align="center"><img width = "150px" src="https://avatars.githubusercontent.com/u/85729858?v=4" alt=""/><br /></td>
      <td align="center"><img width = "150px" src="https://avatars.githubusercontent.com/u/116863184?v=4" alt=""/><br /></td>
    </tr>
    <tr>
       <td align="center">Full-stack</td>
       <td align="center">Full-stack</td>
       <td align="center">Full-stack</td>
       <td align="center">Full-stack</td>
    </tr>
    <tr>
       <td align="center"><b>실시간 채팅</b> <br/> Chat <br/> TabList <br/> useAuth <br/> CI/CD <br/> UI/UX </td>
       <td align="center"><b>메인 청첩장</b> <br/> Main <br/> Invitation <br/> Location <br/> Gallery <br/> UI/UX </td> 
       <td align="center"><b>하객 명단 관리</b> <br/> <b>일정</b> <br/> Contact <br/> GuestBook <br/> WeddingGift <br/> Schedule </td> 
       <td align="center"><b>공유앨범</b> <br/> <b>내 정보</b>  <br/> SharedAlbum <br/> Info <br/> DB Management </td> 
    </tr>
  </tbody>
</table>
