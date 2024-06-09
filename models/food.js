// Food sınıfı, bir yiyecek nesnesi oluşturmak için kullanılır.
// Yiyeceklerin id, kategori id'leri, başlık (title), uygunluk (affordability),
// karmaşıklık (complexity), görüntü URL'si (imageUrl) ve malzemeler (ingredients) gibi özelliklerini içerir.
class Food {
  constructor(
    id,           // Yiyeceğin benzersiz kimliği
    categoryIds,  // Yiyeceğin ait olduğu kategorilerin id'leri
    title,        // Yiyeceğin başlığı
    affordability,// Yiyeceğin uygunluk düzeyi (örneğin, pahalı, uygun fiyatlı)
    complexity,   // Yiyeceğin hazırlanma karmaşıklığı (örneğin, kolay, zor)
    imageUrl,     // Yiyeceğin görüntü URL'si
    ingredients   // Yiyeceğin malzemeleri
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.complexity = complexity;
    this.affordability = affordability;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}

export default Food; // Food sınıfını diğer dosyalarda kullanabilmek için dışa aktarır
