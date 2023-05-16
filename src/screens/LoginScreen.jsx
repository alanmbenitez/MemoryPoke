import React, { useState, useEffect, useRef } from "react";
import SoundPlayer from '../utils/audioHelper';

const soundPlayer = new SoundPlayer();
import {
  StyleSheet,
  Image,
  Animated,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const LoginScreen = ({ navigation }) => {

  const fadeTitle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeTitle, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeTitle]);

  useEffect(() => {
    const loadAndPlaySound = async () => {
      try {
        await soundPlayer.loadSound(require('../sounds/song.mp3'));
        await soundPlayer.setVolumeAsync(0.5);
        await soundPlayer.playSound();
        console.log('entre');
      } catch (error) {
        console.error('Error loading or playing sound:', error);
      }
    }

    loadAndPlaySound();
    
    return () => {
      console.log('hh');
      soundPlayer.unloadSound(); // Limpiar el sonido cuando el componente se desmonta
    };
  }, []);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [floatAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim, floatAnim]);

  const floatInterpolation = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10], // los valores pueden ser ajustados para cambiar la altura de la flotación
  });

  const handleLogin = () => {
    navigation.navigate("Memory");
    soundPlayer.unloadSound();
  };

  return (
    <ImageBackground
      source={require("../images/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Animated.Image
          source={require("../images/title_image.png")}
          style={{ ...styles.image_title, marginTop: 105, opacity: fadeTitle }}
          resizeMode="contain"
        />
        <Animated.Image
          source={require("../images/image_1_home.png")}
          style={{
            ...styles.image,
            opacity: fadeAnim,
            transform: [{ translateY: floatInterpolation }],
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Image
            source={require("../images/play.png")} 
            style={styles.play}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image_title: {
    width: "100%", 
    height: 200,
    padding: 10, 
    marginBottom: 40,
  },
  image: {
    width: "100%", 
    height: 250, 
    marginBottom: 20,
  },
  button: {
    width: 300,
    height: 80,

    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  play: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default LoginScreen;
