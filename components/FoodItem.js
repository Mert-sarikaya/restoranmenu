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
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={styles.labelsContainer}>
          <Text style={styles.foodName}>{title}</Text>
          <Text style={styles.foodPrice}>{affordability}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <Pressable onPress={changeFavorite} style={styles.favoriteButton}>
          <Ionicons
            name={foodIsFavorite ? 'star' : 'star-outline'}
            size={24}
            color={foodIsFavorite ? 'gold' : 'black'}
          />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    height: 80,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  labelsContainer: {
    flex: 1,
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
    justifyContent: 'center',
  },
  foodName: {
    fontSize: 16,
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 16,
    color: 'gray',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  favoriteButton: {
    position: 'absolute',
    top: 'center',
    right: 10,
  },
});
