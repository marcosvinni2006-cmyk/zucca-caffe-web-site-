import { photos, type Photo } from "./photos";

/**
 * Pratos em foto, mostrados no cardápio. Títulos e descrições dizem só o que
 * aparece na foto. TODO: trocar pelos nomes oficiais e preencher os preços.
 */
export type Dish = { photo: Photo; title: string; description: string; price: string };
export type DishCategory = { id: string; title: string; dishes: Dish[] };

const SEM_PRECO = "R$ --,--";

export const dishCategories: DishCategory[] = [
  {
    id: "cafe-da-manha",
    title: "Café da manhã",
    dishes: [
      {
        photo: photos.ovosBacon,
        title: "Ovos com bacon",
        description: "Ovos mexidos com bacon, torradas, bowl de frutas com granola e manteiga.",
        price: SEM_PRECO,
      },
      {
        photo: photos.pratoFrios,
        title: "Prato com frios",
        description: "Fatias de pão, queijo, presunto, salame, ovos mexidos, bowl de frutas e pasta cremosa.",
        price: SEM_PRECO,
      },
      {
        photo: photos.pratoPresuntoCru,
        title: "Prato com presunto cru",
        description: "Presunto cru, queijo, ovos mexidos, pão, bowl de frutas com granola e manteiga.",
        price: SEM_PRECO,
      },
      {
        photo: photos.ovosCafeCoado,
        title: "Ovos mexidos e café coado",
        description: "Ovos mexidos com cebolinha, duas torradas e café coado na jarra.",
        price: SEM_PRECO,
      },
    ],
  },
  {
    id: "salgados",
    title: "Salgados",
    dishes: [
      {
        photo: photos.focacciaMortadela,
        title: "Focaccia de mortadela",
        description: "Focaccia recheada com mortadela, queijo cremoso e pasta da casa.",
        price: SEM_PRECO,
      },
      {
        photo: photos.ciabattaSalame,
        title: "Ciabatta de salame",
        description: "Ciabatta recheada com salame, rúcula, queijo e maionese da casa.",
        price: SEM_PRECO,
      },
      {
        photo: photos.ciabattaLegumes,
        title: "Ciabatta de legumes",
        description: "Ciabatta recheada com legumes, queijo derretido e folhas verdes.",
        price: SEM_PRECO,
      },
      {
        photo: photos.sanduicheGratinado,
        title: "Sanduíche gratinado",
        description: "Pão com queijo gratinado por cima e derretido por dentro.",
        price: SEM_PRECO,
      },
      {
        photo: photos.torradaCogumelos,
        title: "Torrada de cogumelos",
        description: "Pão tostado com queijo derretido, cogumelos e cebolinha.",
        price: SEM_PRECO,
      },
    ],
  },
  {
    id: "doces",
    title: "Doces",
    dishes: [
      {
        photo: photos.cheesecakeFrutasVermelhas,
        title: "Cheesecake de frutas vermelhas",
        description: "Fatia de cheesecake com calda de frutas vermelhas.",
        price: SEM_PRECO,
      },
      {
        photo: photos.cheesecakeCaramelo,
        title: "Cheesecake de caramelo",
        description: "Fatia de cheesecake com calda de caramelo.",
        price: SEM_PRECO,
      },
      {
        photo: photos.boloChocolateEspresso,
        title: "Bolo de chocolate",
        description: "Fatia de bolo de chocolate com cobertura cremosa e calda.",
        price: SEM_PRECO,
      },
      {
        photo: photos.brownieSorvete,
        title: "Brownie com sorvete",
        description: "Brownie com sorvete de creme e calda de chocolate.",
        price: SEM_PRECO,
      },
      {
        photo: photos.folhadoChocolate,
        title: "Folhado com chocolate",
        description: "Folhado coberto com calda de chocolate.",
        price: SEM_PRECO,
      },
      {
        photo: photos.folhadoGeleia,
        title: "Folhado com geleia",
        description: "Folhado coberto com geleia de frutas vermelhas.",
        price: SEM_PRECO,
      },
      {
        photo: photos.boloLimao,
        title: "Bolo de limão",
        description: "Bolo com cobertura branca e raspas de limão.",
        price: SEM_PRECO,
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    dishes: [
      {
        photo: photos.drinkTaca,
        title: "Drink cítrico na taça",
        description: "Bebida gelada com gelo e rodelas de laranja e limão.",
        price: SEM_PRECO,
      },
    ],
  },
];
