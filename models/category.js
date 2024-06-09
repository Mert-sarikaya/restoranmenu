// Category sınıfı, bir kategori nesnesi oluşturmak için kullanılır.
// Kategorilerin id, başlık (title) ve renk (color) özelliklerini içerir.
class Category {
  constructor(id, title, color) {
    this.id = id;     // Kategorinin benzersiz kimliği
    this.title = title;   // Kategorinin başlığı
    this.color = color;   // Kategorinin rengi
  }
}

export default Category; // Category sınıfını diğer dosyalarda kullanabilmek için dışa aktarır
