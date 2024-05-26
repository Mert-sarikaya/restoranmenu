import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import React from 'react';

export default function CategoryGrid({ title, image, pressFood }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#fff' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressFood}
      >
        <ImageBackground source={{ uri: image }} style={styles.backgroundImage}>
          <View style={styles.insideView}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 180,
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  insideView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
