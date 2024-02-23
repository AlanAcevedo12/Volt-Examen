import { FlatList, ScrollView, Text, View } from "react-native";
import { styles } from "./NewspaperDetailsStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import Issue from "../Issue/Issue";


export default function NewspaperDetails({ navigation, route }) {
    const API_URL = "https://chroniclingamerica.loc.gov/lccn/";
    const { lccn } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    const [issues, setIssues] = useState();

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            let { data } = await axios.get(API_URL + lccn + ".json");
            if (data) {
                setData(data);
                setIssues(data.issues.map((d, k) => { return ({ ...d, id: k }) }));
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
                    NEWSPAPER DETAILS
                </Text>
            </View>
            {
                loading ?
                    <View style={styles.LoadingContainer}>
                        <Text style={styles.Loading}>
                            Loading...
                        </Text>
                    </View>
                    :
                    <View style={styles.infoContainer}>
                        <View style={styles.textsContainer}>
                            <Text style={styles.DataTitle}>
                                Name: {data.name}
                            </Text>
                            <Text style={styles.DataText}>
                                Place of publication: {data.place_of_publication}
                            </Text>
                            <Text style={styles.DataText}>
                                Publisher: {data.publisher}
                            </Text>
                            <Text style={styles.DataText}>
                                Start Year: {data.start_year}
                            </Text>
                            <Text style={styles.DataText}>
                                End Year: {data.end_year}
                            </Text>
                            <Text style={styles.DataText}>
                                LCCN: {lccn}
                            </Text>
                            <Text style={styles.DataText}>
                                Place: {data.place[0]}
                            </Text>
                            <Text style={styles.DataText}>
                                Issues:
                            </Text>
                        </View>
                        <View style={styles.IssuesContainer}>
                            <FlatList style={styles.list}
                                data={data.issues}
                                renderItem={({ item }) => <Issue url={item.url} navigation={navigation} />}
                                kyExtractor={item => item.id}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <View
                                style={isSelected ? styles.buttonSelected : styles.button}
                                onTouchEnd={() => { navigation.navigate('NewspaperScreen'); setIsSelected(false) }}
                                onTouchStart={() => setIsSelected(true)}
                            >
                                <Text style={isSelected ? styles.buttonTextSelected : styles.buttonText}>
                                    Return
                                </Text>
                            </View>
                        </View>
                    </View >

            }
        </View >
    )
}
