export interface category {
    parentCat?: string;
    subCat: string;
    styleClass: string;
    iconPath: string;
    textToShow: string;
}

export const categories: category[] = [
    // 🔹 Categorías principales
  {parentCat: 'food', subCat: 'food', styleClass: 'food', iconPath: 'assets/images/categories/restaurant.png', textToShow: 'Comida' },
  {parentCat: 'transport', subCat: 'transport', styleClass: 'transport', iconPath: 'assets/images/categories/transport.png', textToShow: 'Transporte' },
  {parentCat: 'home', subCat: 'home', styleClass: 'home', iconPath: 'assets/images/categories/home.png', textToShow: 'Hogar' },
  {parentCat: 'leisure', subCat: 'leisure', styleClass: 'leisure', iconPath: 'assets/images/categories/leisure.png', textToShow: 'Ocio' },
  {parentCat: 'personal', subCat: 'personal', styleClass: 'personal', iconPath: 'assets/images/categories/technology.png', textToShow: 'Personal' },
  {parentCat: 'health', subCat: 'health', styleClass: 'health', iconPath: 'assets/images/categories/health.png', textToShow: 'Salud' },
  {parentCat: 'work', subCat: 'work', styleClass: 'work', iconPath: 'assets/images/categories/work.png', textToShow: 'Trabajo' },
  {parentCat: 'trips', subCat: 'trips', styleClass: 'trips', iconPath: 'assets/images/categories/trips.png', textToShow: 'Viajes' },
  {parentCat: 'family', subCat: 'family', styleClass: 'family', iconPath: 'assets/images/categories/family.png', textToShow: 'Familia' },
  {parentCat: 'supermarket', subCat: 'supermarket', styleClass: 'supermarket', iconPath: 'assets/images/categories/supermarket.png', textToShow: 'Mercado' },
  {parentCat: 'education', subCat: 'education', styleClass: 'education', iconPath: 'assets/images/categories/education.png', textToShow: 'Educación' },
  {parentCat: 'other', subCat: 'other', styleClass: 'other', iconPath: 'assets/images/categories/other.png', textToShow: 'Otros' },

  // 🍔 Comida
  { parentCat: 'food', subCat: 'fastfood', styleClass: 'food-fastfood', iconPath: 'assets/images/categories/subcategories/fastfood.png', textToShow: 'Comida rápida' },
  { parentCat: 'food', subCat: 'groceries', styleClass: 'food-groceries', iconPath: 'assets/images/categories/subcategories/groceries.png', textToShow: 'Supermercado' },
  { parentCat: 'food', subCat: 'coffee', styleClass: 'food-coffee', iconPath: 'assets/images/categories/subcategories/coffee.png', textToShow: 'Café' },
  { parentCat: 'food', subCat: 'restaurant', styleClass: 'food-restaurant', iconPath: 'assets/images/categories/subcategories/restaurant.png', textToShow: 'Restaurante' },

  // 🚗 Transporte
  { parentCat: 'transport', subCat: 'fuel', styleClass: 'transport-fuel', iconPath: 'assets/images/categories/subcategories/fuel.png', textToShow: 'Gasolina' },
  { parentCat: 'transport', subCat: 'public', styleClass: 'transport-public', iconPath: 'assets/images/categories/subcategories/public.png', textToShow: 'Transporte público' },
  { parentCat: 'transport', subCat: 'taxi', styleClass: 'transport-taxi', iconPath: 'assets/images/categories/subcategories/taxi.png', textToShow: 'Taxi / VTC' },
  { parentCat: 'transport', subCat: 'parking', styleClass: 'transport-parking', iconPath: 'assets/images/categories/subcategories/parking.png', textToShow: 'Aparcamiento' },

  // 🏠 Hogar
  { parentCat: 'home', subCat: 'rent', styleClass: 'home-rent', iconPath: 'assets/images/categories/subcategories/rent.png', textToShow: 'Alquiler' },
  { parentCat: 'home', subCat: 'utilities', styleClass: 'home-utilities', iconPath: 'assets/images/categories/subcategories/utilities.png', textToShow: 'Servicios' },
  { parentCat: 'home', subCat: 'maintenance', styleClass: 'home-maintenance', iconPath: 'assets/images/categories/subcategories/maintenance.png', textToShow: 'Mantenimiento' },

  // 🎮 Ocio
  { parentCat: 'leisure', subCat: 'cinema', styleClass: 'leisure-cinema', iconPath: 'assets/images/categories/subcategories/cinema.png', textToShow: 'Cine / Teatro' },
  { parentCat: 'leisure', subCat: 'games', styleClass: 'leisure-games', iconPath: 'assets/images/categories/subcategories/games.png', textToShow: 'Juegos' },
  { parentCat: 'leisure', subCat: 'sports', styleClass: 'leisure-sports', iconPath: 'assets/images/categories/subcategories/sports.png', textToShow: 'Deportes' },

  // 🧍 Personal
  { parentCat: 'personal', subCat: 'clothing', styleClass: 'personal-clothing', iconPath: 'assets/images/categories/subcategories/clothing.png', textToShow: 'Ropa' },
  { parentCat: 'personal', subCat: 'beauty', styleClass: 'personal-beauty', iconPath: 'assets/images/categories/subcategories/beauty.png', textToShow: 'Cuidado personal' },
  { parentCat: 'personal', subCat: 'technology', styleClass: 'personal-technology', iconPath: 'assets/images/categories/subcategories/tech.png', textToShow: 'Tecnología' },

  // ❤️ Salud
  { parentCat: 'health', subCat: 'pharmacy', styleClass: 'health-pharmacy', iconPath: 'assets/images/categories/subcategories/pharmacy.png', textToShow: 'Farmacia' },
  { parentCat: 'health', subCat: 'doctor', styleClass: 'health-doctor', iconPath: 'assets/images/categories/subcategories/doctor.png', textToShow: 'Médico' },
  { parentCat: 'health', subCat: 'insurance', styleClass: 'health-insurance', iconPath: 'assets/images/categories/subcategories/insurance.png', textToShow: 'Seguro de salud' },

  // 💼 Trabajo
  { parentCat: 'work', subCat: 'equipment', styleClass: 'work-equipment', iconPath: 'assets/images/categories/subcategories/equipment.png', textToShow: 'Equipamiento' },
  { parentCat: 'work', subCat: 'subscriptions', styleClass: 'work-subscriptions', iconPath: 'assets/images/categories/subcategories/subscriptions.png', textToShow: 'Suscripciones' },
  { parentCat: 'work', subCat: 'coworking', styleClass: 'work-coworking', iconPath: 'assets/images/categories/subcategories/coworking.png', textToShow: 'Espacios de trabajo' },

  // ✈️ Viajes
  { parentCat: 'trips', subCat: 'flights', styleClass: 'trips-flights', iconPath: 'assets/images/categories/subcategories/flights.png', textToShow: 'Vuelos' },
  { parentCat: 'trips', subCat: 'lodging', styleClass: 'trips-lodging', iconPath: 'assets/images/categories/subcategories/lodging.png', textToShow: 'Alojamiento' },
  { parentCat: 'trips', subCat: 'tourism', styleClass: 'trips-tourism', iconPath: 'assets/images/categories/subcategories/tourism.png', textToShow: 'Turismo' },

  // 👨‍👩‍👧‍👦 Familia
  { parentCat: 'family', subCat: 'children', styleClass: 'family-children', iconPath: 'assets/images/categories/subcategories/children.png', textToShow: 'Niños' },
  { parentCat: 'family', subCat: 'gifts', styleClass: 'family-gifts', iconPath: 'assets/images/categories/subcategories/gifts.png', textToShow: 'Regalos' },

  // 🛒 Mercado
  { parentCat: 'supermarket', subCat: 'food', styleClass: 'supermarket-food', iconPath: 'assets/images/categories/subcategories/food.png', textToShow: 'Alimentos' },
  { parentCat: 'supermarket', subCat: 'cleaning', styleClass: 'supermarket-cleaning', iconPath: 'assets/images/categories/subcategories/cleaning.png', textToShow: 'Limpieza' },

  // 🎓 Educación
  { parentCat: 'education', subCat: 'books', styleClass: 'education-books', iconPath: 'assets/images/categories/subcategories/books.png', textToShow: 'Libros' },
  { parentCat: 'education', subCat: 'courses', styleClass: 'education-courses', iconPath: 'assets/images/categories/subcategories/courses.png', textToShow: 'Cursos' },

  // ❓ Otros
  { parentCat: 'other', subCat: 'donations', styleClass: 'other-donations', iconPath: 'assets/images/categories/subcategories/donations.png', textToShow: 'Donaciones' },
  { parentCat: 'other', subCat: 'unknown', styleClass: 'other-unknown', iconPath: 'assets/images/categories/subcategories/question.png', textToShow: 'No clasificado' }
];