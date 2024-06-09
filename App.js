import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen'; // Kategoriler ekranı bileşeni
import { NavigationContainer } from '@react-navigation/native'; // Navigasyon konteyneri
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Yığın navigatörü
import FoodOverviewScreen from './screens/FoodOverviewScreen'; // Yiyecek genel bakış ekranı bileşeni
import FoodDetailScreen from './screens/FoodDetailScreen'; // Yiyecek detay ekranı bileşeni
import { createDrawerNavigator } from '@react-navigation/drawer'; // Çekmece navigatörü
import FavoritesScreen from './screens/FavoritesScreen'; // Favoriler ekranı bileşeni
import { Ionicons } from '@expo/vector-icons'; // İkonlar
import FavoritesContextProvider from './store/favoritescontext'; // Favoriler context sağlayıcısı
import { Provider } from 'react-redux'; // Redux sağlayıcısı
import { store } from './store/redux/store'; // Redux mağazası

// Yığın ve çekmece navigatörleri oluşturulur
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Çekmece navigatör bileşeni
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'blue' }, // Başlık stilini ayarlar
        headerTintColor: 'white', // Başlık metin rengini ayarlar
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories', // Başlık
          drawerIcon: () => <Ionicons name="list" size={24} color="black" />, // Çekmece ikonu
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites', // Başlık
          drawerIcon: () => (
            <Ionicons name="star-outline" size={24} color="black" /> // Çekmece ikonu
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Ana uygulama bileşeni
export default function App() {
  return (
    <NavigationContainer>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'blue' }, // Başlık stilini ayarlar
            headerTintColor: 'white', // Başlık metin rengini ayarlar
            contentStyle: { backgroundColor: 'lightblue' }, // İçerik stilini ayarlar
          }}
        >
          <Stack.Screen
            name="Back"
            component={DrawerNavigator}
            options={{
              headerShown: false, // Başlığı gizler
            }}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{
              title: 'İngredient', // Başlık
            }}
          />
        </Stack.Navigator>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </NavigationContainer>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
