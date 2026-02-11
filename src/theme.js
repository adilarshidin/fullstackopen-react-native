import { Platform } from "react-native";

const font = () => {
  switch (Platform.OS) {
    case "android": return "Roboto"
    case "ios": return "Arial"
    default: return "System"
  }
};

export default font;
