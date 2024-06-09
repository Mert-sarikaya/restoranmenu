import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FOODS } from '../data/dummy-data'; // Dummy verileri içe aktar
import FoodIngredients from '../components/FoodIngredients'; // FoodIngredients bileşenini içe aktar
import { useSelector, useDispatch } from 'react-redux'; // Redux için gerekli hooklar
import { addFavorite, removeFavorite } from '../store/redux/favorites'; // Favori ekleme ve çıkarma işlemleri

// FoodDetailScreen bileşeni, seçilen yiyeceğin detaylarını gösterir
export default function FoodDetailScreen({ route, navigation }) {
  // Redux store'dan favori yiyeceklerin id'lerini seçer
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);
  const foodId = route.params.foodId; // Route parametrelerinden gelen yiyecek id'si

  const dispatch = useDispatch(); // Redux dispatch işlevi
  const selectedFood = FOODS.find((food) => food.id === foodId); // Seçilen yiyeceği bulur

  const foodIsFavorite = favoriteFoodsIds.includes(foodId); // Yiyeceğin favori olup olmadığını kontrol eder

  // Favori durumu değiştirme işlevi
  function changeFavorite() {
    if (foodIsFavorite) {
      dispatch(removeFavorite({ id: foodId })); // Favoriden çıkarma
    } else {
      dispatch(addFavorite({ id: foodId })); // Favoriye ekleme
    }
  }

  // Header'daki favori ikonunu ayarlar
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={changeFavorite}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
          >
            <Ionicons
              name={foodIsFavorite ? 'star' : 'star-outline'}
              size={24}
              color="yellow"
            />
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} /> {/* Yiyecek resmini gösterir */}
      <Text style={styles.title}>{selectedFood.title}</Text> {/* Yiyecek başlığını gösterir */}
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text> {/* Yiyeceğin zorluk derecesini gösterir */}
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text> {/* Yiyeceğin maliyetini gösterir */}
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Ingredients</Text> {/* Malzemeler başlığını gösterir */}
        </View>
        <FoodIngredients data={selectedFood.ingredients} /> {/* Malzemeler listesini gösterir */}
      </View>
    </ScrollView>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 20,
    color: 'red',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    marginVertical: 5,
  },
  subTitle: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  },
});
