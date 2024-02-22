import { Button, Text, View } from "react-native";
import { styles } from "./HomeStyles";
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

export default function Home({ navigation }) {
    return (
        <View style={styles.HomeContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    Home
                </Text>
            </View>
        </View >
    )
}
