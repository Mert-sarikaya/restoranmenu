import Category from '../models/category';
import Food from '../models/food';

export const CATEGORIES = [
  new Category('c1', 'Main Menu', 'pink'),
  new Category('c2', 'Soup & Salad', 'darkpink'),
  new Category('c3', 'Drink', 'brown'),
  new Category('c4', 'Appetizers', 'yellow'),
  new Category('c5', 'Desserts', 'blue'),
  new Category('c6', 'Sides', 'green'),
];

export const FOODS = [
  new Food(
    'f1',
    ['c1'],
    'Beef Kebab Plate',
    '$16.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.37.jpeg?fit=1066%2C1600&ssl=1',
    [
      'Beef Kebab ',
      'Pita Bread ',
      'Rce ',
      'Tzatziki ',
      'Lettuce ',
      'Tomato',
      'Onion',
    ]
  ),

  new Food(
    'f2',
    ['c1'],
    'Beef Kebab Wrap',
    '$12.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.37-11.jpeg?fit=1600%2C1066&ssl=1',
    ['Beef Kebab', 'Turkish Lavash', 'Tzatziki', 'Lettuce', 'Tomato', 'Onion']
  ),
  new Food(
    'f3',
    ['c1'],
    'Chicken Kebab Plate',
    '$16.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.36.jpeg?fit=1600%2C1066&ssl=1',
    ['Chicken Kebab','Pita', 'Tomato', 'Rce', 'Tzatziki', 'Lettuce', 'Onion']
  ),
  new Food(
    'f4',
    ['c1'],
    'Chicken Kebab Wrap',
    '$10.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-18.jpeg?fit=1600%2C1066&ssl=1',
    ['Chicken Kebab', 'Turkish Lavash', 'Tzatziki', 'Tomato', 'Lettuce', 'Onion']
  ),
  new Food(
    'f5',
    ['c1'],
    'Chicken Shawarma Plate',
    '$16.99',
    'çok kalorili',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-27.jpeg?fit=1600%2C1066&ssl=1',
    ['Chicken Shawarma', 'Rice', 'Tzatziki', 'Tomato', 'Onion', 'Pickle', 'Sumac Seasoning']
  ),
  new Food(
    'f6',
    ['c1'],
    'Chicken Wrap',
    '$10.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-30.jpeg?fit=1066%2C1600&ssl=1',
    ['Chicken Shawarma', 'Turkish Lavas', 'Lettuce', 'Onion', 'Tomato', 'Sumac Seasoning']
  ),
  new Food(
    'f7',
    ['c1'],
    'Falafel Pita 🌱',
    '$10.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-35.jpeg?fit=1600%2C1066&ssl=1',
    ['Falafel', 'Pta Bread', 'Tahin Dressing', 'Arugula', 'Tomato', 'Green Onion']
  ),
  new Food(
    'f8',
    ['c1'],
    'Falafel Plate 🌱',
    '$15.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38.jpeg?fit=1600%2C1066&ssl=1',
    ['Falafel', 'Pta Bread', 'Rce', 'Tahin Dressing', 'Arugula', 'Tomato', 'Green Onion']
  ),
  new Food(
    'f9',
    ['c1'],
    'Gyro Pita',
    '$10.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/doner.webp?fit=659%2C440&ssl=1',
    ['Gyro', 'Pita Bread' , 'Tzatziki', 'Onion','Tomato',' Sumac Seasoning', 'Italian Parsley']
  ),
  new Food(
    'f10',
    ['c1'],
    'Gyro Plate',
    '$16.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-34.jpeg?fit=1066%2C1600&ssl=1',
    ['Gyro', 'Pita Bread' , 'Rice', 'Tzatziki', 'Onion', 'Tomato', 'Sumac Seasoning', 'Banana Peppers']
  ),
  new Food(
    'f11',
    ['c1'],
    'Gyro Wrap',
    '$10.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/etwrap.webp?fit=647%2C440&ssl=1',
    ['Gyro', 'Turkish Lavash', 'Tzatziki', 'Onion', 'Tomato', 'Sumac Seasoning', 'Italian Parsley']
  ),
  new Food(
    'f12',
    ['c1'],
    'Kofte Plate',
    '$16.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/kofte.webp?fit=554%2C440&ssl=1',
    ['Kofta', 'Pta Bread', 'Rce', 'Tzatziki', 'Lettuce', 'Tomato', 'Onion','Pickle','Banana Peppers']
  ),
  new Food(
    'f13',
    ['c1'],
    'Kofte Wrap',
    '$10.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.37-6.jpeg?fit=1600%2C1066&ssl=1',
    ['Kofta','Turkish Lavash', 'Lettuce','Tomato','Onion','Italan Parsley']
  ),
  new Food(
    'f14',
    ['c2'],
    'Lentil Soup',
    '$5.99',
    '',
    'https://media.istockphoto.com/id/1372547510/photo/red-lentil-soup-in-white-plate-on-black-stone-background.jpg?s=612x612&w=0&k=20&c=9Wp-CSC88pQ2Ekm0EYWxOFUNTICrBisMiHzi7lM_qXI=',
    ['Lentil']
  ),
  new Food(
    'f15',
    ['c2'],
    'Shepherd Salad',
    '$5.99',
    '',
    'https://cookingorgeous.com/wp-content/uploads/2022/02/turkish-shepherd-salad-coban-salatasi-7.jpg',
    ['Tomato','Green Pepper','Cucumber', 'Onion','Parsley','Olive Oil']
  ),
  new Food(
    'f16',
    ['c3'],
    'Perrier',
    '$2.99',
    '',
    'https://www.meta-bev.com/cdn/shop/files/PERRIERFlavoredSparklingWater_LimeCan25cl_600x.jpg?v=1698210997',
    ['Perrier']
  ),
  new Food(
    'f17',
    ['c3'],
    'San Pelegrino',
    '$2.99',
    '',
    'https://lilaplus.b-cdn.net/wp-content/uploads/2021/12/san-pellegrino-dogal-zengin-mineralli-su-cam-sise-250-ml-884-scaled.jpg',
    ['San Pelegrino']
  ),
  new Food(
    'f18',
    ['c3'],
    'Turkish Tea',
    '$1.99',
    '',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDoJ5r7CVtka3nJzQKEaOuUWMunxN_Kdvo1I7DtghLw&s',
    ['Turkish Tea']
  ),
  new Food(
    'f19',
    ['c3'],
    'Water',
    '$0.99',
    ':)',
    'https://mma.prnewswire.com/media/1877736/FW_2021_500ml_rPET_rgb.jpg?p=facebook',
    ['Water']
  ),
  new Food(
    'f20',
    ['c3'],
    'Can sodas',
    '$1.99',
    '',
    'https://qph.cf2.quoracdn.net/main-qimg-7e2ed15ace6accae7565652cf6faa8a2-lq',
    ['Coke','Diet Coke','Sprita']
  ),
  new Food(
    'f21',
    ['c4'],
    'Baba Ghonush Plate',
    '$6.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.28-3.jpeg?fit=1600%2C1066&ssl=1',
    ['Baba Ghonush Plate']
  ),
  new Food(
    'f22',
    ['c4'],
    'Fries',
    '$4.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-16.jpeg?fit=1600%2C1066&ssl=1',
    ['Fries']
  ),
  new Food(
    'f23',
    ['c4'],
    'Grape Leaves Plate',
    '$6.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-20.jpeg?fit=1066%2C1600&ssl=1',
    ['Grape Leaves Plate']
  ),
  new Food(
    'f24',
    ['c4'],
    'Greek Fries',
    '$4.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-6.jpeg?fit=1600%2C1066&ssl=1',
    ['Greek Fries']
  ),
  new Food(
    'f25',
    ['c4'],
    'Haidari Yogurt Dip Plate',
    '$6.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-11.jpeg?fit=1066%2C1600&ssl=1',
    ['Haidari Yogurt Dip Plate']
  ),
  new Food(
    'f26',
    ['c4'],
    'Hummus Plate',
    '$6.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-19.jpeg?fit=1066%2C1600&ssl=1',
    ['Hummus Plate']
  ),
  new Food(
    'f27',
    ['c4'],
    'Large Fries',
    '$5.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-16.jpeg?fit=1600%2C1066&ssl=1',
    ['Fries']
  ),
  new Food(
    'f28',
    ['c4'],
    'Large Greek Fries',
    '$4.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.37-10.jpeg?fit=1600%2C1066&ssl=1',
    ['Greek Fries']
  ),
  new Food(
    'f29',
    ['c4'],
    'Side of Falafel',
    '$5.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-2.jpeg?fit=1600%2C1066&ssl=1',
    ['Falafel']
  ),
  new Food(
    'f30',
    ['c4'],
    'Turkish Tabbouleh Plate',
    '$7.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-7.jpeg?fit=1600%2C1066&ssl=1',
    ['Turkish Tabbouleh Plate']
  ),
  new Food(
    'f31',
    ['c5'],
    'Baklava Mix',
    '$8.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-24.jpeg?fit=1066%2C1600&ssl=1',
    ['Baklava Mix']
  ),
  new Food(
    'f32',
    ['c5'],
    'Pistachio Baklava',
    '$5.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-24.jpeg?fit=1066%2C1600&ssl=1',
    ['Pistachio Baklava']
  ),
  new Food(
    'f33',
    ['c5'],
    'Walnut Baklava',
    '$4.99',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.35-9.jpeg?fit=1066%2C1600&ssl=1',
    ['Walnut Baklava']
  ),
  new Food(
    'f34',
    ['c6'],
    'Baba Ghonush',
    '$2.49',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.29-2.jpeg?fit=1600%2C1066&ssl=1',
    ['Baba Ghonush']
  ),
  new Food(
    'f35',
    ['c6'],
    'Grilled Pita Bread',
    '$1.50',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-02.08.36-23.jpeg?fit=1066%2C1600&ssl=1',
    ['Grilled Pita Bread']
  ),
  new Food(
    'f36',
    ['c6'],
    'Hummus',
    '$2.49',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.37-7.jpeg?fit=1600%2C1066&ssl=1',
    ['Hummus']
  ),
  new Food(
    'f37',
    ['c6'],
    'Tzatziki',
    '$2.49',
    '',
    'https://i0.wp.com/themediterraneanjoint.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-21-at-01.15.38-12.jpeg?fit=1600%2C1066&ssl=1',
    ['Tzatziki']
  ),



]