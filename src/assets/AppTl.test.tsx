import { test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("로그인 화면이 잘 보인다.", () => {
  render(<App />);
  expect(screen.getByText("HEADER")).toBeInTheDocument();
});

test("이메일, 비밀번호 입력 없이 로그인 버튼을 클릭하면 에러메시지가 표시된다", async () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByText("ERROR")).toBeInTheDocument();
});
