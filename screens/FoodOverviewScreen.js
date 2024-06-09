import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useLayoutEffect } from 'react'; // useLayoutEffect hook'u
import { FOODS, CATEGORIES } from '../data/dummy-data'; // Dummy verileri içe aktar
import FoodList from '../components/FoodList'; // FoodList bileşenini içe aktar

// FoodOverviewScreen bileşeni, seçilen kategoriye ait yiyecekleri gösterir
export default function FoodOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId; // Route parametrelerinden gelen kategori id'si

  // Seçilen kategoriye ait yiyecekleri filtreler
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // Kategorinin başlığını ayarlar
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle, // Başlığı ayarlar
    });
  }, [navigation, categoryId]);

  // Filtrelenmiş yiyecekleri FoodList bileşeni ile render eder
  return <FoodList items={displayedFoods} />;
}

// Stil tanımlamaları
const styles = StyleSheet.create({});
