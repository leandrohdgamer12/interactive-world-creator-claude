# Creative Canvas

faça um jogo completo para mim, use bastante criatividade e ideias fora da caixa, mas quero que faça do modo que a professora pediu.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/72b73122-8bb9-4d50-8d5e-ab6f20cdb162).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

---

## A Promoção Termina Hoje — reformulação visual

Toda a arte (cidade, interiores, móveis, personagens, tela de título) agora é **pixel art desenhada por código**
em `src/components/game/art/` (nenhuma imagem nova, nenhuma dependência nova):

- `gfx.ts` – mini-engine de pixel art em canvas · `characters.ts` – 5 personagens, 4 direções × 3 quadros
- `street.ts` – cidade (60×44 tiles de 32 px, com câmera suave) · `rooms.ts` – casa, 5 lojas e Procon · `useArt.ts` – cache/hidratação

A lógica (`World.tsx`, `Challenges.tsx`, `Minigames.tsx`), as grades de colisão e as missões (13) não foram alteradas.

### Rodar no GitHub Codespaces
```sh
npm install
npm run dev      # abra a porta 3000/5173 que o Codespaces sugerir
npm run build    # opcional: confere a compilação
```
