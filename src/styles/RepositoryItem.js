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
    padding: 6
  },
  topText: {
    marginLeft: 6,
    //gap: "5%"
  },
  image: {
    width: 66,
    height: 58,
    borderRadius: 15
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
    borderRadius: 10,
    backgroundColor: "#0366d6",
    margin: 4,
    padding: 8,
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
    margin: 6,
    padding: 6,
    borderRadius: 10,
    backgroundColor: "darkblue",
    height: 30
  },
  textButton: {
    color: "white"
  }
});

export default styles;
