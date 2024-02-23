import { Button, Text, View } from "react-native";
import { styles } from "./IssueStyles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Issue({ url, navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            let { data } = await axios.get(url);
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
        <View style={styles.cardContainer}>
            {
                loading ?
                    <View style={styles.LoadingContainer}>
                        <Text style={styles.Loading}>
                            Loading...
                        </Text>
                    </View>
                    :
                    <View style={styles.textContainer}>
                        <View style={styles.column}>
                            <Text style={styles.IssueTitle}>
                                Title: {data.title.name}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.IssueTitle}>
                                Edition: {data.edition}
                            </Text>
                            <Text style={styles.IssueTitle}>
                                N°: {data.number}
                            </Text>
                            <Text style={styles.IssueTitle}>
                                {data.date_issued}
                            </Text>
                        </View>
                    </View>
            }
        </View>
    )
}