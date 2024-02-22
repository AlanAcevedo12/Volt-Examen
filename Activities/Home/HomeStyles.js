import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HomeContainer: {
        backgroundColor: "#D6DBDF",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    MainTitleContainers: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    MainTitle: {
        fontSize: 30,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
        marginTop: 5,
        marginBottom: 5
    },
    text:{
        marginTop:"10%",
        fontSize: 20,
        fontFamily: "Montserrat-VariableFont_wght",
        fontWeight: "bold",
        color: "#2E4053",
    },
    imageContainer: {
        marginTop: "10%",
        backgroundColor: "#2E4053",
        width: "95%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 15,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    googleButton:{
        marginTop:"10%",
        height: 70,
    }
})

export { styles };