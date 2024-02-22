import { Button, Text, View } from "react-native";
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
    const [token, setToken] = useState();

    useEffect(() => {
        console.log(user)
    }, [user])

    async function LogInGoogle() {
        GoogleSignin.configure({
            androidClientId: ANDROID_CLIENT_ID,
        });

        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const { accessToken } = await GoogleSignin.getTokens();
        const { user } = userInfo;
        setUser(user);
        setToken(accessToken);
    }

    async function LogOutGoogle() {
        try {
            await GoogleSignin.signOut();
            setUser()
        } catch (error) {
            console.log('Google Sign-Out Error: ', error);
        }
    }

    return (
        <View style={styles.HomeContainer}>
            {
                !user ?
                    <View style={styles.MainTitleContainers}>
                        <Text style={styles.MainTitle}>
                            Home
                        </Text>
                        <GoogleSigninButton
                            onPress={() => { LogInGoogle() }}
                        />
                    </View>
                    :
                    <View>
                        <Text style={styles.MainTitle}>
                            Bienvenido: {user.name}
                        </Text>
                        <Text style={styles.MainTitle}>
                            Email: {user.email}
                        </Text>
                        <Text style={styles.MainTitle}>
                            UserID: {user.id}
                        </Text>
                        <Button
                            title="Salir"
                            onPress={() => { LogOutGoogle() }}
                        />
                    </View>

            }
        </View >
    )
}
