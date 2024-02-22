import { ScrollView, Text, View } from "react-native";
import { styles } from "./NewspaperDetailsStyles";
import { useEffect, useState } from "react";
import axios from "axios";


export default function NewspaperDetails({ navigation, route }) {
    const API_URL = "https://chroniclingamerica.loc.gov/lccn/";
    const { lccn } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            let { data } = await axios.get(API_URL + lccn + ".json");
            if (data) {
                setData(data);
                setLoading(false);
            }
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={styles.DetailsContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    Newspaper Details
                </Text>
            </View>
            {
                !loading && (
                    <ScrollView style={styles.cardsContainer}>
                        <View style={styles.MainTitleContainers}>
                            <Text style={styles.MainTitle}>
                                LCCN: {lccn}
                            </Text>
                        </View>
                        <View style={styles.MainTitleContainers}>
                            <Text style={styles.DataText}>
                                Place of publication: {data.place_of_publication}
                            </Text>
                            <Text style={styles.DataText}>
                                Start Year: {data.start_year}
                            </Text>
                            <Text style={styles.DataText}>
                                Place: {data.place[0]}
                            </Text>
                            <Text style={styles.DataText}>
                                Name: {data.name}
                            </Text>
                            <Text style={styles.DataText}>
                                Publisher: {data.publisher}
                            </Text>
                            <Text style={styles.DataText}>
                                End Year: {data.end_year}
                            </Text>
                            <Text style={styles.DataText}>
                                Issues: {data.issues[0].date_issued}
                            </Text>
                        </View>
                    </ScrollView>
                )
            }
        </View>
    )
}
