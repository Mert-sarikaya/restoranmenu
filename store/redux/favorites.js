import { createSlice } from '@reduxjs/toolkit';

// favoritesSlice: Favori yiyecekler için Redux dilimi
const favoritesSlice = createSlice({
  name: 'favorites', // Dilimin adı
  initialState: {
    ids: [], // Başlangıç durumu: favori yiyeceklerin id'lerini tutan boş bir dizi
  },
  reducers: {
    // Favori eklemek için reducer
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id); // Gelen id'yi ids dizisine ekler
    },
    // Favori çıkarmak için reducer
    removeFavorite: (state, action) => {
      const index = state.ids.indexOf(action.payload.id); // Çıkarılacak id'nin dizideki indeksini bulur
      if (index !== -1) {
        state.ids.splice(index, 1); // İndeksi bulursa, diziden o id'yi çıkarır
      }
    },
  },
});

// addFavorite ve removeFavorite aksiyonlarını dışa aktar
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
// favoritesSlice.reducer'ı dışa aktar
export default favoritesSlice.reducer;
