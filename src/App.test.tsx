import { test } from "@jest/globals";
import { act } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

test("로그인 화면이 잘 보인다.", async () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  await act(() => {
    createRoot(container).render(<App />);
  });

  expect(container.querySelector("header h1")?.textContent).toBe("HEADER");
});

test("이메일, 비밀번호 미입력시 에러메시지가 나타난다.", async () => {
  // 테스트를 위한 #root와 동일한 요소 생성
  const container = document.createElement("div");

  // 해당 요소를 body 하단에 삽입
  document.body.appendChild(container);

  // container 안에 App 컴포넌트 렌더링
  await act(() => {
    createRoot(container).render(<App />);
  });

  // form을 제출할 버튼 가져오기
  const submitButton = container.querySelector("#submitButton");

  // 에러 메시지 가져오기
  let errorMessage = container.querySelector("#errorMessage");

  // form을 제출하기 전에는 에러 메시지가 없기때문에 undefined여야 한다.
  expect(errorMessage?.textContent).toBeUndefined();

  // form 제출 버튼 클릭 이벤트
  await act(() => {
    submitButton?.dispatchEvent(new MouseEvent("click"));
  });

  // form을 제출한 다음에 변한 에러 메시지를 가져온다.
  errorMessage = container.querySelector("#errorMessage");

  // 에러 메시지는 ERROR여야 한다.
  expect(errorMessage?.textContent).toBe("ERROR");
});
