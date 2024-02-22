import { Button, Text, View } from "react-native";
import { styles } from "./CryptoCardStyles";

export default function CryptoCard({ data, navigation }) {
    // console.log(data)
    return (
        <View style={styles.cardContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.cryptoTitle}>
                    {data.baseAsset?.toUpperCase()}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.infoText}>
                    Last: {data.lastPrice}
                </Text>
                <Text style={styles.infoText}>
                    Low: {data.lowPrice}
                </Text>
                <Text style={styles.infoText}>
                    High: {data.highPrice}
                </Text>
                <Text style={styles.infoText}>
                    Volume: {data.volume}
                </Text>
            </View>
            <View style={styles.symbolContainer}>
                <Text style={styles.cryptoTitle}>
                    {data.symbol?.toUpperCase()}
                </Text>
            </View>
        </View>
    )
}