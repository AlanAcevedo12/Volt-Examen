import { Button, Text, View } from "react-native";
import { styles } from "./NewspaperCardStyles";

export default function NewspaperCard({ data, navigation }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.newspaperTitle}>
                    Title: {data.title}
                </Text>
                <Text style={styles.newspaperTitle}>
                    State: {data.state}
                </Text>
                <Text style={styles.newspaperLCCN}>
                    LCCN: {data.lccn}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View
                    style={styles.button}
                    onTouchEnd={() => navigation.navigate('NewspaperDetails', { lccn: data.lccn })}
                >
                    <Text style={styles.buttonText}>
                        More
                    </Text>
                </View>
            </View>
        </View>
    )
}