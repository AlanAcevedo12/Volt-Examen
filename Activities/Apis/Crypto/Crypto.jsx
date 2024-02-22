import { Button, Image, ScrollView, Text, View, FlatList } from "react-native";
import { styles } from "./CryptoStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "../../../components/CryptoCard/CryptoCard";

export default function Crypto({ navigation }) {
    const API_URL = "https://api.wazirx.com/sapi/v1/tickers/24hr";
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, [navigation]);

    async function fetchData() {
        try {
            let { data } = await axios.get(API_URL);
            if (data) {
                setData(data.map((d, k) => { return ({ ...d, id: k }) })); //Agrego un ID a cada elemento para luego renderizarlo
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={styles.CryptoContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    CRYPTO
                </Text>
            </View>
            <View style={styles.cardsContainer}>
                <FlatList
                    style={styles.list}
                    data={data}
                    renderItem={({ item }) => <CryptoCard data={item} />}
                    kyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
