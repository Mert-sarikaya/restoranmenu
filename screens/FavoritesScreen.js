import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux'; // Redux kullanımı için gerekli hook
import { FOODS } from '../data/dummy-data'; // Yiyecek verilerini içe aktar
import FoodList from '../components/FoodList'; // FoodList bileşenini içe aktar

// FavoritesScreen bileşeni, favori yiyecekleri görüntüler
export default function FavoritesScreen() {
  // Redux store'dan favori yiyeceklerin id'lerini seçer
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);

  // Favori yiyecekleri FOODS dizisinden filtreler
  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodsIds.includes(food.id)
  );

  // Eğer favori yiyecek yoksa, bir mesaj görüntüler
  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You haven't added anything to favorites</Text>
      </View>
    );
  }

  // Favori yiyecekleri FoodList bileşeni ile render eder
  return <FoodList items={favoriteFoods} />;
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Yatayda ortalar
    justifyContent: 'center', // Dikeyde ortalar
  },
  text: {
    fontSize: 18, // Yazı boyutu
    fontWeight: 'bold', // Kalın yazı
  },
});
