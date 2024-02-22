import { Alert, Button, Image, Text, View } from "react-native";
import { styles } from "./HomeStyles";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useEffect, useState } from "react";
import axios from "axios";

const ANDROID_CLIENT_ID = "24596831165-k6cm5tbni7ttuvrcl2pb3h4kf5oa2hep.apps.googleusercontent.com"

export default function Home({ navigation }) {
    const [user, setUser] = useState();
    const [token, setToken] = useState();   //El token se debe usar en caso de querer guardar el usuario en una DB

    const [isSelected, setIsSelected] = useState(false);

    async function LogInGoogle() {
        try{
            GoogleSignin.configure({
                androidClientId: ANDROID_CLIENT_ID,
            });
    
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const { accessToken } = await GoogleSignin.getTokens();
            const { user } = userInfo;
            setUser(user);
            setToken(accessToken);
        }catch(e){
            Alert.alert("Error", "Something has happened while loginIn.");
            console.error("Error",e);
        }
    }

    async function LogOutGoogle() {
        try {
            await GoogleSignin.signOut();
            setUser();
            Alert.alert("Information", "Loged out succesfully");
        } catch (error) {
            Alert.alert("Error", "Something has happened while loged out.");
            console.log('Google Sign-Out Error: ', error);
        }
    }

    return (
        <View style={styles.HomeContainer}>
            <View style={styles.MainTitleContainers}>
                <Text style={styles.MainTitle}>
                    Home
                </Text>
            </View>
            {
                !user ?
                    <View style={styles.MainContainers}>
                        <Text style={styles.textBig}>
                            Welcome
                        </Text>
                        <Text style={styles.text}>
                            LogIn with Google Account
                        </Text>
                        <GoogleSigninButton
                            style={styles.googleButton}
                            onPress={() => { LogInGoogle() }}
                        />
                    </View>
                    :
                    <View style={styles.MainContainers}>
                        {user.photo &&
                            <View style={styles.imageContainer}>

                                <Image source={{ uri: user.photo }}
                                    style={styles.image}
                                />
                            </View>
                        }
                        <Text style={styles.text}>
                            ¡Welcome {user.name}!
                        </Text>
                        <View style={styles.dataContainer}>
                            <Text style={styles.dataText}>
                                User information
                            </Text>
                            <Text style={styles.dataText}>
                                Email: {user.email}
                            </Text>
                            <Text style={styles.dataText}>
                                Id: {user.id}
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View
                                style={isSelected ? styles.buttonSelected : styles.button}
                                onTouchEnd={() => { LogOutGoogle(); setIsSelected(false) }}
                                onTouchStart={() => setIsSelected(true)}
                            >
                                <Text style={isSelected ? styles.buttonTextSelected : styles.buttonText}>
                                    Log out
                                </Text>
                            </View>
                        </View>
                    </View>

            }
        </View >
    )
}
