import { Button, Text, View } from "react-native";
import { styles } from "./NewspaperCardStyles";

export default function NewspaperCard({ data, navigation }) {
    // console.log(data)
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.newspaperTitle}>
                LCCN: {data.lccn}
            </Text>
            <Text style={styles.newspaperTitle}>
                State: {data.state}
            </Text>
            <Text style={styles.newspaperTitle}>
                Title: {data.title}
            </Text>
            <Button
                title="See More"
                onPress={() => navigation.navigate('NewspaperDetails', { lccn: data.lccn })}
            />
        </View>
    )
}