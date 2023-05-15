import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
} from "react-native";
import CardsContainer from "./CardsContainer";
import { deviceHeight, deviceWidth } from "../utils/dimensions";
const Game = ({
  first,
  second,
  placements,
  showCardFn,
  matchedIndices,
  attempts,
  matches,
}) => {
  return (
    <ImageBackground
      source={require("../images/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Memory Game</Text>
        <View style={styles.gridOutline}>
          <CardsContainer
            openIndices={[first?.index, second?.index]}
            placements={placements}
            showCardFn={showCardFn}
            matchedCardIndices={matchedIndices}
          />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Attempts</Text>
            <Text style={styles.statNumber}>{attempts}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Matches</Text>
            <Text style={styles.statNumber}>{matches}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridOutline: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: deviceWidth * 1.05,
  },
  cardsContainer: {
    flexDirection: "row",
    width: 450,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: deviceWidth * 0.26,
    height: deviceWidth * 0.26,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    margin: 2,
    backgroundColor: "grey",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  imageBack: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image_title: {
    width: 450,
    marginLeft: 30,
  },
  containerImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  statBox: {
    backgroundColor: '#FFD321',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004AAD',
    marginBottom: 5,
  },
  statNumber: {
    fontSize: 16,
    color: '#004AAD',
  },
});

export default Game;
