import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        marginBottom: 1,
        backgroundColor: "#CCD1D1",
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        // backgroundColor: "red",
        width: "95%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    IssueTitle: {
        fontSize:10,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
    },
    column: {
        // backgroundColor: "red",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Loading: {
        fontSize:10,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
    },
    LoadingContainer: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        marginBottom: 1,
        backgroundColor: "#CCD1D1",
        alignItems: "center",
        justifyContent: "center",
    },
})

export { styles };