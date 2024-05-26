import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';

const categoryImages = {
  'c1': 'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.37.jpeg?fit=1066%2C1600&ssl=1', // Beef Kebab Plate
  'c2': 'https://media.istockphoto.com/id/1372547510/photo/red-lentil-soup-in-white-plate-on-black-stone-background.jpg?s=612x612&w=0&k=20&c=9Wp-CSC88pQ2Ekm0EYWxOFUNTICrBisMiHzi7lM_qXI=', // Lentil Soup
  'c3': 'https://qph.cf2.quoracdn.net/main-qimg-7e2ed15ace6accae7565652cf6faa8a2-lq', // Can Sodas
  'c4': 'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-2.jpeg?fit=1600%2C1066&ssl=1', // Side of Falafel
  'c5': 'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-24.jpeg?fit=1066%2C1600&ssl=1', // Pistachio Baklava
  'c6': 'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-12.jpeg?fit=1600%2C1066&ssl=1'  // Tzatziki
};

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('FoodOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGrid
        title={itemData.item.title}
        image={categoryImages[itemData.item.id]}
        pressFood={pressHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e8e8e8',
  },
});
