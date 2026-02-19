import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white"
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topLeft: {
    display: "flex",
    flexDirection: "row",
    padding: "2%"
  },
  topText: {
    marginLeft: "2%",
    gap: "5%"
  },
  image: {
    width: 66,
    height: 58,
    borderRadius: "15px"
  },
  textName: {
    fontWeight: "bold"
  },
  textDescription: {
    color: "grey"
  },
  textLanguageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#0366d6",
    margin: "1%",
    padding: "3%",
    alignSelf: "flex-start"
  },
  textLanguage: {
    color: "white"
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "grey"
  },
  bottomColumn: {
    display: "flex",
    alignItems: "center"
  },
  bottomNumber: {
    fontWeight: "bold"
  },
  bottomText: {
    color: "grey"
  },
  button: {
    dispay: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
    padding: "2%",
    borderRadius: "10px",
    backgroundColor: "darkblue",
    height: "30px"
  },
  textButton: {
    color: "white"
  }
});

export default styles;
