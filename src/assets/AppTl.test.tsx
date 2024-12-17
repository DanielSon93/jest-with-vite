import { test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("로그인 화면이 잘 보인다.", () => {
  // App 컴포넌트를 DOM에 렌더링한다.
  render(<App />);

  // HEADER 텍스트가 문서에 있는지 확인한다.
  expect(screen.getByText("HEADER")).toBeInTheDocument();
});

test("이메일, 비밀번호 입력 없이 로그인 버튼을 클릭하면 에러메시지가 표시된다", async () => {
  render(<App />);

  // click 이벤트를 줄 수 있다.
  fireEvent.click(screen.getByRole("button"));

  expect(screen.getByText("ERROR")).toBeInTheDocument();
});
