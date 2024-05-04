<div align="center">
  <br />
  <!-- 프로젝트 이미지 -->
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">알케미스트 - 테니스 대회 앱</h3>

   <div align="center">
     여러분의 테니스 대회 참가를 더욱 편리하고 즐겁게 만들어드립니다. "알케미스트"에 오신 것을 진심으로 환영합니다!
    </div>
</div>

## 📌 <a name="table">바로가기</a>

1. 🎾 [Introduction](#introduction)
2. 💻 [Quick Start](#quick-start)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🗂️ [Folder Structure](#folder-structure)
5. 🔗 [Links](#links)
6. 📋 [Commit Convention](#commit-convention)

## <a name="introduction">🎾 Introduction</a>

당신의 테니스 대회 참가를 위한 모든 것을 한데 모았습니다! "알케미스트"에 오신 것을 환영합니다. <br/> 알케미스트는 테니스 대회 참가를 더욱 쉽고 효율적으로 만들기 위해 최선을 다하고 있습니다. <br/> 이 앱을 통해 당신은 다가오는 대회의 일정을 확인하고, 원하는 대회에 손쉽게 참가할 수 있습니다. <br/> 또한 다른 테니스 팬들과 함께 대회 결과를 공유하고, 승리의 기쁨을 함께 나눌 수 있습니다.

## <a name="quick-start">💻 Quick Start</a>

다음 단계에 따라 컴퓨터에서 로컬로 프로젝트를 설정합니다.

**Settings**

컴퓨터에 다음이 설치되어 있는지 확인

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) v20.11.0
- [npm](https://www.npmjs.com/) v10.2.4

**Repository Clone**

```bash
git clone https://github.com/OZ-Coding-School/oz_02_collabo-007.git
```

**Check Your Node Version**

```bash
node -v
```

nvm이 설치되어 있는 경우

```bash
nvm use
```

**Installation**

프로젝트 설치

```bash
npm ci
```

**Setting Environment Variables**

프로젝트 root 경로에 `.env`를 생성

```env

```

**Running the Project**

```bash
npm run dev
```

프로젝트를 보려면 브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- TailwindCSS
- Stroybook
- framer-motion
- clsx

## <a name="folder-structure">🗂️ Folder Structure</a>

```
  📦 alchemist
 ┣ 📂 .github
 ┣ 📂 .storybook ------> (스토리북 설정)
 ┣ 📂 .vscode
 ┣ 📂 app
 ┃ ┣ 📂 _asset ------> (font, icon등 asset)
 ┃ ┃ ┣ 📂 fonts
 ┃ ┃ ┗ 📂 icons
 ┃ ┣ 📜 layout.tsx
 ┃ ┗ 📜 page.tsx
 ┣ 📂 components ------> (공통 컴포넌트)
 ┃ ┣ 📂 core ------> (가장 작은 core 단위)
 ┃ ┣ 📂 module ------> (여러개 core의 결합)
 ┃ ┗ 📂 organism ------> (여러 module의 결합)
 ┣ 📂 lib ------> (유틸리티 함수)
 ┃ ┣ 📂 hook ------> (hooks 폴더)
 ┃ ┗ 📂 utils ------> (util 함수)
 ┣ 📂 public
 ┣ 📂 stories ------> (storybook 파일)
 ┣ 📂 styles ------> (global 스타일)
 ┣ 📜 .eslintrc.json
 ┣ 📜 .gitignore
 ┣ 📜 .npmrc
 ┣ 📜 .nvmrc
 ┣ 📜 .prettierrc
 ┣ 📜 README.md
 ┣ 📜 next.config.mjs
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┣ 📜 postcss.config.mjs
 ┣ 📜 tailwind.config.ts
 ┗ 📜 tsconfig.json
```

## <a name="links">🔗 Links</a>

<span style="font-size:50px">🤪</span> 배포링크 아직없지롱

## <a name="commit-convention">📋 Commit Convention</a>

- 🎉 feat : 새로운 기능 추가
- 🪛 refactor : 코드 리팩터링
- 💣 fix : 기능 수정, 버그 수정
- 🖍️ chore : 오타 수정 및 새로운 기능이 추가되지 않고, 코드가 변경 된 경우 (주석 추가 및 수정 포함)
- 📝 docs : 문서 수정 (readme 수정 시)
- ⚙️ conf : 환경 설정
- 🗿 build : 빌드 관련 파일 수정 및 삭제한 경우
- ✅ test : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)
