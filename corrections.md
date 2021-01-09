# 오탈자 및 개선사항

## 3장

### 위치: p124, 코드 3-28 설명 부분

내용: 설명에 오류가 있습니다.

Before: 부수 효과 함수는 렌더링 결과가 실제 돔에 반영된 후 호출되고, 컴포넌트가 사라지기 직전에 마지막으로 호출된다.

After: 부수 효과 함수는 렌더링 결과가 실제 돔에 반영된 후 호출된다.

## 8장

### 위치: p424, 코드 8-58 를 설명하는 마지막 단락에서

내용: 경로에 오류가 있습니다.

Before: http://localhost:3000/page2-hello

After: http://localhost:3000/page2-hello.html

### 위치: p425, 코드 8-59 를 설명하는 마지막 단락

내용: 내용에 오류가 있습니다.

Before: 브라우저에서 `http://localhost:3000/page2-hello.html` 로 접속해 보면 ... 해결할 수 있다

After: 브라우저에서 `http://localhost:3000/page2?text=hello` 로 접속해 보자. 서버의 콘솔 로그에 `미리 렌더링한 HTML 사용` 문구가 출력된다. 이번에는 `http://localhost:3000/page2?text=abc` 로 접속해 보자. 캐싱된 내용이 없기 때문에 서버사이드 렌더링이 실행된다.
