/**
 * Cardápio. `price` é opcional: se ficar vazio, o preço não aparece no site.
 * TODO: sabores, descrições finais e preços de cada item.
 */
export type MenuItem = {
  name: string;
  description?: string;
  price?: string; // ex.: "R$ 32"
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "focaccias",
    title: "Focaccias",
    items: [
      { name: "Focaccia da casa", description: "Massa leve e aerada, crosta dourada e azeite." },
      { name: "Focaccia recheada", description: "Sabores do dia. Pergunte no balcão." },
    ],
  },
  {
    id: "ciabattas",
    title: "Ciabattas",
    items: [
      { name: "Ciabatta recheada", description: "Casca crocante e miolo macio, montada na hora." },
      { name: "Croque", description: "Gratinado, servido quentinho." },
    ],
  },
  {
    id: "brunch",
    title: "Brunch",
    note: "Sábados e domingos, das 9h às 14h",
    items: [
      { name: "Mesa de brunch", description: "Uma seleção da casa para dividir." },
      { name: "Omelete", description: "Preparado na hora." },
      { name: "Suco de laranja", description: "Natural, espremido na hora." },
    ],
  },
  {
    id: "cafes",
    title: "Cafés e gelados",
    items: [
      { name: "Café especial", description: "Espresso e métodos filtrados." },
      { name: "Espresso tônica", description: "Espresso sobre água tônica gelada." },
      { name: "Affogato", description: "Sorvete com espresso quente por cima." },
    ],
  },
  {
    id: "doces",
    title: "Doces",
    items: [{ name: "Doces do dia", description: "Variam conforme a produção da semana." }],
  },
];
