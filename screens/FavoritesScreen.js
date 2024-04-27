import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { FavoritesContext } from '../store/favoritescontext';
import { FOODS } from '../data/dummy-data';
import FoodList from '../components/FoodList';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
  // const favoriteFoodContext = useContext(FavoritesContext);
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);
  // const favoriteFoods = FOODS.filter((food) =>
  //   favoriteFoodContext.ids.includes(food.id)
  // );
  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodsIds.includes(food.id)
  );

  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You haven't added anything to favorites</Text>
      </View>
    );
  }
  return <FoodList items={favoriteFoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
