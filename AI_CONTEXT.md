# AI_CONTEXT.md — Projeto Mavi Lake

> Este arquivo existe para que qualquer agente de IA que trabalhe neste repositório
> entenda o projeto antes de tocar em qualquer código.
> **Leia este arquivo inteiro antes de fazer qualquer alteração.**

---

## O que é este projeto

Site pessoal e privado construído como presente surpresa para minha namorada.
É um registro do nosso primeiro ano juntos — ainda não foi revelado para ela.

O site tem três grandes seções:

1. **Roadmap de capítulos** — cada date/momento importante vira um capítulo com
   paleta de cor própria, fotos reais, textos escritos na minha voz, easter eggs
   e microinterações. Já existem 13 capítulos publicados.

2. **Álbum de figurinhas** — ainda a ser construído. Ideia: grid estilo Panini com
   slots para dates planejados. Figurinhas desbloqueáveis ao completar o date,
   com animação de "colar". Slots vazios com borda pontilhada. Fundo texturizado
   tipo papel.

3. **Mapa interativo** — ainda a ser construído. Mapa real (Mapbox ou Leaflet)
   com pins nos lugares que fomos. Cada pin abre uma memória ou o que está
   planejado. Pins customizados, não ícones genéricos.

4. **Conquistas desbloqueáveis** — ainda a ser construído. Badges que "acendem"
   ao completar marcos juntos. Bloqueadas ficam em grayscale com blur leve.
   Desbloqueadas têm microanimação de brilho.

---

## Stack e estrutura

- **Framework**: React + Vite
- **Estilização**: Tailwind CSS
- **Fontes**: Playfair Display (display/títulos) + Inter (corpo)
- **Ícones**: Lucide React
- **Deploy**: Vercel — https://mavi-lake.vercel.app

---

## Identidade visual — NÃO altere sem ler isso

### O que define o site visualmente

- **Fundo base**: `#060608` (quase preto)
- **Cor de acento global**: laranja/rosa (`sunset-orange`, `sunset-rose`, `sunset-amber`)
- **Paleta por capítulo**: cada seção tem sua própria cor derivada do lugar/clima
  do date. Exemplos:
  - Arpoador → laranja pôr do sol
  - Vesuvio → âmbar/vermelho pizza
  - Dona Marta → azul céu
  - Festa Neon → fuchsia + cyan
  - Cachoeira do Horto → verde esmeralda
  - Maracanã → vermelho Flamengo
  - Noite em casa → roxo/índigo
  - Vikings → âmbar escuro
  - Show do BK → fuchsia + rose

- **Tipografia**: Playfair Display Black para títulos grandes com gradiente;
  Inter para textos menores.

- **Cards**: `glass-card` and `glass-card-subtle` com backdrop-blur, border branca
  com baixa opacidade. Rotação sutil nas fotos (entre -2deg e +2deg).

- **Atmosfera**: glows grandes com radial-gradient + partículas pequenas com
  `animate-shimmer`. Os SVGs decorativos flutuantes foram **removidos** (ver
  seção de polish abaixo).

### O que NÃO mudar nunca

- Textos de qualquer capítulo — foram escritos na minha voz, com detalhes reais
- A lógica de paleta por capítulo
- A estrutura "Capítulo X · Nome do lugar" com badge
- Easter eggs existentes
- Barra de progresso no topo
- Animações de entrada com scroll
- Os glows e partículas de fundo

---

## Voz e tom do conteúdo

Os textos do site são escritos na primeira pessoa, com voz informal carioca,
bem-humorada e afetiva. Exemplos do tom certo:

> "Eu tava nervoso, tentando parecer tranquilo (não funcionou)."
> "Você roubando meu pedaço de pizza achando que eu não tava vendo. Eu vi."
> "Dois pedalinhos quebrados seguidos. No meio da Lagoa."
> "Longe dos perigos noturnos, porque o perigo era a gente."

**Nunca** escreva copy genérico, frases de cartão de dia dos namorados ou
qualquer texto que poderia servir para qualquer outro casal.
Especificidade é tudo — lugar real, detalhe real, piada interna real.

---

## Capítulos existentes

| # | Nome | Lugar | Paleta |
|---|------|-------|--------|
| 01 | Onde tudo começou | Praia do Arpoador + McDonald's | laranja/rose |
| 02 | Vesuvio Carioca | Pizzaria Vesuvio, RJ | âmbar/vermelho |
| 03 | No topo do mundo | Mirante Dona Marta | azul/índigo |
| 04 | Ela ficou bolada | Tutto Nhoque | âmbar/laranja |
| 05 | Longe dos perigos noturnos | Em casa | roxo/índigo |
| 06 | Festa Neon & O Grande Passo | Festa de aniversário | fuchsia/cyan |
| 07 | Botafogo vs Flamengo | Maracanã | vermelho escuro |
| 08 | Cachoeira do Horto | Parque Nacional da Tijuca | verde esmeralda |
| 09 | O Pedido (com plateia) | Guaraciaba, MG | rose/pink |
| 10 | Flores e Valhalla | Restaurante Vikings | âmbar/laranja escuro |
| 11 | A Saga do Pedalinho | Lagoa Rodrigo de Freitas | azul/cyan |
| 12 | O Orgulho | Fotos de Formatura, Flamengo | amarelo/âmbar |
| 13 | Show do BK na Fundição | Fundição Progresso, Lapa | fuchsia/rose |

