## 두번째 Next.js 게시판
## 특이사항 기록
### 2023.04.24

별 의미 없음 _id 값 toString() 변환해주면 해결됨
```javascript
    Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.
    {_id: {}, title: "asdf", content: ...}
```


app/list/page.js 에서 ListItem.js 별도로 빼고나서 list 페이지에서 새로고침시 무한로딩 이슈
```javascript
    두가지를 진행하였는데 아마 2번이 맞는 해결방법 같음
    1. Next.js 버전 맞추기 
    2. ListItem.js 의 function 에 들어간 async 삭제
```