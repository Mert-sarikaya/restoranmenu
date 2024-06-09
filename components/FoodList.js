import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import FoodItem from './FoodItem';

// FoodList bileşeni, yiyecek öğelerini bir liste olarak görüntüler.
export default function FoodList({ items }) {
  // Her bir yiyecek öğesini render eden işlev
  function renderFoodItem(itemData) {
    console.log(itemData.item); // Konsola yiyecek öğesini yazdırır (debug amacıyla)
    
    // Yiyecek öğesi özelliklerini içeren nesne
    const foodItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };

    // FoodItem bileşenini render eder ve özellikleri aktarır
    return <FoodItem {...foodItemProps} />;
  }

  return (
    <View>
      {/* FlatList bileşeni, verilen verilerle bir liste oluşturur */}
      <FlatList
        data={items} // Liste verisi olarak items'ı kullanır
        keyExtractor={(item) => item.id} // Her öğe için benzersiz bir anahtar kullanır
        renderItem={renderFoodItem} // Her öğeyi render etmek için renderFoodItem işlevini kullanır
      />
    </View>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({});
