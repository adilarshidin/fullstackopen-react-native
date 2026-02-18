import { waitFor, fireEvent, render, screen } from "@testing-library/react-native";
import SignIn from "../components/SignIn";
jest.mock("../hooks/useSignIn");
import useSignIn from "../hooks/useSignIn";
jest.mock("react-router-native");
import { useNavigate } from "react-router-native";

const credentials = {
  username: "someusername",
  password: "somepassword"
};

const mockSignIn = jest.fn();
const mockNavigate = jest.fn();
useSignIn.mockReturnValue([mockSignIn, { called: false, data: "accessToken", loading: false }]);
useNavigate.mockReturnValue(mockNavigate);

describe("SignIn", () => {
  test("called with correct arguments", async () => {
    render(<SignIn userData={{ me: null }} />);

    fireEvent.changeText(screen.getByPlaceholderText("Username"), credentials.username);
    fireEvent.changeText(screen.getByPlaceholderText("Password"), credentials.password);
    fireEvent.press(screen.getByText("Login"));

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledTimes(1);
      expect(mockSignIn).toHaveBeenCalledWith(credentials.username, credentials.password);
    })
  })
});
