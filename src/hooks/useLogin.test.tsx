import { renderHook, act } from "@testing-library/react";
import useLogin from "./useLogin";

describe("로그인 커스텀훅 테스트", () => {
  test("초기값이 정상적으로 잘 저장이 되었는지 확인한다.", () => {
    const { result } = renderHook(() => useLogin({ email: "", password: "" }));

    // 이메일과 비밀번호는 빈값이고, 에러는 false여야한다.
    expect(result.current.values.email).toBe("");
    expect(result.current.values.password).toBe("");
    expect(result.current.error).toBe(false);
  });

  test("사용자가 아이디 또는 비밀번호를 입력하면 값이 업데이트된다.", () => {
    const { result } = renderHook(() => useLogin({ email: "", password: "" }));

    // 이메일에 값을 넣어준다.
    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "ths_eksldpf@naver.com" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    // 넣어준 값이 동일한지 확인한다.
    expect(result.current.values.email).toBe("ths_eksldpf@naver.com");
  });

  test("아이디 또는 비밀번호가 빈 값일 경우 에러가 true로 바뀐다.", () => {
    const { result } = renderHook(() => useLogin({ email: "", password: "" }));

    // 이메일만 값을 넣어주고 비밀번호는 별도의 값을 넣어주지 않는다.
    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "ths_eksldpf@naver.com" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    // validate 함수를 호출해서 error 상태를 업데이트 시켜준다.
    act(() => {
      result.current.validate();
    });

    // 비밀번호가 빈 값이기 때문에 에러 상태는 true 여야 한다.
    expect(result.current.error).toBe(true);
  });
});
