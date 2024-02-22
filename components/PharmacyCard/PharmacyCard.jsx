import { Button, Text, View } from "react-native";
import { styles } from "./PharmacyCardStyles";

export default function PharmacyCard({ data, navigation }) {
    console.log(data)
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.newspaperTitle}>
                Title: {data.title}
            </Text>
            <Button
                title="See More"
                onPress={() => navigation.navigate('PharmacyDetails', { data: data })}
            />
        </View>
    )
}