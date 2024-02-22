import { Button, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./NewspaperStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import NewspaperCard from "../../../components/NewspaperCard/NewspaperCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewspaperDetails from "../../../components/NewspaperDetails/NewspaperDetails";

const Stack = createNativeStackNavigator();

export default function StackNewspaper() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Newspaper" component={Newspaper} options={{
                headerShown: false
            }} />
            <Stack.Screen name="NewspaperDetails" component={NewspaperDetails} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}

function Newspaper({ navigation }) {
    const API_URL = "https://chroniclingamerica.loc.gov/newspapers.json";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const testData = {
        "newspapers": [
            {
                "lccn": "sn86072192",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn86072192.json",
                "state": "Alabama",
                "title": "The age-herald. [volume]"
            },
            {
                "lccn": "sn84021903",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn84021903.json",
                "state": "Alabama",
                "title": "Alabama state intelligencer. [volume]"
            },
            {
                "lccn": "sn85038485",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn85038485.json",
                "state": "Alabama",
                "title": "The Birmingham age-herald. [volume]"
            },
            {
                "lccn": "sn84020639",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn84020639.json",
                "state": "Alabama",
                "title": "Birmingham age-herald. [volume]"
            },
            {
                "lccn": "sn85044812",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn85044812.json",
                "state": "Alabama",
                "title": "Birmingham state herald."
            },
            {
                "lccn": "sn82015209",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn82015209.json",
                "state": "Alabama",
                "title": "The Chattanooga Daily Rebel. [volume]"
            },
            {
                "lccn": "sn85025905",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn85025905.json",
                "state": "Alabama",
                "title": "Chattanooga daily rebel. [volume]"
            },
            {
                "lccn": "sn82014371",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn82014371.json",
                "state": "Alabama",
                "title": "The daily Chattanooga rebel. [volume]"
            },
            {
                "lccn": "sn84020151",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn84020151.json",
                "state": "Alabama",
                "title": "Huntsville gazette. [volume]"
            },
            {
                "lccn": "sn83025483",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn83025483.json",
                "state": "Alabama",
                "title": "The Huntsville star. [volume]"
            },
            {
                "lccn": "sn83045160",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn83045160.json",
                "state": "Alabama",
                "title": "Memphis daily appeal. [volume]"
            },
            {
                "lccn": "sn84020557",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn84020557.json",
                "state": "Alabama",
                "title": "Mobile daily commercial register and patriot. [volume]"
            },
            {
                "lccn": "sn84020566",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn84020566.json",
                "state": "Alabama",
                "title": "Mobile register and journal. [volume]"
            },
            {
                "lccn": "sn84020645",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn84020645.json",
                "state": "Alabama",
                "title": "The Montgomery advertiser. [volume]"
            },
            {
                "lccn": "sn83025485",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn83025485.json",
                "state": "Alabama",
                "title": "The Montgomery enterprise. [volume]"
            },
            {
                "lccn": "sn85044791",
                "url": "https://chroniclingamerica.loc.gov/lccn/sn85044791.json",
                "state": "Alabama",
                "title": "The Petal paper. [volume]"
            },]
    }

    useEffect(() => {
        fetchData();
    }, [navigation]);

    async function fetchData() {
        try {
            let { data } = await axios.get(API_URL);
            // console.log(data.len)
            // console.log(data.newspapers.slice(0, 10))
            if (data) {
                setData(data.newspapers.slice(0, 10));  //Limito la cantidad de elementos del array newspaper por cuestión de rendimiento
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
            <ScrollView style={styles.cardsContainer}>
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
            </ScrollView>
        </View>
    )
}
