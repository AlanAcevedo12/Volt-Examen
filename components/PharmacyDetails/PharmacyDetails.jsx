import { ScrollView, Text, View } from "react-native";
import { styles } from "./PharmacyDetailsStyles";


export default function PharmacyDetails({ route }) {
    const { data } = route.params;

    return (
        <View style={styles.DetailsContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    Pharmacy Details
                </Text>
            </View>

            <ScrollView style={styles.cardsContainer}>
                <View style={styles.MainTitleContainers}>
                    <Text style={styles.MainTitle}>
                        Title: {data.title}
                    </Text>
                </View>
                <View style={styles.MainTitleContainers}>
                    <Text style={styles.newspaperTitle}>
                        Publisher: {data.publisher}
                    </Text>
                    <Text style={styles.newspaperTitle}>
                        ISSN: {data.ISSN}
                    </Text>
                    <Text style={styles.newspaperTitle}>
                        Type: {data["issn-type"].type}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}
