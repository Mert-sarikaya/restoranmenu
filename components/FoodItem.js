import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import { useNavigation } from '@react-navigation/native';

// FoodItem bileşeni, bir yiyecek öğesini ve favori ekleme/çıkarma işlevselliğini yönetir.
export default function FoodItem({
  id, // Yiyecek öğesinin benzersiz kimliği
  title, // Yiyecek başlığı
  imageUrl, // Yiyecek resminin URL'si
  affordability, // Yiyecek fiyatlandırması
  complexity, // Yiyecek zorluk derecesi
}) {
  const dispatch = useDispatch(); // Redux dispatch işlevi
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids); // Favori yiyeceklerin kimliklerini almak için selector
  const foodIsFavorite = favoriteFoodsIds.includes(id); // Bu yiyecek favori mi?
  const navigation = useNavigation(); // Navigasyon işlevi

  // Favori durumu değiştirme işlevi
  const changeFavorite = () => {
    if (foodIsFavorite) {
      dispatch(removeFavorite({ id })); // Favorilerden çıkar
    } else {
      dispatch(addFavorite({ id })); // Favorilere ekle
    }
  };

  // Yiyecek öğesi detaylarına gitme işlevi
  const FoodItemHandler = () => {
    navigation.navigate('FoodDetail', {
      foodId: id, // Navigasyon ile foodId parametresi gönderilir
    });
  };

  return (
    // Pressable bileşeni, yiyecek öğesine basıldığında FoodItemHandler işlevini çağırır.
    <Pressable
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      onPress={FoodItemHandler}
    >
      <View style={styles.foodItem}>
        {/* Yiyecek resmi için Image bileşeni */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        {/* Yiyecek başlığı ve fiyatı için View bileşeni */}
        <View style={styles.labelsContainer}>
          <Text style={styles.foodName}>{title}</Text>
          <Text style={styles.foodPrice}>{affordability}</Text>
        </View>
        {/* Favori düğmesi için Pressable bileşeni */}
        <Pressable onPress={changeFavorite} style={styles.favoriteButton}>
          <Ionicons
            name={foodIsFavorite ? 'star' : 'star-outline'} // Favori durumuna göre ikon değişir
            size={24}
            color={foodIsFavorite ? 'gold' : 'black'}
          />
        </Pressable>
      </View>
    </Pressable>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'row', // Yatayda sıralar
    alignItems: 'center', // Dikeyde ortalar
    height: 80,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white', // Arka plan rengi
    borderRadius: 10, // Köşe yuvarlaklığı
    paddingHorizontal: 10,
    elevation: 3, // Gölge efekti (Android)
  },
  imageContainer: {
    justifyContent: 'center', // Dikeyde ortalar
    alignItems: 'center', // Yatayda ortalar
    width: 60,
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10, // Resim köşe yuvarlaklığı
  },
  labelsContainer: {
    flex: 1,
    justifyContent: 'center', // Dikeyde ortalar
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold', // Kalın yazı
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 16,
    color: 'gray', // Gri renk
  },
  buttonPressed: {
    opacity: 0.5, // Basıldığında opaklığı azaltır
  },
  favoriteButton: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -12 }], // Dikeyde ortalamak için kaydırma
  },
});
