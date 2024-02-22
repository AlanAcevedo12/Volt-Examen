import { Button, Text, View } from "react-native";
import { styles } from "./PharmacyCardStyles";

export default function PharmacyCard({ data, navigation }) {
    console.log(data)
    return (
        <View style={styles.cardContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.pharmacyTitle}>
                    {data.title}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View
                    style={styles.button}
                    onTouchEnd={() => navigation.navigate('PharmacyDetails', { data: data })}
                >
                    <Text style={styles.buttonText}>
                        More
                    </Text>
                </View>
            </View>
        </View>
    )
}