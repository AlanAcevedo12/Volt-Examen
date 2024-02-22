import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./PharmacyStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import PharmacyCard from "../../../components/PharmacyCard/PharmacyCard";
import PharmacyDetails from "../../../components/PharmacyDetails/PharmacyDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Pharmacy() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PharmacyScreen" component={PharmacyScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="PharmacyDetails" component={PharmacyDetails} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

function PharmacyScreen({ navigation }) {
    const API_URL = "https://api.crossref.org/journals?query=pharmacy+health";
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [navigation]);

    async function fetchData() {
        try {
            let { data } = await axios.get(API_URL);
            if (data) {
                setData(data.message.items.map((d, k) => { return ({ ...d, id: k }) }));  //Agrego un id para poder renderizar correctamente
                setLoading(false);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={styles.PharmacyContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    PHARMACY
                </Text>
            </View>
            <View style={styles.cardsContainer}>
                <FlatList
                    style={styles.list}
                    data={data}
                    renderItem={({ item }) => <PharmacyCard data={item} navigation={navigation} />}
                    kyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
