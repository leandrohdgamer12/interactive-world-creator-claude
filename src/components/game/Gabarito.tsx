import { useState } from "react";

/* Gabarito comentado em modal retrô — resposta, cálculo, erros comuns e fontes */
const TABS = ["Desafios 1–4", "Desafios 5–8", "Decisão Final", "Fontes"] as const;

const G: { t: string; r: string; c: string; e: string }[] = [
  { t: "1 · Lista: necessidade x desejo", r: "Necessidade: livro de inglês, calculadora, 4 cadernos, kit lápis. Desejo: mochila de marca, canetas glitter, fichário de personagem.", c: "Pergunta-chave: \"a escola pede?\" e \"Júlia já tem algo que funciona?\". A mochila antiga ainda serve → desejo.", e: "Erro comum: achar que \"gostar muito\" torna o item necessidade." },
  { t: "2 · Planilha do PC", r: "Saldo R$ 405 · cadernos R$ 56 · sobra R$ 349.", c: "500 − 95 = 405 · 4 × 14 = 56 · 405 − 56 = 349.", e: "Erro comum: esquecer de descontar a compra online do total." },
  { t: "3 · Corrida de preços", r: "Pesquisar as 3 lojas antes de comprar.", c: "Estrela R$ 60 · Bairro R$ 56 · MegaShop R$ 64.", e: "Erro comum: comprar na primeira loja sem comparar." },
  { t: "4 · Cadernos mais baratos", r: "Loja do Bairro: 4 × R$ 14 = R$ 56.", c: "Estrela: 60 ÷ 4 = R$ 15 cada. MegaShop: \"leve 5 pague 4\" = 4 × 16 = R$ 64 e um caderno a mais sem necessidade.", e: "Erro comum: achar que pacote e \"leve X pague Y\" são sempre mais baratos. Compare o preço por unidade." },
  { t: "5 · Outdoor 70% OFF*", r: "Urgência (\"só hoje\") + desconto condicionado escondido no asterisco.", c: "O asterisco revela: só vale acima de R$ 400 em produtos Premium selecionados.", e: "Erro comum: ler só o número grande e ignorar a letra miúda." },
  { t: "6 · Livro de inglês", r: "Comprar só o livro (R$ 180), recusar o combo de R$ 230.", c: "Combo = livro + fichário. O fichário é desejo → R$ 50 a mais sem necessidade.", e: "Erro comum: \"economize no combo\" só vale se você precisasse dos dois itens." },
  { t: "7 · Devolução da calculadora", r: "Direito de arrependimento: devolver em até 7 dias e receber o dinheiro de volta.", c: "CDC, art. 49: compra fora do estabelecimento (internet) pode ser desfeita em 7 dias, com devolução integral, inclusive frete.", e: "Erro comum: aceitar vale-compra — ele prende o dinheiro na loja." },
  { t: "8 · Pix + kit lápis + cartão da loja", r: "Pix de R$ 81 · kit na Loja do Bairro (R$ 25) · recusar o cartão.", c: "10% de 90 = 9 → 90 − 9 = 81. Cartão: R$ 15 de desconto vs 12 × R$ 12 = R$ 144/ano de anuidade → prejuízo de R$ 129.", e: "Erro comum: olhar só o desconto de hoje e ignorar o custo fixo do ano." },
];

export function Gabarito({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState(0);
  return (
    <div className="fixed inset-0 z-[990] grid place-items-center bg-foreground/60 p-3" onClick={onClose}>
      <div className="pixel-box flex max-h-[92dvh] w-full max-w-2xl flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between bg-primary px-3 py-2 font-pixel text-[10px] text-primary-foreground">
          <span>📜 GABARITO & FONTES</span>
          <button onClick={onClose} aria-label="Fechar">✕</button>
        </div>
        <div className="flex flex-wrap gap-1 border-b-4 border-border p-2">
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} className={`chip font-pixel text-[8px] ${tab === i ? "chip-on" : ""}`}>{t}</button>
          ))}
        </div>
        <div className="space-y-3 overflow-y-auto p-4 text-sm leading-6">
          {tab < 2 && G.slice(tab * 4, tab * 4 + 4).map((g) => (
            <article key={g.t} className="border-2 border-border bg-card p-3">
              <h3 className="font-pixel text-[10px] text-primary">{g.t}</h3>
              <p className="mt-2"><span className="font-pixel text-[8px] text-success">✔ RESPOSTA </span>{g.r}</p>
              <p className="mt-1"><span className="font-pixel text-[8px] text-accent">🧮 CÁLCULO </span>{g.c}</p>
              <p className="mt-1 text-muted-foreground"><span className="font-pixel text-[8px] text-destructive">⚠ ATENÇÃO </span>{g.e}</p>
            </article>
          ))}
          {tab === 2 && (
            <article className="border-2 border-border bg-card p-3">
              <h3 className="font-pixel text-[10px] text-primary">MOCHILA DE MARCA: R$ 220 → R$ 150 \"SÓ HOJE\"</h3>
              <p className="mt-2"><span className="font-pixel text-[8px] text-success">✔ MELHOR ESCOLHA </span>Esperar e guardar. A mochila antiga ainda funciona; a pressa é fabricada pela loja.</p>
              <p className="mt-1"><span className="font-pixel text-[8px] text-destructive">A) COMPRAR </span>Sobram poucos reais; semanas depois a mesma mochila entra em liquidação por R$ 120 e falta dinheiro para o passeio da escola.</p>
              <p className="mt-1"><span className="font-pixel text-[8px] text-success">B) ESPERAR </span>Júlia guarda a sobra e, meses depois, compra à vista sem aperto — e ainda sobra dinheiro.</p>
            </article>
          )}
          {tab === 3 && (
            <article className="border-2 border-border bg-card p-3">
              <h3 className="font-pixel text-[10px] text-primary">FONTES CONSULTADAS</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li><b>CDC — Lei 8.078/1990, art. 49:</b> direito de arrependimento em compras fora do estabelecimento (7 dias, devolução integral).</li>
                <li><b>CDC, art. 37:</b> publicidade enganosa ou abusiva é proibida — descontos condicionados devem estar claros.</li>
                <li><b>Banco Central do Brasil:</b> educação financeira — orçamento, comparação de preços e custo de cartões/anuidades.</li>
                <li><b>Procon:</b> orientações ao consumidor sobre promoções, nota fiscal e troca.</li>
              </ul>
            </article>
          )}
        </div>
        <div className="border-t-4 border-border p-3 text-right">
          <button className="btn btn-primary font-pixel text-xs" onClick={onClose}>FECHAR (ESC)</button>
        </div>
      </div>
    </div>
  );
}
