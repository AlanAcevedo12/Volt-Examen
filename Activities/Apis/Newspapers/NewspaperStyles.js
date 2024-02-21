import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    NewspaperContainer: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
    },
    MainTitleContainers: {
        // backgroundColor: "red",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    MainTitle: {
        fontSize: 40,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#131517"
    },
    cardsContainer: {
        // backgroundColor: "blue",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
})

export { styles };