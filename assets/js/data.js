/* APProf — catálogo de aulões.
   status: "ready" (arquivo existe e já foi testado) | "soon" (ainda não construído)
   path: caminho relativo ao index.html, só usado quando status === "ready" */
const AULOES = [
  // ---------- SAEPE · 9º ano EF ----------
  {
    prova: "saepe", serie: "9", id: "saepe-9-1", numero: 1,
    titulo: "Mapa do Texto",
    jogo: "Baamboozle", icone: "🎯", corJogo: "mapa",
    descritores: ["D01", "D03", "D05", "D12"],
    resumo: "Tema, assunto, finalidade e tipo textual — a primeira leitura de qualquer texto.",
    status: "ready", path: "auloes/saepe/9ano/aulao-1.html"
  },
  {
    prova: "saepe", serie: "9", id: "saepe-9-2", numero: 2,
    titulo: "Arquitetura do Texto",
    jogo: "Pirâmide", icone: "🏔️", corJogo: "arquitetura",
    descritores: ["D06", "D07", "D08", "D09"],
    resumo: "Como o texto se organiza: estrutura, progressão de ideias e função do título.",
    status: "ready", path: "auloes/saepe/9ano/aulao-2.html"
  },
  {
    prova: "saepe", serie: "9", id: "saepe-9-3", numero: 3,
    titulo: "Nas Entrelinhas",
    jogo: "Detetive das Entrelinhas", icone: "🕵️", corJogo: "entrelinhas",
    descritores: ["D04", "D16", "D18"],
    resumo: "O que o texto sugere sem dizer: inferência, pressuposto e ironia.",
    status: "ready", path: "auloes/saepe/9ano/aulao-3.html"
  },
  {
    prova: "saepe", serie: "9", id: "saepe-9-4", numero: 4,
    titulo: "O Nó da Coesão",
    jogo: "Trilha", icone: "🧭", corJogo: "coesao",
    descritores: ["D02", "D11", "D15"],
    resumo: "Como as partes do texto se amarram: referência, causa/consequência e conectivos.",
    status: "ready", path: "auloes/saepe/9ano/aulao-4.html"
  },
  {
    prova: "saepe", serie: "9", id: "saepe-9-5", numero: 5,
    titulo: "Batalha de Ideias",
    jogo: "Batalha Naval", icone: "🚢", corJogo: "batalha",
    descritores: ["D14", "D20", "D21"],
    resumo: "Opinião, defesa de ponto de vista e efeitos de sentido na argumentação.",
    status: "soon"
  },
  {
    prova: "saepe", serie: "9", id: "saepe-9-6", numero: 6,
    titulo: "Estilo e Narrativa",
    jogo: "Memória", icone: "🧠", corJogo: "narrativa",
    descritores: ["D10", "D13", "D17", "D19"],
    resumo: "Recursos de estilo, variação linguística e elementos da narrativa.",
    status: "soon"
  },

  // ---------- SAEPE · 3º ano EM ----------
  {
    prova: "saepe", serie: "3", id: "saepe-3-1", numero: 1,
    titulo: "Mapa do Texto",
    jogo: "Baamboozle", icone: "🎯", corJogo: "mapa",
    descritores: ["D01", "D03", "D05", "D12"],
    resumo: "Tema, assunto, finalidade e tipo textual — a primeira leitura de qualquer texto.",
    status: "ready", path: "auloes/saepe/3ano/aulao-1.html"
  },
  {
    prova: "saepe", serie: "3", id: "saepe-3-2", numero: 2,
    titulo: "Arquitetura do Texto",
    jogo: "Pirâmide", icone: "🏔️", corJogo: "arquitetura",
    descritores: ["D06", "D07", "D08", "D09"],
    resumo: "Como o texto se organiza: estrutura, progressão de ideias e função do título.",
    status: "ready", path: "auloes/saepe/3ano/aulao-2.html"
  },
  {
    prova: "saepe", serie: "3", id: "saepe-3-3", numero: 3,
    titulo: "Nas Entrelinhas",
    jogo: "Detetive das Entrelinhas", icone: "🕵️", corJogo: "entrelinhas",
    descritores: ["D04", "D16", "D18"],
    resumo: "O que o texto sugere sem dizer: inferência, pressuposto e ironia.",
    status: "ready", path: "auloes/saepe/3ano/aulao-3.html"
  },
  {
    prova: "saepe", serie: "3", id: "saepe-3-4", numero: 4,
    titulo: "O Nó da Coesão",
    jogo: "Trilha", icone: "🧭", corJogo: "coesao",
    descritores: ["D02", "D11", "D15"],
    resumo: "Como as partes do texto se amarram: referência, causa/consequência e conectivos.",
    status: "ready", path: "auloes/saepe/3ano/aulao-4.html"
  },
  {
    prova: "saepe", serie: "3", id: "saepe-3-5", numero: 5,
    titulo: "Batalha de Ideias",
    jogo: "Batalha Naval", icone: "🚢", corJogo: "batalha",
    descritores: ["D14", "D20", "D21"],
    resumo: "Opinião, defesa de ponto de vista e efeitos de sentido na argumentação.",
    status: "ready", path: "auloes/saepe/3ano/aulao-5.html"
  },
  {
    prova: "saepe", serie: "3", id: "saepe-3-6", numero: 6,
    titulo: "Estilo e Narrativa",
    jogo: "Memória", icone: "🧠", corJogo: "narrativa",
    descritores: ["D10", "D13", "D17", "D19"],
    resumo: "Recursos de estilo, variação linguística e elementos da narrativa.",
    status: "ready", path: "auloes/saepe/3ano/aulao-6.html"
  },

  // ---------- SPAECE · 9º ano EF (todos em breve: descritores do CE ainda em remapeamento) ----------
  { prova: "spaece", serie: "9", id: "spaece-9-1", numero: 1, titulo: "Mapa do Texto", jogo: "Baamboozle", icone: "🎯", corJogo: "mapa", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "9", id: "spaece-9-2", numero: 2, titulo: "Arquitetura do Texto", jogo: "Pirâmide", icone: "🏔️", corJogo: "arquitetura", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "9", id: "spaece-9-3", numero: 3, titulo: "Nas Entrelinhas", jogo: "Detetive das Entrelinhas", icone: "🕵️", corJogo: "entrelinhas", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "9", id: "spaece-9-4", numero: 4, titulo: "O Nó da Coesão", jogo: "Trilha", icone: "🧭", corJogo: "coesao", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "9", id: "spaece-9-5", numero: 5, titulo: "Batalha de Ideias", jogo: "Batalha Naval", icone: "🚢", corJogo: "batalha", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "9", id: "spaece-9-6", numero: 6, titulo: "Estilo e Narrativa", jogo: "Memória", icone: "🧠", corJogo: "narrativa", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },

  // ---------- SPAECE · 3º ano EM (todos em breve) ----------
  { prova: "spaece", serie: "3", id: "spaece-3-1", numero: 1, titulo: "Mapa do Texto", jogo: "Baamboozle", icone: "🎯", corJogo: "mapa", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "3", id: "spaece-3-2", numero: 2, titulo: "Arquitetura do Texto", jogo: "Pirâmide", icone: "🏔️", corJogo: "arquitetura", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "3", id: "spaece-3-3", numero: 3, titulo: "Nas Entrelinhas", jogo: "Detetive das Entrelinhas", icone: "🕵️", corJogo: "entrelinhas", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "3", id: "spaece-3-4", numero: 4, titulo: "O Nó da Coesão", jogo: "Trilha", icone: "🧭", corJogo: "coesao", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "3", id: "spaece-3-5", numero: 5, titulo: "Batalha de Ideias", jogo: "Batalha Naval", icone: "🚢", corJogo: "batalha", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
  { prova: "spaece", serie: "3", id: "spaece-3-6", numero: 6, titulo: "Estilo e Narrativa", jogo: "Memória", icone: "🧠", corJogo: "narrativa", descritores: [], resumo: "Adaptação para o Ceará — em preparação.", status: "soon" },
];

const WHATSAPP_URL = "https://wa.me/5588996563798?text=" + encodeURIComponent("Olá! Vi o site do APProf e queria saber mais 🙂");
