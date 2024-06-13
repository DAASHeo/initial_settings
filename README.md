# 프로젝트 초기 세팅 가이드
내가 공부하려고 만든 프로젝트 초기 세팅 과정 단계별로 정리 repo. 초기 세팅 완료된 프로젝트라 바로 개발 진행 가능
(commit message 참고)

- 프레임워크: React
- 번들러: Vite
- 코드 품질 관리: ESLint, Prettier
- 의존성 관리: Pnpm
- Git hooks 관리: Husky, lint-staged

## 세팅된 기능
- Vite를 이용한 빌드: Vite를 사용하여 빠른 빌드 및 개발 서버 제공
- 코드 스타일 통일: ESLint와 Prettier를 사용하여 코드 스타일을 일관되게 유지 (airbnb codestyle)
- 자동 코드 검사: Husky와 lint-staged를 사용하여 커밋 전에 자동으로 코드 검사 및 포맷팅
- Alias 설정: eslint-import-resolver-alias를 사용하여 import 경로 설정
- Pull Request 템플릿: 표준화된 PR 설명을 위한 템플릿

## 설치 및 실행
1. 프로젝트 클론
먼저, GitHub 저장소에서 프로젝트를 클론:

```
git clone https://github.com/DAASHeo/initial_settings.git
cd <project_directory>
```

2. 종속성 설치
pnpm을 사용하여 종속성을 설치:

```
pnpm install
```
3. 개발 서버 시작
로컬 개발 서버를 시작:

```
pnpm dev
```

4. 프로덕션 빌드
프로젝트를 빌드:

```
pnpm build
```

## 프로젝트 구조 
```
├── .github
│   └── pull_request_template.md
├── .husky
│   └── pre-commit
├── .vscode
│   └── settings.json
├── public
├── src
│   ├── components
│   ├── pages
│   ├── assets
│   ├── utils
│   ├── store
│   ├── api
│   ├── hooks
│   ├── constants
│   └── enums
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
└── README.md

```