---

## Polish já aplicado (não reverter)

Estes problemas foram identificados e corrigidos. Não os reintroduza:

- ~~SVGs decorativos flutuantes~~ → removidos; glows e partículas fazem o trabalho
- ~~Texto "ROLE PARA BAIXO" no hero~~ → substituído pelo chevron animado sozinho  
- ~~Texto "CLIQUE NAS FOTOS" fixo~~ → removido; tooltip no hover da foto central
- ~~Embeds YouTube sem estilização~~ → envolvidos em wrapper com border-radius,
  overlay no topo e box-shadow
- ~~Layout absoluto das fotos do cap. 13 quebrando em mobile~~ → flex-col em
  viewports < 768px com rotação alternada

---

## Próximas etapas — o que ainda falta construir

### 1. Álbum de Figurinhas

**Conceito**: grid de slots estilo álbum Panini para dates planejados/completados.

**Visual**:
- Fundo com texture de papel (CSS noise ou SVG filter)
- Slots vazios: borda pontilhada, sombra interna leve, silhueta desfocada do ícone
- Figurinhas desbloqueadas: animação de "colar" ao conquistar (scale + rotate de entrada)
- Figurinhas bloqueadas: grayscale + blur leve — não apenas opacity baixa

**Mecânica**:
- Cada figurinha representa uma ideia de date (ex: "Jantar à luz de velas",
  "Show ao vivo", "Trilha", "Praia de noite")
- Estado salvo em localStorage ou arquivo JSON no repo
- Ao completar o date na vida real, desbloquear manualmente via toggle no código

**Tom visual**: não usar cards brancos lisos. Textura, imperfeição, charme físico.

---

### 2. Mapa Interativo

**Conceito**: mapa real mostrando todos os lugares onde fomos e planejamos ir.

**Stack recomendada**: Leaflet.js (open source, sem necessidade de API key)
ou Mapbox GL (mais bonito, requer token).

**Visual**:
- Tile escuro (ex: CartoDB Dark Matter para Leaflet)
- Pins customizados SVG — não os ícones padrão de mapa. Pins com coração
  pequeno ou inicial dos nomes
- Cluster de pins se ficarem muito próximos
- Popup ao clicar: foto em miniatura + nome do date + data

**Dados**: arquivo `src/data/places.json` com a lista de lugares, coordenadas,
data, foto e status (`visited` | `planned`).

---

### 3. Conquistas Desbloqueáveis

**Conceito**: badges que marcam marcos do relacionamento.

**Exemplos de conquistas**:
- "Primeiro beijo" ✓
- "Primeiro mês" ✓
- "Primeiro 'eu te amo'" ✓
- "Viagem juntos"
- "6 meses" ✓
- "1 ano"
- "Apresentou pro melhor amigo"
- "Dormiu na casa dela 10 vezes"
- (adicionar conforme a realidade de vocês)

**Visual**:
- Badge circular com ícone central
- Desbloqueada: ícone colorido + glow suave + borda gradiente
- Bloqueada: grayscale + blur(2px) na badge inteira + ícone de cadeado sobreposto
- Animação de desbloqueio: scale 0.8 → 1.1 → 1 + aparecimento do glow

**Estado**: JSON no repo, alterado manualmente.

---

## Regras gerais para qualquer agente que trabalhe aqui

1. **Leia este arquivo antes de qualquer coisa**
2. **Não altere textos dos capítulos existentes** — cada palavra foi escolhida
3. **Não mude a paleta de nenhum capítulo existente**
4. **Novas seções devem seguir o mesmo sistema visual** — glass-card, glows,
   Playfair Display para títulos, gradiente de texto
5. **Novos textos devem ser escritos na mesma voz** — informal, específico,
   primeira pessoa, tom carioca bem-humorado
6. **Mobile first** — toda nova seção deve funcionar perfeitamente em 375px
7. **Não adicione dependências pesadas** sem justificar — o bundle já tem
   Lucide + Tailwind, que resolvem 90% das necessidades visuais
8. **Easter eggs são bem-vindos** — cada capítulo tem pelo menos um elemento
   interativo escondido. Mantenha essa cultura
9. **Este site é uma surpresa** — não há analytics, não há SEO agressivo,
   não há nada que vaze o conteúdo antes da hora

---

## Arquivos de mídia

Todas as fotos ficam em `public/photos/` com nomenclatura `date-N.jpg` ou
`date-N.png`. Vídeos são embedados via YouTube (privados ou não listados).

---

*Última atualização deste arquivo: Junho 2026*
*Capítulos publicados: 13*
*Seções pendentes: álbum de figurinhas, mapa, conquistas e mais capítulos*
