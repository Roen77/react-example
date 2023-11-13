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

### 브랜치

#### 03.상품리스트-무한스크롤

- Redux-Saga로 사이드 이펙트 처리하고 무한 스크롤 기능 구현
- React-Query로 사이드 이펙트 처리하고 무한 스크롤 기능 구현

intersectionObserver로 하단의 대상을 관찰하여 데이터를 더 불러올 수 있도록 구현했다.
<br/>
스크롤을 내리면서 데이터가 많아질수록 성능에 영향을 끼치기 때문에 [react-virtualized](https://www.npmjs.com/package/react-virtualized) 같은 대규모 리스트 데이터를 효율적으로 랜더링하기 위한 라이브러리를 사용하는 것이 좋다.
<br/>
참고로 React Native에서는 이와 비슷하게 FlatList가 해당 라이브러리 역할을 대신 해준다.

#### Next Step

React Native에서는 FlatList를 사용하고 최적화하면서 실제로 랜더링 성능에 유의미한 개선 효과를 얻을 수 있었다.

> https://roen77.github.io/posts/memoris-react-native-1/

- react-virtualized 사용시에도 성능이 개선될 수 있는지 확인

<br/>

#### 04.실시간-하이라이트-ContextAPI

- input 태그에서 작성한 데이터를 리스트에서 일치한 데이터를 찾아 실시간으로 하이라이트 하는 기능 구현

- 데이터를 전역으로 관리하고 싶고 소규모 프로젝트라 ContextAPI로 props 대신 내가 주입한 컴포넌트에서만 상태를 관리할 수 있도록 했다.
- React 18버전 동시성 모드가 나오면서 useTransition 훅으로 UI 업데이트를 낮은 우선순위로 표시할 수 있는 기능을 제공해준다고 한다.
  <br/> 공식 문서에서는 "UI를 차단하지 않고 상태를 업데이트할 수 있습니다." 라고 되어있는데 이 말은 우선순위를 낮춤으로써 UI 블로킹을 일으키지 않고 사용자 상호 작용을 처리할 수 있다는 뜻이다.

#### Next Step

- useDeferredValue로 구현해보기
