# React + TypeScript + Vite

간단한 쇼핑몰 프로젝트

- Redux-Saga 와 React-Query로 각각 무한 스크롤 기능을 이용해 상품 리스트 페이지 구현해보고 비교하기

## version

- "react": "^18.2.0",
- "redux": "^4.2.1",
- "typesafe-actions": "^5.1.0"
- "redux-saga": "^1.2.3",
- "@tanstack/react-query": "^4.36.1"
- "tailwindcss": "^3.3.5"

## 폴더 구조

```
├── src
│ ├── App.tsx
│ ├── Router.tsx => 라우터 설정 폴더
│ ├── api => api 관련 설정 모아둔 폴더
│ ├── components => 컴포넌트 폴더
│ ├── layout => 공통 레이아웃 폴더
│ ├── modules => 상태 관리 모듈 모아둔 폴더
│ ├── pages => pages에 관련된 컴포넌트
│ ├── react-query => react-query 로직 모아둔 폴더
│ ├── store.ts => 리듀서와 사가 연결하기 위한 store 폴더
│ └──types

```

### Redux-Saga로 무한 스크롤 기능 구현

### Redux-Query로 무한 스크롤 기능 구현
