import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

const CardsContainer = ({
  openIndices,
  placements,
  showCardFn,
  matchedCardIndices,
}) => {
  const isCardOpen = (index) => openIndices.includes(index);
  const isCardMatched = (index) => matchedCardIndices.includes(index);
  
  return (
    <View style={styles.cardsContainer}>
      {placements.map((placement, index) => (
        <Card
          key={index}
          index={index}
          isCardOpen={isCardOpen(index)}
          isCardMatched={isCardMatched(index)}
          image={placement}
          showCardFn={showCardFn}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    width: 450,
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default CardsContainer;
