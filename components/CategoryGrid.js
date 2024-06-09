import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import React from 'react';

// CategoryGrid bileşeni, bir başlık (title), bir resim (image) ve basıldığında çağrılacak bir işlev (pressFood) alır.
export default function CategoryGrid({ title, image, pressFood }) {
  return (
    <View style={styles.gridItem}>
      {/* Pressable bileşeni, dokunma olaylarını yönetir ve basıldığında pressFood işlevini çağırır. */}
      <Pressable
        android_ripple={{ color: '#fff' }} // Android'de dokunma dalgası efekti için renk belirler.
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressFood}
      >
        {/* ImageBackground bileşeni, arka plan resmi olarak kullanılır. */}
        <ImageBackground source={{ uri: image }} style={styles.backgroundImage}>
          <View style={styles.insideView}>
            {/* Başlık metni, ortalanmış ve stil uygulanmış olarak görüntülenir. */}
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 180,
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5, // Android'de gölge efekti
    shadowColor: 'black', // iOS'ta gölge rengi
    shadowOffset: { width: 0, height: 2 }, // iOS'ta gölge ofseti
    shadowOpacity: 0.3, // iOS'ta gölge opaklığı
    shadowRadius: 6, // iOS'ta gölge yarıçapı
    backgroundColor: 'white', // Arka plan rengi
  },
  button: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', // İçeriği dikey olarak ortalar
  },
  insideView: {
    flex: 1,
    justifyContent: 'center', // İçeriği dikey olarak ortalar
    alignItems: 'center', // İçeriği yatay olarak ortalar
    backgroundColor: 'rgba(0,0,0,0.5)', // Yarı saydam arka plan rengi
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.7, // Basıldığında butonun opaklığını azaltır
  },
});
