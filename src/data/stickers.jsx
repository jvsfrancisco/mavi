import React from "react";
import { 
  Pizza, Utensils, Sunset, Tent, Car, Palmtree, Heart, Plane, Clapperboard, Dog, Camera, Wine, 
  Gamepad2, ChefHat, PaintBucket, Mic2, Sparkles, Anchor, Mountain, Ticket, Paintbrush, 
  Tv, Ship, Bike, Brush, Popcorn, Music, Moon, Cloud, Droplet, Star, Flame, Snowflake, 
  TreePine, Flower2, CupSoda, Martini, Headphones, Smartphone, Crown, Trophy, Gem, Coffee, 
  Cake, Gift, ShoppingBag, Map, Key, Lock, Shield, Sun 
} from "lucide-react";

const randomColor = () => {
  const colors = [
    "from-orange-500 to-red-500", "from-amber-400 to-orange-500", "from-pink-500 to-rose-500",
    "from-emerald-400 to-teal-500", "from-cyan-400 to-blue-500", "from-indigo-400 to-purple-500",
    "from-rose-400 to-red-500", "from-sky-400 to-indigo-500", "from-fuchsia-500 to-purple-600",
    "from-amber-500 to-yellow-600", "from-teal-400 to-emerald-500", "from-rose-600 to-pink-700",
    "from-blue-400 to-indigo-500", "from-green-400 to-emerald-500", "from-violet-500 to-fuchsia-500"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const randomRotation = () => {
  const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-3", "-rotate-3", "rotate-0"];
  return rotations[Math.floor(Math.random() * rotations.length)];
};

const StrawberryIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 2 5 5 5 9c0 4 3.5 8 7 11.5C15.5 17 19 13 19 9c0-4-3-7-7-7z"/>
    <path d="M12 2v4"/>
    <path d="M9 3l1 3"/>
    <path d="M15 3l-1 3"/>
    <circle cx="10" cy="11" r="0.5" fill="currentColor" stroke="none"/>
    <circle cx="14" cy="11" r="0.5" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="14" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

export const stickers = [
  { id: "pizza", title: "Pizzaria", description: "Nosso segundo date no Forno.", icon: Pizza },
  { id: "hamburguer", title: "Comer Hambúrguer", description: "Aquele BK sagrado.", icon: Utensils },
  { id: "pordosol", title: "Pôr do Sol no Mirante", description: "Vista inesquecível.", icon: Sunset },
  { id: "piquenique", title: "Piquenique na Lagoa", description: "Tarde na grama da Lagoa.", icon: Tent },
  { id: "praia", title: "Praia Juntos", description: "Dias de sol, areia e mar.", icon: Palmtree },
  { id: "viagemcarro", title: "Viajar de Carro", description: "Roadtrips ouvindo música.", icon: Car },
  { id: "morangos", title: "Colher Morangos", description: "Aquele dia em Petrópolis.", icon: StrawberryIcon },
  { id: "viageminternacional", title: "Viagem Internacional", description: "Carimbar o passaporte.", icon: Plane },
  { id: "cinemaaoarlivre", title: "Cinema ao Ar Livre", description: "Filme sob as estrelas.", icon: Clapperboard },
  { id: "adocaopet", title: "Primeiro Pet", description: "Aumentar a família.", icon: Dog },
  { id: "ensaiofotografico", title: "Ensaio de Casal", description: "Tirar fotos profissionais.", icon: Camera },
  { id: "degustacaovinhos", title: "Degustação de Vinhos", description: "Noite chique de queijos e vinhos.", icon: Wine },
  { id: "boliche", title: "Jogar Boliche", description: "Uma competição amigável.", icon: Gamepad2 },
  { id: "cozinhar", title: "Cozinhar Juntos", description: "Fazer uma receita do zero.", icon: ChefHat },
  { id: "ceramica", title: "Fazer Cerâmica", description: "Sujar as mãos de argila.", icon: PaintBucket },
  { id: "karaoke", title: "Cantar no Karaokê", description: "Passar vergonha no microfone.", icon: Mic2 },
  { id: "patinacao", title: "Patinação no Gelo", description: "Cair e rir juntos.", icon: Snowflake },
  { id: "spa", title: "Dia de Spa", description: "Massagem e relaxamento total.", icon: Sparkles },
  { id: "acampar", title: "Acampar na Montanha", description: "Dormir em uma barraca.", icon: Mountain },
  { id: "montanharussa", title: "Montanha-Russa", description: "Gritar juntos no parque.", icon: Ticket },
  { id: "nascerdosol", title: "Nascer do Sol", description: "Madrugar para ver o sol nascer.", icon: Sun },
  { id: "pintar", title: "Pintar um Quadro", description: "Bancar o artista plástico.", icon: Paintbrush },
  { id: "maratona", title: "Maratona de Série", description: "Final de semana no sofá.", icon: Tv },
  { id: "barco", title: "Passeio de Barco", description: "Velejar pelo mar.", icon: Ship },
  { id: "bicicleta", title: "Andar de Bicicleta", description: "Passeio no parque.", icon: Bike },
  { id: "massas", title: "Rodízio de Massas", description: "Comer até não aguentar mais.", icon: Utensils },
  { id: "museu", title: "Visitar um Museu", description: "Um pouco de cultura.", icon: Brush },
  { id: "fantasia", title: "Festa a Fantasia", description: "Usar fantasia combinando.", icon: Crown },
  { id: "paraquedas", title: "Saltar de Paraquedas", description: "Aventura radical.", icon: Plane },
  { id: "trilha", title: "Fazer uma Trilha", description: "Caminhar até a cachoeira.", icon: TreePine },
  { id: "helicoptero", title: "Voar de Helicóptero", description: "Passeio panorâmico.", icon: Star },
  { id: "neve", title: "Ver a Neve", description: "Fazer um boneco de neve.", icon: Snowflake },
  { id: "teatro", title: "Ir ao Teatro", description: "Assistir a uma peça.", icon: Clapperboard },
  { id: "jantarvelas", title: "Jantar Romântico", description: "Luz de velas e música.", icon: Flame },
  { id: "videogame", title: "Jogar Videogame", description: "Coop no sofá.", icon: Gamepad2 },
  { id: "cafecama", title: "Café na Cama", description: "Manhã preguiçosa.", icon: Coffee },
  { id: "escalar", title: "Escalar uma Montanha", description: "Chegar ao topo juntos.", icon: Mountain },
  { id: "estadio", title: "Jogo no Estádio", description: "Torcer no Maracanã.", icon: Trophy },
  { id: "trem", title: "Viajar de Trem", description: "Passeio nos trilhos.", icon: Map },
  { id: "fondue", title: "Noite do Fondue", description: "Chocolate e frutas no inverno.", icon: Flame },
  { id: "planta", title: "Adotar uma Planta", description: "Nossa primeira filha verde.", icon: Flower2 },
  { id: "mergulho", title: "Mergulho no Mar", description: "Ver os peixinhos.", icon: Anchor },
  { id: "danca", title: "Aprender uma Dança", description: "Fazer aula de salão.", icon: Music },
  { id: "quebracabeca", title: "Quebra-cabeça", description: "Montar 1000 peças.", icon: Gem },
  { id: "semdestino", title: "Sair sem Destino", description: "Deixar a vida levar.", icon: Map },
  { id: "moveis", title: "Comprar Móveis", description: "Montar nossa casa.", icon: ShoppingBag },
  { id: "bolo", title: "Fazer um Bolo", description: "Confeiteiros do fim de semana.", icon: Cake },
  { id: "chuva", title: "Banho de Chuva", description: "Se molhar de propósito.", icon: Droplet },
  { id: "estrelas", title: "Ver as Estrelas", description: "Noite limpa olhando o céu.", icon: Moon },
  { id: "noivos", title: "Ficar Noivos", description: "O próximo grande passo.", icon: Shield },
].map(sticker => ({
  ...sticker,
  color: randomColor(),
  rotation: randomRotation()
}));
