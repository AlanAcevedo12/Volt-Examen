import { Button, Image, Text, View } from "react-native";
import { styles } from "./DogStyles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dog({ navigation }) {
    const API_URL = "https://dog.ceo/api/breeds/image/random";
    const [imageURL, setImageURL] = useState();
    const [loading, setLoading] = useState(true);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        fetchImage();
    }, [navigation]);

    async function fetchImage() {
        setLoading(true);
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
                    Dog
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
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: imageURL }}
                            style={styles.image}
                        />
                    </View>
            }
            <View style={styles.buttonContainer}>
                <View
                    style={isSelected ? styles.buttonSelected : styles.button}
                    onTouchEnd={() => { fetchImage(); setIsSelected(false) }}
                    onTouchStart={() => setIsSelected(true)}
                >
                    <Text style={isSelected ? styles.buttonTextSelected : styles.buttonText}>
                        Generate Random Image
                    </Text>
                </View>
            </View>
        </View>
    )
}
