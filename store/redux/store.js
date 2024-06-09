import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites'; // Favoriler dilimini içe aktar

// Redux store'u yapılandırır ve oluşturur
export const store = configureStore({
  reducer: {
    // favoriteFoods dilimi, favoritesReducer tarafından yönetilir
    favoriteFoods: favoritesReducer,
  },
});
