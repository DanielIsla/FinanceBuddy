export interface category {
    parentCat?: string;
    subCat: string;
    styleClass: string;
    iconPath: string;
    catTextToShow: string; 
    subcatTextToShow: string;
}

export const categories: category[] = [
    // 🔹 Categorías principales
  {parentCat: 'food', subCat: 'food', styleClass: 'food', iconPath: 'assets/images/categories/restaurant.png',catTextToShow: 'Comida', subcatTextToShow: 'Comida' },
  {parentCat: 'transport', subCat: 'transport', styleClass: 'transport', iconPath: 'assets/images/categories/transport.png',catTextToShow : 'Transporte', subcatTextToShow: 'Transporte' },
  {parentCat: 'home', subCat: 'home', styleClass: 'home', iconPath: 'assets/images/categories/home.png',catTextToShow: 'Hogar', subcatTextToShow: 'Hogar' },
  {parentCat: 'leisure', subCat: 'leisure', styleClass: 'leisure', iconPath: 'assets/images/categories/leisure.png', catTextToShow: 'Ocio', subcatTextToShow: 'Ocio' },
  {parentCat: 'personal', subCat: 'personal', styleClass: 'personal', iconPath: 'assets/images/categories/technology.png',catTextToShow: 'Personal', subcatTextToShow: 'Personal' },
  {parentCat: 'health', subCat: 'health', styleClass: 'health', iconPath: 'assets/images/categories/health.png', catTextToShow: 'Salud', subcatTextToShow: 'Salud' },
  {parentCat: 'work', subCat: 'work', styleClass: 'work', iconPath: 'assets/images/categories/work.png', catTextToShow: 'Trabajo', subcatTextToShow: 'Trabajo' },
  {parentCat: 'trips', subCat: 'trips', styleClass: 'trips', iconPath: 'assets/images/categories/trips.png', catTextToShow: 'Viajes', subcatTextToShow: 'Viajes' },
  {parentCat: 'family', subCat: 'family', styleClass: 'family', iconPath: 'assets/images/categories/family.png', catTextToShow: 'Familia', subcatTextToShow: 'Familia' },
  //{parentCat: 'supermarket', subCat: 'supermarket', styleClass: 'supermarket', iconPath: 'assets/images/categories/supermarket.png', textToShow: 'Mercado' },
  {parentCat: 'education', subCat: 'education', styleClass: 'education', iconPath: 'assets/images/categories/education.png', catTextToShow: 'Educación', subcatTextToShow: 'Educación' },
  {parentCat: 'other', subCat: 'other', styleClass: 'other', iconPath: 'assets/images/categories/other.png', catTextToShow: 'Otros',  subcatTextToShow: 'Otros' },

  // 🍔 Comida
  { parentCat: 'food', subCat: 'fastfood', styleClass: 'food-fastfood', iconPath: 'assets/images/categories/subcategories/fastfood.png', catTextToShow: 'Comida' ,subcatTextToShow: 'Comida rápida' },
  { parentCat: 'food', subCat: 'groceries', styleClass: 'food-groceries', iconPath: 'assets/images/categories/subcategories/groceries.png', catTextToShow: 'Comida', subcatTextToShow: 'Mercado' },
  { parentCat: 'food', subCat: 'coffee', styleClass: 'food-coffee', iconPath: 'assets/images/categories/subcategories/coffee.png', catTextToShow: 'Comida' , subcatTextToShow: 'Café' },
  { parentCat: 'food', subCat: 'restaurant', styleClass: 'food-restaurant', iconPath: 'assets/images/categories/subcategories/restaurant.png', catTextToShow: 'Comida' , subcatTextToShow: 'Restaurante' },

  // 🚗 Transporte
  { parentCat: 'transport', subCat: 'fuel', styleClass: 'transport-fuel', iconPath: 'assets/images/categories/subcategories/fuel.png', catTextToShow: 'Transporte' , subcatTextToShow: 'Gasolina' },
  { parentCat: 'transport', subCat: 'public', styleClass: 'transport-public', iconPath: 'assets/images/categories/subcategories/public.png', catTextToShow: 'Transporte' , subcatTextToShow: 'T Publico' },
  { parentCat: 'transport', subCat: 'taxi', styleClass: 'transport-taxi', iconPath: 'assets/images/categories/subcategories/taxi.png', catTextToShow: 'Transporte' , subcatTextToShow: 'Taxi / VTC' },
  { parentCat: 'transport', subCat: 'parking', styleClass: 'transport-parking', iconPath: 'assets/images/categories/subcategories/parking.png', catTextToShow: 'Transporte' , subcatTextToShow: 'Parking' },

  // 🏠 Hogar
  { parentCat: 'home', subCat: 'rent', styleClass: 'home-rent', iconPath: 'assets/images/categories/subcategories/rent.png', catTextToShow: 'Hogar' , subcatTextToShow: 'Alquiler' },
  { parentCat: 'home', subCat: 'utilities', styleClass: 'home-utilities', iconPath: 'assets/images/categories/subcategories/utilities.png', catTextToShow: 'Hogar' , subcatTextToShow: 'Servicios' },
  { parentCat: 'home', subCat: 'maintenance', styleClass: 'home-maintenance', iconPath: 'assets/images/categories/subcategories/maintenance.png', catTextToShow: 'Hogar' , subcatTextToShow: 'Mantenimiento' },

  // 🎮 Ocio
  { parentCat: 'leisure', subCat: 'cinema', styleClass: 'leisure-cinema', iconPath: 'assets/images/categories/subcategories/cinema.png', catTextToShow: 'Ocio' , subcatTextToShow: 'Cine / Teatro' },
  { parentCat: 'leisure', subCat: 'games', styleClass: 'leisure-games', iconPath: 'assets/images/categories/subcategories/games.png', catTextToShow: 'Ocio' , subcatTextToShow: 'Juegos' },
  { parentCat: 'leisure', subCat: 'sports', styleClass: 'leisure-sports', iconPath: 'assets/images/categories/subcategories/sports.png', catTextToShow: 'Ocio' , subcatTextToShow: 'Deportes' },

  // 🧍 Personal
  { parentCat: 'personal', subCat: 'clothing', styleClass: 'personal-clothing', iconPath: 'assets/images/categories/subcategories/clothing.png', catTextToShow: 'Personal' , subcatTextToShow: 'Ropa' },
  { parentCat: 'personal', subCat: 'beauty', styleClass: 'personal-beauty', iconPath: 'assets/images/categories/subcategories/beauty.png', catTextToShow: 'Personal' , subcatTextToShow: 'C Personal' },
  { parentCat: 'personal', subCat: 'technology', styleClass: 'personal-technology', iconPath: 'assets/images/categories/subcategories/tech.png', catTextToShow: 'Personal' , subcatTextToShow: 'Tecnología' },

  // ❤️ Salud
  { parentCat: 'health', subCat: 'pharmacy', styleClass: 'health-pharmacy', iconPath: 'assets/images/categories/subcategories/pharmacy.png', catTextToShow: 'Salud' , subcatTextToShow: 'Farmacia' },
  { parentCat: 'health', subCat: 'doctor', styleClass: 'health-doctor', iconPath: 'assets/images/categories/subcategories/doctor.png', catTextToShow: 'Salud' , subcatTextToShow: 'Médico' },
  { parentCat: 'health', subCat: 'insurance', styleClass: 'health-insurance', iconPath: 'assets/images/categories/subcategories/insurance.png', catTextToShow: 'Salud' , subcatTextToShow: 'Seguro' },

  // 💼 Trabajo
  { parentCat: 'work', subCat: 'equipment', styleClass: 'work-equipment', iconPath: 'assets/images/categories/subcategories/equipment.png', catTextToShow: 'Trabajo' , subcatTextToShow: 'Equipamiento' },
  { parentCat: 'work', subCat: 'subscriptions', styleClass: 'work-subscriptions', iconPath: 'assets/images/categories/subcategories/subscriptions.png', catTextToShow: 'Trabajo' , subcatTextToShow: 'Suscripciones' },
  // ✈️ Viajes
  { parentCat: 'trips', subCat: 'flights', styleClass: 'trips-flights', iconPath: 'assets/images/categories/subcategories/flights.png', catTextToShow: 'Viajes' , subcatTextToShow: 'Vuelos' },
  { parentCat: 'trips', subCat: 'lodging', styleClass: 'trips-lodging', iconPath: 'assets/images/categories/subcategories/lodging.png', catTextToShow: 'Viajes' , subcatTextToShow: 'Alojamiento' },
  { parentCat: 'trips', subCat: 'tourism', styleClass: 'trips-tourism', iconPath: 'assets/images/categories/subcategories/tourism.png', catTextToShow: 'Viajes' , subcatTextToShow: 'Turismo' },

  // 👨‍👩‍👧‍👦 Familia
  { parentCat: 'family', subCat: 'children', styleClass: 'family-children', iconPath: 'assets/images/categories/subcategories/children.png', catTextToShow: 'Familia' , subcatTextToShow: 'Niños' },
  { parentCat: 'family', subCat: 'gifts', styleClass: 'family-gifts', iconPath: 'assets/images/categories/subcategories/gifts.png', catTextToShow: 'Familia' , subcatTextToShow: 'Regalos' },

  // 🛒 Mercado
  /*
  { parentCat: 'supermarket', subCat: 'food', styleClass: 'supermarket-food', iconPath: 'assets/images/categories/subcategories/food.png', textToShow: 'Alimentos' },
  { parentCat: 'supermarket', subCat: 'cleaning', styleClass: 'supermarket-cleaning', iconPath: 'assets/images/categories/subcategories/cleaning.png', textToShow: 'Limpieza' },
   */

  // 🎓 Educación
  { parentCat: 'education', subCat: 'books', styleClass: 'education-books', iconPath: 'assets/images/categories/subcategories/books.png', catTextToShow: 'Educación' , subcatTextToShow: 'Libros' },
  { parentCat: 'education', subCat: 'courses', styleClass: 'education-courses', iconPath: 'assets/images/categories/subcategories/courses.png', catTextToShow: 'Educación' , subcatTextToShow: 'Cursos' },

  // ❓ Otros
  { parentCat: 'other', subCat: 'donations', styleClass: 'other-donations', iconPath: 'assets/images/categories/subcategories/donations.png', catTextToShow: 'Otro' , subcatTextToShow: 'Donaciones' },
  { parentCat: 'other', subCat: 'unknown', styleClass: 'other-unknown', iconPath: 'assets/images/categories/subcategories/question.png', catTextToShow: 'Otro' , subcatTextToShow: 'No clasificado' }
];