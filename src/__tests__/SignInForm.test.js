import { render, screen, fireEvent } from "@testing-library/react-native";
import SignInForm from "../components/SignInForm";

const mockFormik = {
  values: { username: "", password: "" },
  errors: {},
  touched: {},
  handleChange: jest.fn(),
  handleSubmit: jest.fn()
};

describe("SignInForm", () => {
  test("onSubmit called", () => {
    render(<SignInForm formik={mockFormik} />);
    fireEvent.changeText(screen.getByPlaceholderText("Username"), "some");  
    fireEvent.changeText(screen.getByPlaceholderText("Password"), "args");
    fireEvent.press(screen.getByText("Login"));
    expect(mockFormik.handleSubmit).toHaveBeenCalledTimes(1);
  })
});
