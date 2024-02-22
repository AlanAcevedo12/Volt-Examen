import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./NewspaperStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import NewspaperCard from "../../../components/NewspaperCard/NewspaperCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewspaperDetails from "../../../components/NewspaperDetails/NewspaperDetails";

const Stack = createNativeStackNavigator();

export default function Newspaper() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NewspaperScreen" component={NewspaperScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="NewspaperDetails" component={NewspaperDetails} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

function NewspaperScreen({ navigation }) {
    const API_URL = "https://chroniclingamerica.loc.gov/newspapers.json";
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            let { data } = await axios.get(API_URL);
            if (data) {
                setData(data.newspapers.map((d, k) => { return ({ ...d, id: k }) })); //Agrego un ID a cada elemento para luego renderizarlo
                setLoading(false);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={styles.NewspaperContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    Newspaper
                </Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <NewspaperCard data={item} navigation={navigation} />}
                kyExtractor={item => item.id}
            />
            {/* <ScrollView style={styles.cardsContainer}>
                {
                    !loading &&
                    (
                        data?.map((value, k) => {
                            return (
                                <NewspaperCard data={value} key={k} navigation={navigation} />
                            )
                        })
                    )
                }
            </ScrollView> */}
        </View>
    )
}
