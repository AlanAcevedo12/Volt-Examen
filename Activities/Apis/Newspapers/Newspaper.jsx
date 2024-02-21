import { Button, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./NewspaperStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import NewspaperCard from "../../../components/NewspaperCard/NewspaperCard";

export default function Newspaper({ navigation }) {
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
        ]
    }

    useEffect(() => {
        fetchData();
    }, [navigation]);

    async function fetchData() {
        try {
            let { data } = await axios.get(API_URL);
            if (data.message) {
                setData(data.message);
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
                    loading &&
                    (
                        testData.newspapers.map((value, k) => {
                            return (
                                <NewspaperCard data={value}/>
                            )
                        })
                    )
                }
            </ScrollView>
        </View>
    )
}
