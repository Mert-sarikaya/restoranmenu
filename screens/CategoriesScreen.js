import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data'; // Kategori verilerini içe aktar
import CategoryGrid from '../components/CategoryGrid'; // CategoryGrid bileşenini içe aktar

// Kategori resimlerinin URL'lerini içeren nesne
const categoryImages = {
  'c1': 'https://static-content.owner.com/funnel/images/6fd2e02a-b25b-430f-9a85-d2403345934c?v=9723297323&w=640&q=80&auto=format', // Beef Kebab Plate
  'c2': 'https://media.istockphoto.com/id/1372547510/photo/red-lentil-soup-in-white-plate-on-black-stone-background.jpg?s=612x612&w=0&k=20&c=9Wp-CSC88pQ2Ekm0EYWxOFUNTICrBisMiHzi7lM_qXI=', // Lentil Soup
  'c3': 'https://qph.cf2.quoracdn.net/main-qimg-7e2ed15ace6accae7565652cf6faa8a2-lq', // Can Sodas
  'c4': 'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-2.jpeg?fit=1600%2C1066&ssl=1', // Side of Falafel
  'c5': 'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-24.jpeg?fit=1066%2C1600&ssl=1', // Pistachio Baklava
  'c6': 'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-12.jpeg?fit=1600%2C1066&ssl=1'  // Tzatziki
};

// CategoriesScreen bileşeni, kategori listesini görüntüler
export default function CategoriesScreen({ navigation }) {
  // Kategori öğesini render eden işlev
  function renderCategoryItem(itemData) {
    // Kategori öğesine basıldığında çalışacak işlev
    function pressHandler() {
      navigation.navigate('FoodOverview', {
        categoryId: itemData.item.id, // Seçilen kategori id'si ile navigasyon
      });
    }

    // CategoryGrid bileşenini render eder ve gerekli özellikleri aktarır
    return (
      <CategoryGrid
        title={itemData.item.title} // Kategori başlığı
        image={categoryImages[itemData.item.id]} // Kategori resmi
        pressFood={pressHandler} // Basıldığında çalışacak işlev
      />
    );
  }

  return (
    <View style={styles.screen}>
      {/* FlatList bileşeni, verilen verilerle bir liste oluşturur */}
      <FlatList
        data={CATEGORIES} // Liste verisi olarak CATEGORIES'i kullanır
        keyExtractor={(item) => item.id} // Her öğe için benzersiz bir anahtar kullanır
        renderItem={renderCategoryItem} // Her öğeyi render etmek için renderCategoryItem işlevini kullanır
        numColumns={2} // İki sütunlu bir ızgara düzeni oluşturur
      />
    </View>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10, // Ekranın etrafında dolgu
    backgroundColor: '#e8e8e8', // Arka plan rengi
  },
});
