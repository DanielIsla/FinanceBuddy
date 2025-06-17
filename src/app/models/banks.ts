export interface BankEntity {
  bankName: string;
  shortName: string;
  corporateColorHex: string | null; // Color principal
  corporateColorHexSecondary: string | null; // Color secundario (o null si no aplica/es menos relevante)
  bankType: 'Gran Banco' | 'Banco Relevante' | 'Caja Rural/Cooperativa de Crédito' | 'Sucursal Extranjera';
}

export const bankEntities: BankEntity[] = [

  // --- Grandes Bancos Españoles ---
  { bankName: 'Banco Santander', shortName: 'Santander', corporateColorHex: '#EC0000', corporateColorHexSecondary: '#FFFFFF', bankType: 'Gran Banco' }, //Colours checked and OK
  { bankName: 'BBVA', shortName: 'BBVA', corporateColorHex: '#004481', corporateColorHexSecondary: '#00B1E9', bankType: 'Gran Banco' }, // Azul oscuro y Azul claro/celeste
  { bankName: 'CaixaBank', shortName: 'CaixaBank', corporateColorHex: '#006599', corporateColorHexSecondary: '#F5A623', bankType: 'Gran Banco' }, // Azul y Amarillo/Naranja
  { bankName: 'Banco Sabadell', shortName: 'Sabadell', corporateColorHex: '#006699', corporateColorHexSecondary: '#FFCC00', bankType: 'Gran Banco' }, // Azul y Amarillo
  { bankName: 'Bankinter', shortName: 'Bankinter', corporateColorHex: '#FF6600', corporateColorHexSecondary: '#FFFFFF', bankType: 'Gran Banco' }, // Naranja y Blanco
  { bankName: 'Abanca', shortName: 'Abanca', corporateColorHex: '#004A99', corporateColorHexSecondary: '#FFFFFF', bankType: 'Gran Banco' }, // Azul y Blanco
  { bankName: 'Kutxabank', shortName: 'Kutxabank', corporateColorHex: '#669933', corporateColorHexSecondary: '#FFFFFF', bankType: 'Gran Banco' }, // Verde y Blanco
  { bankName: 'Ibercaja', shortName: 'Ibercaja', corporateColorHex: '#006633', corporateColorHexSecondary: '#003366', bankType: 'Gran Banco' }, // Verde y Azul oscuro
  { bankName: 'Unicaja Banco', shortName: 'Unicaja', corporateColorHex: '#009933', corporateColorHexSecondary: '#FFFFFF', bankType: 'Gran Banco' }, // Verde y Blanco
  { bankName: 'Cajamar Caja Rural', shortName: 'Cajamar', corporateColorHex: '#669900', corporateColorHexSecondary: '#FFCC00', bankType: 'Gran Banco' }, // Verde y Amarillo/Naranja
  { bankName: 'Imagin', shortName: 'Imagin', corporateColorHex: '#0a1d21', corporateColorHexSecondary: '#50fb44', bankType: 'Gran Banco' }, //Colours checked and OK


  // --- Otros Bancos Españoles Relevantes ---
  { bankName: 'A&G Banco', shortName: 'A&G Banco', corporateColorHex: '#333333', corporateColorHexSecondary: '#AAAAAA', bankType: 'Banco Relevante' }, // Gris oscuro y gris claro (sin un color vibrante)
  { bankName: 'Allfunds Bank', shortName: 'Allfunds Bank', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul oscuro y Blanco
  { bankName: 'Andbank España Banca Privada', shortName: 'Andbank España', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul oscuro y Blanco
  { bankName: 'Arquia Bank', shortName: 'Arquia Bank', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul oscuro y Blanco
  { bankName: 'Banca March', shortName: 'Banca March', corporateColorHex: '#006633', corporateColorHexSecondary: '#CCCCCC', bankType: 'Banco Relevante' }, // Verde y Gris claro
  { bankName: 'Banca Pueyo', shortName: 'Banca Pueyo', corporateColorHex: null, corporateColorHexSecondary: null, bankType: 'Banco Relevante' }, // **Necesita verificación manual**
  { bankName: 'Banco Alcalá (Creand Wealth Management)', shortName: 'Banco Alcalá', corporateColorHex: '#003366', corporateColorHexSecondary: '#CCCCCC', bankType: 'Banco Relevante' }, // Azul oscuro y Gris claro
  { bankName: 'Banco Cetelem', shortName: 'Cetelem', corporateColorHex: '#003399', corporateColorHexSecondary: '#E60028', bankType: 'Banco Relevante' }, // Azul y Rojo/Naranja
  { bankName: 'Banco Cooperativo Español', shortName: 'Banco Cooperativo', corporateColorHex: null, corporateColorHexSecondary: null, bankType: 'Banco Relevante' }, // **Necesita verificación manual (colores de las cooperativas)**
  { bankName: 'Banco de Albacete', shortName: 'Banco de Albacete', corporateColorHex: '#EC0000', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Rojo y Blanco (afiliado a Santander)
  { bankName: 'Banco de Crédito Social Cooperativo', shortName: 'BCSC', corporateColorHex: '#669900', corporateColorHexSecondary: '#FFCC00', bankType: 'Banco Relevante' }, // Verde y Amarillo (similar a Cajamar)
  { bankName: 'Banco de Depósitos', shortName: 'Banco de Depósitos', corporateColorHex: null, corporateColorHexSecondary: null, bankType: 'Banco Relevante' }, // **Necesita verificación manual**
  { bankName: 'Banco Europeo de Finanzas', shortName: 'BEF', corporateColorHex: null, corporateColorHexSecondary: null, bankType: 'Banco Relevante' }, // **Necesita verificación manual**
  { bankName: 'Banco Finantia', shortName: 'Banco Finantia', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul oscuro y Blanco
  { bankName: 'Banco Inversis', shortName: 'Inversis', corporateColorHex: '#003366', corporateColorHexSecondary: '#AAAAAA', bankType: 'Banco Relevante' }, // Azul oscuro y Gris
  { bankName: 'Banco Mediolanum', shortName: 'Mediolanum', corporateColorHex: '#33CC66', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Verde y Blanco
  { bankName: 'Banco Pichincha España', shortName: 'Pichincha España', corporateColorHex: '#E60023', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Rojo y Blanco
  { bankName: 'Bancofar (CBNK Banco de Colectivos)', shortName: 'Bancofar', corporateColorHex: '#003366', corporateColorHexSecondary: '#CCCCCC', bankType: 'Banco Relevante' }, // Azul oscuro y Gris
  { bankName: 'Caja de Ingenieros (Caixa d\'Enginyers)', shortName: 'Caja de Ingenieros', corporateColorHex: '#006699', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul y Blanco
  { bankName: 'Cecabank', shortName: 'Cecabank', corporateColorHex: '#004080', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul y Blanco
  { bankName: 'EBN Banco', shortName: 'EBN Banco', corporateColorHex: '#003366', corporateColorHexSecondary: '#CCCCCC', bankType: 'Banco Relevante' }, // Azul oscuro y Gris
  { bankName: 'Laboral Kutxa', shortName: 'Laboral Kutxa', corporateColorHex: '#009933', corporateColorHexSecondary: '#FFCC00', bankType: 'Banco Relevante' }, // Verde y Amarillo
  { bankName: 'Miralta Finance Bank', shortName: 'Miralta Finance Bank', corporateColorHex: null, corporateColorHexSecondary: null, bankType: 'Banco Relevante' }, // **Necesita verificación manual**
  { bankName: 'Openbank', shortName: 'Openbank', corporateColorHex: '#0066CC', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul y Blanco
  { bankName: 'Renta 4 Banco', shortName: 'Renta 4', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul oscuro y Blanco
  { bankName: 'Sabadell Consumer Finance', shortName: 'Sabadell Consumer', corporateColorHex: '#006699', corporateColorHexSecondary: '#FFCC00', bankType: 'Banco Relevante' }, // Azul y Amarillo (asoc. a Sabadell)
  { bankName: 'Santander Consumer Finance', shortName: 'Santander Consumer', corporateColorHex: '#EC0000', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Rojo y Blanco (asoc. a Santander)
  { bankName: 'Singular Bank', shortName: 'Singular Bank', corporateColorHex: '#001F3F', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Azul oscuro y Blanco
  { bankName: 'Wizink Bank', shortName: 'Wizink', corporateColorHex: '#663399', corporateColorHexSecondary: '#FFFFFF', bankType: 'Banco Relevante' }, // Morado y Blanco

  // --- Cajas Rurales y Cooperativas de Crédito ---
  { bankName: 'Caja Rural Central, S.C.C.', shortName: 'Caja Rural Central', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Gijón, C.C.', shortName: 'Caja Rural Gijón', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Navarra, S.C.C.', shortName: 'Caja Rural Navarra', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Extremadura, S.C.C.L.', shortName: 'Caja Rural Extremadura', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Salamanca, S.C.C.', shortName: 'Caja Rural Salamanca', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Soria, S.C.C.', shortName: 'Caja Rural Soria', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural Regional San Agustín Fuente Álamo Murcia, S.C.C.', shortName: 'Caja Rural San Agustín', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Utrera, S.C.A.L.C.', shortName: 'Caja Rural Utrera', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Granada, S.C.C.', shortName: 'Caja Rural Granada', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja de Crédito de Petrel, Caja Rural C.C.V.', shortName: 'Caja Rural Petrel', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural de Altea, C.C.V.', shortName: 'Caixa Rural Altea', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Asturias, S.C.C.', shortName: 'Caja Rural Asturias', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Burgos, S.C.C.', shortName: 'Caja Rural Burgos', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Jaén, S.C.C.', shortName: 'Caja Rural Jaén', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural Galega, S.C.C.L.G.', shortName: 'Caixa Rural Galega', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Tenerife, S.C.C.', shortName: 'Caja Rural Tenerife', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#0066CC', bankType: 'Caja Rural/Cooperativa de Crédito' }, // Verde y Azul
  { bankName: 'Caja Rural de Teruel, S.C.C.', shortName: 'Caja Rural Teruel', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Toledo, S.C.C.', shortName: 'Caja Rural Toledo', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Zamora, C.C.', shortName: 'Caja Rural Zamora', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFCC00', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Baena, Ntra Sra. de Guadalupe, S.C.A.C.', shortName: 'Caja Rural Baena', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural San Roque de Almenara, S.C.C.V.', shortName: 'Caja Rural San Roque', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural de l\'Alcudia, S.C.V.C.', shortName: 'Caixa Rural l\'Alcudia', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural Ntra. Sra del Rosario de Nueva Carteya, S.C.A.C.', shortName: 'Caja Rural Nueva Carteya', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural Sant Vicent Ferrer de la Vall d´Uixó. Coop. de Créd.', shortName: 'Caixa Rural Vall d´Uixó', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Cañete de las Torres Ntra. Sra del Campo, S.C.A.', shortName: 'Caja Rural Cañete', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural de Callosa d\'en Sarriá, C.C.V.', shortName: 'Caixa Rural Callosa', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural Católico-Agraria de Vila-Real, S.C.C.V.', shortName: 'Caja Rural Vila-Real', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural la Vall "San Isidro", Coop. de Crédito V', shortName: 'Caixa Rural San Isidro', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural San José de Burriana, S.C.C.V.', shortName: 'Caixa Rural Burriana', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural San José de Alcora, S.C.C.V.', shortName: 'Caja Rural Alcora', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural Ntra Madre del Sol de Adamuz, S.C.A.C.', shortName: 'Caixa Rural Adamuz', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural Torrent, C.C.V.', shortName: 'Caixa Rural Torrent', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural San Jaime de Alquerías del Niño Perdido', shortName: 'Caja Rural San Jaime', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Cheste, S.C.C.', shortName: 'Caja Rural Cheste', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Rural de Turis, C.C.V.', shortName: 'Caixa Rural Turis', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Casas Ibáñez, S.C.C.A.', shortName: 'Caja Rural Casas Ibáñez', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural San José de Almassora, S.C.C.V.', shortName: 'Caja Rural Almassora', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural Ntra. Sra. de la Esperanza de Onda, S.C.C.V.', shortName: 'Caja Rural Onda', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural San José de Nules, S.C.C.V.', shortName: 'Caja Rural Nules', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Betxí, S.C.C.V.', shortName: 'Caja Rural Betxí', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Villamalea, S.C.C.A.', shortName: 'Caja Rural Villamalea', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Albal, Coop. de Crédito V.', shortName: 'Caja Rural Albal', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural de Villar, C.C.V.', shortName: 'Caja Rural Villar', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caja Rural la Junquera de Chilches, S.C.C.V.', shortName: 'Caja Rural Chilches', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' },
  { bankName: 'Caixa Popular- Caixa Rural, S.C.C.V.', shortName: 'Caixa Popular', corporateColorHex: '#006699', corporateColorHexSecondary: '#4CAF50', bankType: 'Caja Rural/Cooperativa de Crédito' }, // Azul y Verde
  { bankName: 'Colonya - Caixa d\'Estalvis de Pollensa', shortName: 'Colonya', corporateColorHex: '#006699', corporateColorHexSecondary: '#4CAF50', bankType: 'Caja Rural/Cooperativa de Crédito' }, // Azul y Verde
  { bankName: 'Caja de Ahorros y Monte de Piedad de Ontinyent (Caixa Ontinyent)', shortName: 'Caixa Ontinyent', corporateColorHex: '#006699', corporateColorHexSecondary: '#FFFFFF', bankType: 'Caja Rural/Cooperativa de Crédito' }, // Azul y Blanco

  // --- Sucursales de Entidades de Crédito Comunitarias y Extranjeras ---
  { bankName: 'AKF Bank GmbH & Co Kg, Sucursal en España', shortName: 'AKF Bank', corporateColorHex: '#003366', corporateColorHexSecondary: '#CCCCCC', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Gris
  { bankName: 'Alpha FX Europe Limited Sucursal en España', shortName: 'Alpha FX', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Blanco
  { bankName: 'Attijariwafa Bank Europe, Sucursal en España', shortName: 'Attijariwafa Bank', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFD700', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Dorado
  { bankName: 'Banca Popolare Etica Società Cooperativa per Azioni, Sucursal en España', shortName: 'Banca Popolare Etica', corporateColorHex: '#4CAF50', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Verde y Blanco
  { bankName: 'Banco de Investimento Global SA, Sucursal en España', shortName: 'Banco Investimento Global', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Blanco
  { bankName: 'Bank Julius Baer Europe, S.A., Sucursal en España', shortName: 'Julius Baer', corporateColorHex: '#ffffff', corporateColorHexSecondary: '#1318ba', bankType: 'Sucursal Extranjera' }, // Gris oscuro y gris claro
  { bankName: 'Bank of America Europe DAC, Sucursal en España', shortName: 'Bank of America', corporateColorHex: '#0000FF', corporateColorHexSecondary: '#FF0000', bankType: 'Sucursal Extranjera' }, // Azul y Rojo
  { bankName: 'Bank Pictet & Cie (Europe) AG Sucursal en España', shortName: 'Pictet', corporateColorHex: '#001F3F', corporateColorHexSecondary: '#AAAAAA', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Gris
  { bankName: 'Banque Chaabi du Maroc, Sucursal en España', shortName: 'Banque Chaabi', corporateColorHex: '#008000', corporateColorHexSecondary: '#FF0000', bankType: 'Sucursal Extranjera' }, // Verde y Rojo (colores de la bandera de Marruecos)
  { bankName: 'Banque J. Safra Sarasin (Luxembourg), SA Sucursal en España', shortName: 'J. Safra Sarasin', corporateColorHex: '#8B4513', corporateColorHexSecondary: '#FFD700', bankType: 'Sucursal Extranjera' }, // Marrón y Dorado
  { bankName: 'Barclays Bank Ireland PLC, Sucursal en España', shortName: 'Barclays', corporateColorHex: '#', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul y Blanco
  { bankName: 'BMW Bank GmbH, Sucursal en España', shortName: 'BMW Bank', corporateColorHex: '#0066CC', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul y Blanco (colores de BMW)
  { bankName: 'BNP Paribas S.A., Sucursal en España', shortName: 'BNP Paribas', corporateColorHex: '#009900', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Verde y Blanco
  { bankName: 'CA Indosuez Wealth (Europe), Sucursal en España', shortName: 'CA Indosuez Wealth', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Blanco
  { bankName: 'Credit Agricole Corporate and Investment Bank, Sucursal en España', shortName: 'Credit Agricole CIB', corporateColorHex: '#009900', corporateColorHexSecondary: '#0066CC', bankType: 'Sucursal Extranjera' }, // Verde y Azul
  { bankName: 'Deutsche Bank, S.A.E.', shortName: 'Deutsche Bank', corporateColorHex: '#0000FF', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul y Blanco
  { bankName: 'Goldman Sachs Bank Europe SE, Sucursal en España', shortName: 'Goldman Sachs', corporateColorHex: '#001F3F', corporateColorHexSecondary: '#FFD700', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Dorado
  { bankName: 'HSBC Continental Europe, Sucursal en España', shortName: 'HSBC', corporateColorHex: '#CC0000', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Rojo y Blanco
  { bankName: 'ING Bank N.V., Sucursal en España (ING España)', shortName: 'ING', corporateColorHex: '#FF6200', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Naranja y Blanco
  { bankName: 'J.P. Morgan SE, Sucursal en España', shortName: 'J.P. Morgan', corporateColorHex: '#001F3F', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Blanco
  { bankName: 'Mizuho Bank, Ltd., Sucursal en España', shortName: 'Mizuho Bank', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul oscuro y Blanco
  { bankName: 'N26 Bank AG, Sucursal en España', shortName: 'N26', corporateColorHex: '#000000', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Negro y Blanco
  { bankName: 'Société Générale, Sucursal en España', shortName: 'Société Générale', corporateColorHex: '#E60028', corporateColorHexSecondary: '#000000', bankType: 'Sucursal Extranjera' }, // Rojo y Negro
  { bankName: 'UBS Europe SE, Sucursal en España', shortName: 'UBS', corporateColorHex: '#CC0000', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Rojo y Blanco
  { bankName: 'Volkswagen Bank GmbH, Sucursal en España', shortName: 'Volkswagen Bank', corporateColorHex: '#003366', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Azul y Blanco (colores de VW)
  { bankName: 'Wise Europe S.A., Sucursal en España', shortName: 'Wise', corporateColorHex: '#66CC66', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Verde y Blanco
  { bankName: 'Ziraat Bankası A.Ş., Sucursal en España', shortName: 'Ziraat Bankası', corporateColorHex: '#CC0000', corporateColorHexSecondary: '#FFFFFF', bankType: 'Sucursal Extranjera' }, // Rojo y Blanco
];