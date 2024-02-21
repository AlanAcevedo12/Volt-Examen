import { Button, Image, Text, View } from "react-native";
import { styles } from "./PharmacyStyles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Pharmacy({ navigation }) {
    const API_URL = "https://dog.ceo/api/breeds/image/random";
    const [imageURL, setImageURL] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImage();
    }, [navigation]);

    async function fetchImage() {
        try {
            let { data } = await axios.get(API_URL);
            if (data.message) {
                setImageURL(data.message);
                setLoading(false);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={styles.DogContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    Pharmacy
                </Text>
            </View>
            {
                !loading &&
                <>
                    <Image source={{ uri: imageURL }}
                        style={{ height: "50%" }}
                    />
                    <Button
                        title="Random Image"
                        onPress={() =>
                            fetchImage()
                        } />
                </>
            }
        </View>
    )
}