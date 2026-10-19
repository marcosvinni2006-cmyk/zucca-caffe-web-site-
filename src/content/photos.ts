/**
 * Todas as fotos do site em um só lugar. Os arquivos ficam em /public/imagens,
 * separados por categoria e já comprimidos (WebP, até 1600px).
 * O `alt` descreve o que aparece na foto, para quem usa leitor de tela.
 */
export type Photo = { src: string; alt: string };

const p = (file: string, alt: string): Photo => ({ src: `/imagens/${file}`, alt });

export const photos = {
  // Café da manhã
  ovosBacon: p(
    "cafe-da-manha/ovos-bacon-torradas-bowl-frutas.webp",
    "Prato azul com ovos mexidos, tiras de bacon, torradas, bowl de frutas com granola e manteiga",
  ),
  pratoFrios: p(
    "cafe-da-manha/prato-paes-frios-ovos-bowl-frutas.webp",
    "Prato com fatias de pão, queijo, presunto, salame, ovos mexidos, bowl de frutas com granola e pasta cremosa",
  ),
  pratoPresuntoCru: p(
    "cafe-da-manha/prato-presunto-cru-ovos-cappuccino.webp",
    "Prato com presunto cru, queijo, ovos mexidos, fatias de pão, bowl de frutas com granola e manteiga, com cappuccino ao lado",
  ),
  ovosCafeCoado: p(
    "cafe-da-manha/ovos-mexidos-torradas-cafe-coado-flores.webp",
    "Ovos mexidos com cebolinha e duas torradas, com café coado na jarra e na xícara, vaso de flores e parede de tijolo aparente ao fundo",
  ),

  // Salgados
  ciabattaSalame: p(
    "salgados/ciabatta-salame-rucula.webp",
    "Ciabatta recheada com salame, rúcula, queijo e maionese, com chá gelado e bolo de chocolate ao fundo",
  ),
  ciabattaLegumes: p(
    "salgados/ciabatta-legumes-queijo-drink-vermelho.webp",
    "Ciabatta recheada com legumes, queijo derretido e folhas verdes, ao lado de um drink vermelho com gelo e limão",
  ),
  sanduicheGratinado: p(
    "salgados/sanduiche-gratinado-cappuccino-doce-chocolate.webp",
    "Sanduíche com queijo gratinado e derretido, um cappuccino e um doce com calda de chocolate ao fundo",
  ),
  torradaCogumelos: p(
    "salgados/torrada-cogumelos-queijo.webp",
    "Torrada com queijo derretido, cogumelos e cebolinha, com bolo de chocolate e suco de laranja ao fundo",
  ),

  // Doces
  cheesecakeFrutasVermelhas: p(
    "doces/cheesecake-frutas-vermelhas-cafe.webp",
    "Fatia de cheesecake com calda de frutas vermelhas, vista de cima, ao lado de um café com espuma",
  ),
  cheesecakeCaramelo: p(
    "doces/cheesecake-caramelo-cafe.webp",
    "Fatia de cheesecake com calda de caramelo, vista de cima, ao lado de um café com espuma",
  ),
  boloChocolateEspresso: p(
    "doces/bolo-chocolate-espresso.webp",
    "Fatia de bolo de chocolate com cobertura cremosa e calda, ao lado de um espresso na xícara da Zuccä Caffè",
  ),
  brownieSorvete: p(
    "doces/brownie-sorvete-chocolate.webp",
    "Brownie com bolas de sorvete de creme e calda de chocolate",
  ),
  folhadoChocolate: p(
    "doces/folhado-calda-chocolate.webp",
    "Folhado coberto com calda de chocolate, visto de cima, com um drink gelado ao lado",
  ),
  folhadoGeleia: p(
    "doces/folhado-geleia-frutas-vermelhas.webp",
    "Folhado coberto com geleia de frutas vermelhas, servido em um prato fundo",
  ),
  boloLimao: p(
    "doces/bolo-cobertura-limao.webp",
    "Bolo redondo com cobertura branca e raspas de limão, com uma fatia servida no prato ao lado",
  ),

  // Bebidas
  drinkTaca: p(
    "bebidas/drink-taca-gelo-citricos.webp",
    "Drink gelado na taça, com fundo vermelho, gelo e rodelas de laranja e limão",
  ),

  // Ambiente
  fachada: p(
    "ambiente/fachada-muro-pintado.webp",
    "Fachada da Zuccä Caffè, número 1161: muro bege pintado com banco, postes, cachorros, gato e a frase “O melhor sabor é o que fica na memória”",
  ),
  varanda: p(
    "ambiente/varanda-mesas-guarda-sois.webp",
    "Varanda da Zuccä Caffè com mesas de vidro, cadeiras e guarda-sóis marrons, plantas, gradil de ferro e a casa ao fundo",
  ),

  focacciaMortadela: p(
    "salgados/focaccia-mortadela.webp",
    "Focaccia dourada recheada com mortadela, queijo cremoso e pasta escura, servida no prato com guardanapo da Zuccä Caffè",
  ),
} satisfies Record<string, Photo>;
