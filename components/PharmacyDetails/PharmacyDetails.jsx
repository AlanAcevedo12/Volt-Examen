import { ScrollView, Text, View } from "react-native";
import { styles } from "./PharmacyDetailsStyles";
import { useState } from "react";


export default function PharmacyDetails({ route, navigation }) {
    const { data } = route.params;
    const [isSelected, setIsSelected] = useState(false);

    return (
        <View style={styles.DetailsContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    Pharmacy Details
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.DataTitle}>
                    Title: {data.title}
                </Text>
                <Text style={styles.DataText}>
                    Publisher: {data.publisher}
                </Text>
                <Text style={styles.DataText}>
                    ISSN: {data.ISSN}
                </Text>
                <Text style={styles.DataText}>
                    Type: {data["issn-type"][0].type.toUpperCase()}
                </Text>
                <View style={styles.buttonContainer}>
                    <View
                        style={isSelected ? styles.buttonSelected : styles.button}
                        onTouchEnd={() => { navigation.navigate('PharmacyScreen'); setIsSelected(false) }}
                        onTouchStart={() => setIsSelected(true)}
                    >
                        <Text style={isSelected ? styles.buttonTextSelected : styles.buttonText}>
                            Return
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
