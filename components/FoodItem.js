import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import { useNavigation } from '@react-navigation/native';

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {
  const dispatch = useDispatch();
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);
  const foodIsFavorite = favoriteFoodsIds.includes(id);
  const navigation = useNavigation();

  const changeFavorite = () => {
    if (foodIsFavorite) {
      dispatch(removeFavorite({ id }));
    } else {
      dispatch(addFavorite({ id }));
    }
  };

  const FoodItemHandler = () => {
    navigation.navigate('FoodDetail', {
      foodId: id,
    });
  };

  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      onPress={FoodItemHandler}
    >
      <View style={styles.foodItem}>
<<<<<<< HEAD
=======
        <Image source={{ uri: imageUrl }} style={styles.image} />
>>>>>>> 51a0e76 (Değişiklikleri kaydet)
        <View style={styles.labelsContainer}>
          <Text style={styles.foodName}>{title}</Text>
          <Text style={styles.foodPrice}>{affordability}</Text>
        </View>
<<<<<<< HEAD
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
=======
        <Pressable onPress={changeFavorite}>
          <Ionicons
            name={foodIsFavorite ? 'star' : 'star-outline'}
            size={24}
            color={foodIsFavorite ? 'gold' : 'gray'}
          />
        </Pressable>
>>>>>>> 51a0e76 (Değişiklikleri kaydet)
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    height: 50,
=======
    justifyContent: 'space-between',
    height: 100,
>>>>>>> 51a0e76 (Değişiklikleri kaydet)
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  labelsContainer: {
    flex: 1,
<<<<<<< HEAD
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodName: {
    flex: 1,
    fontSize: 16,
  },
  foodPrice: {
    fontSize: 16,
    marginLeft: 10,
  },
  imageContainer: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
=======
    flexDirection: 'column', 
    marginLeft: 10,
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodPrice: {
    fontSize: 16,
    marginTop: 5, 
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
>>>>>>> 51a0e76 (Değişiklikleri kaydet)
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
