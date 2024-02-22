import { Button, Text, View } from "react-native";
import { styles } from "./CryptoCardStyles";

export default function CryptoCard({ data, navigation }) {
    console.log(data)
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cryptoTitle}>
                Title: {data.baseAsset?.toUpperCase()}
            </Text>
            <Text style={styles.cryptoTitle}>
                Last Price: {data.lastPrice}
            </Text>
            <Text style={styles.cryptoTitle}>
                Low: {data.lowPrice}
            </Text>
            <Text style={styles.cryptoTitle}>
                High: {data.highPrice}
            </Text>
            <Text style={styles.cryptoTitle}>
                Volume: {data.volume}
            </Text>
        </View>
    )
}