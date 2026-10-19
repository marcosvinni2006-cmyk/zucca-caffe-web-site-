# Zuccä Caffè · site

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Número do WhatsApp (`WHATSAPP_NUMBER`), mensagem padrão, endereço, links, menu de navegação | `src/config/site.ts` |
| Horários, dias fechados e horário do brunch | `src/content/hours.ts` |
| Cardápio (itens, descrições, preços opcionais) | `src/content/menu.ts` |
| Fotos e textos alternativos | `src/content/photos.ts` + arquivos em `public/fotos/` |

Para trocar uma foto: coloque o arquivo `.jpg` ou `.webp` em `public/fotos/` e atualize `src` e `alt` em `src/content/photos.ts`.

No deploy, defina `NEXT_PUBLIC_SITE_URL` com o domínio final (usado em SEO, Open Graph e JSON-LD).

## TODO

- [x] Número do WhatsApp em `src/config/site.ts`
- [ ] Domínio final (`NEXT_PUBLIC_SITE_URL`)
- [ ] Fotos reais (16 imagens provisórias em `public/fotos/`) e `alt` correspondentes
- [ ] Logo oficial em SVG (hoje o logo é recriado em texto com a fonte Marcellus) e favicon em alta resolução
- [ ] Confirmar que a loja fecha às segundas
- [ ] Sabores, descrições finais e preços do cardápio
- [ ] Revisar textos do hero, dos cards e das seções
- [ ] Coordenadas (lat/long) da loja para o JSON-LD (opcional)
- [ ] Imagem de compartilhamento (Open Graph) com foto real (opcional)
