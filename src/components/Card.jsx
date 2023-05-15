import React from 'react';
import { Image, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from "../utils/dimensions";

const Card = ({ index, isCardOpen, isCardMatched, image, showCardFn }) => {
  const cardStyle = [styles.card];
  if (isCardMatched) cardStyle.push(styles.matchedCard);
  else if (isCardOpen) cardStyle.push(styles.openCard);

  const coverImage = require("../images/pokemones/ball.png");
  const backCard = require("../images/pokemones/BN.png");
  const cardNoMatched = require("../images/pokemones/SAN2.png");
  const cardMatched = require("../images/pokemones/ANWS.png");

  return (
    <Pressable
      style={cardStyle}
      onPress={() => showCardFn(index)}
      disabled={isCardMatched || isCardOpen}
    >
      {isCardOpen || isCardMatched ? (
        <ImageBackground
          source={isCardMatched ? cardMatched : cardNoMatched}
          style={{ ...styles.imageBack }}
        >
          <Image source={image.uri} style={styles.image} />
        </ImageBackground>
      ) : (
        <ImageBackground
          source={backCard}
          style={{ ...styles.imageBack }}
        >
          <Image source={coverImage} style={styles.image} />
        </ImageBackground>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});

export default Card;
