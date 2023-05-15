import React, { useEffect, useRef } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const GameOver = ({ initialiseGameFn }) => {
  const fadeTitle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeTitle, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require("../images/background.png")}
      resizeMode="cover"
      style={styles.containerImageFinish}
    >
      <SafeAreaView style={styles.containerFinish}>
        <Image
          source={require("../images/WON.png")} 
          style={styles.titleFinish}
        />
        <Animated.Image
          source={require("../images/finish.png")}
          style={{ ...styles.image_titleFinish, opacity: fadeTitle }}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.buttonFinish} onPress={() => initialiseGameFn()}>
          <Image
            source={require("../images/playagain.png")} 
            style={styles.playFinish}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerFinish: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  titleFinish: {
    width: 360,
    height: 65,
    marginTop: 50,
  },
  image_titleFinish: {
    width: 550,
    height: 750,
    marginLeft: 30,
    bottom: 10, 
  },
  containerImageFinish: {
    flex: 1,
    width: '100%',
  },
  buttonFinish: {
    width: 300, 
    height: 250, 
    marginTop: 600,
    position: "absolute",
  },
  playFinish: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default GameOver;
