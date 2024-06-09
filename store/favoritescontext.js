import { createContext, useState } from 'react';

// FavoritesContext: Favori yiyecekler için context oluşturur
export const FavoritesContext = createContext({
  ids: [], // Favori yiyeceklerin id'lerini tutar
  addFavorite: (id) => {}, // Favori eklemek için fonksiyon
  removeFavorite: (id) => {}, // Favori çıkarmak için fonksiyon
});

// FavoritesContextProvider bileşeni: Favori yiyecekler context sağlayıcısı
function FavoritesContextProvider({ children }) {
  const [favoriteFoodIds, setFavoriteFoodIds] = useState([]); // Favori yiyeceklerin id'lerini tutan state

  // Favori eklemek için fonksiyon
  function addFavorite(id) {
    setFavoriteFoodIds((current) => [...current, id]); // Mevcut favorilere yeni id'yi ekler
  }

  // Favori çıkarmak için fonksiyon
  function removeFavorite(id) {
    setFavoriteFoodIds((current) => current.filter((foodId) => foodId !== id)); // Verilen id'yi mevcut favorilerden çıkarır
  }

  // Context değeri
  const value = {
    ids: favoriteFoodIds, // Favori yiyeceklerin id'leri
    addFavorite: addFavorite, // Favori ekleme fonksiyonu
    removeFavorite: removeFavorite, // Favori çıkarma fonksiyonu
  };

  // Sağlayıcı bileşeni döndürür ve value ile children'ı sarar
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider; // Sağlayıcıyı dışa aktar
