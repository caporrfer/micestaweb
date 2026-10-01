// Datos de demostración; no representan precios vigentes ni datos de usuarios.
export const products = [
  { name: 'Aguacates', detail: '2 unidades', price: 2.65, kind: 'avocado', checked: false },
  { name: 'Leche de avena', detail: '1 litro', price: 1.15, kind: 'milk', checked: false },
  { name: 'Plátanos', detail: '1 kg', price: 1.89, kind: 'banana', checked: true },
  { name: 'Pan de masa madre', detail: '1 unidad', price: 2.10, kind: 'bread', checked: false },
  { name: 'Huevos camperos', detail: '6 unidades', price: 2.35, kind: 'eggs', checked: false },
];
export const supermarkets = [
  { name: 'Mercadona', logo: 'mercadona' },
  { name: 'Carrefour', logo: 'carrefour' },
  { name: 'Lidl', logo: 'lidl' },
  { name: 'DIA', logo: 'dia' },
  { name: 'ALDI', logo: 'aldi' },
  { name: 'Eroski', logo: 'eroski' },
];
export const euro = (value: number) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
