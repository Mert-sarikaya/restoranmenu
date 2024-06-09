import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// FoodIngredients bileşeni, bir veri dizisi (data) alır ve her bir öğe için bir liste öğesi oluşturur.
export default function FoodIngredients({ data }) {
  return data.map((dataIng) => (
    // Her bir malzeme için bir View bileşeni oluşturur ve unique key olarak dataIng kullanır.
    <View key={dataIng} style={styles.listItem}>
      {/* Malzeme metni, ortalanmış ve stil uygulanmış olarak görüntülenir. */}
      <Text style={styles.itemText}>{dataIng}</Text>
    </View>
  ));
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'orange', // Liste öğesinin arka plan rengi
    marginVertical: 4, // Liste öğesinin dikey boşluğu
    marginHorizontal: 12, // Liste öğesinin yatay boşluğu
    borderRadius: 10, // Liste öğesinin köşe yuvarlaklığı
    paddingVertical: 4, // Liste öğesinin dikey dolgu alanı
  },
  itemText: {
    textAlign: 'center', // Metni ortalar
  },
});
