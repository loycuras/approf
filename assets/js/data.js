/* APProf — catálogo de aulões.
   status: "ready" (arquivo existe e já foi testado) | "soon" (ainda não construído)
   path: caminho relativo ao index.html, só usado quando status === "ready" */

/* Texto oficial de cada descritor (Matriz de Referência SAEPE/PE, Língua Portuguesa),
   igual ao que aparece na tela de abertura de cada aulão. */
const DESCRITORES = {
  D01: "Localizar informações explícitas em um texto",
  D02: "Coesão referencial",
  D03: "Inferir o sentido de uma palavra ou expressão",
  D04: "Inferir informação implícita",
  D05: "Interpretar texto com auxílio de material gráfico diverso",
  D06: "Identificar o tema de um texto",
  D07: "Identificar a tese de um texto",
  D08: "Relação entre tese e argumentos",
  D09: "Partes principais e secundárias",
  D10: "Conflito e elementos da narrativa",
  D11: "Causa e consequência",
  D12: "Identificar a finalidade de textos de diferentes gêneros",
  D13: "Marcas do locutor/interlocutor",
  D14: "Fato × opinião",
  D15: "Conectivos lógicos",
  D16: "Efeito de humor ou ironia",
  D17: "Pontuação expressiva",
  D18: "Efeito da escolha da palavra",
  D19: "Recursos ortográficos/morfossintáticos",
  D20: "Tratamento comparativo",
  D21: "Posições distintas",
  D24: "Reconhecer gênero discursivo"
};

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
    status: "ready", path: "auloes/saepe/9ano/aulao-5.html"
  },
  {
    prova: "saepe", serie: "9", id: "saepe-9-6", numero: 6,
    titulo: "Estilo e Narrativa",
    jogo: "Memória", icone: "🧠", corJogo: "narrativa",
    descritores: ["D10", "D13", "D17", "D19"],
    resumo: "Recursos de estilo, variação linguística e elementos da narrativa.",
    status: "ready", path: "auloes/saepe/9ano/aulao-6.html"
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

  // ---------- SPAECE · 9º ano EF (mesma matriz de descritores do SAEPE para LP · 9º EF) ----------
  {
    prova: "spaece", serie: "9", id: "spaece-9-1", numero: 1,
    titulo: "Mapa do Texto",
    jogo: "Baamboozle", icone: "🎯", corJogo: "mapa",
    descritores: ["D01", "D03", "D05", "D12", "D24"],
    resumo: "Tema, assunto, finalidade e tipo textual — a primeira leitura de qualquer texto.",
    status: "ready", path: "auloes/spaece/9ano/aulao-1.html"
  },
  {
    prova: "spaece", serie: "9", id: "spaece-9-2", numero: 2,
    titulo: "Arquitetura do Texto",
    jogo: "Pirâmide", icone: "🏔️", corJogo: "arquitetura",
    descritores: ["D06", "D07", "D08", "D09"],
    resumo: "Como o texto se organiza: estrutura, progressão de ideias e função do título.",
    status: "ready", path: "auloes/spaece/9ano/aulao-2.html"
  },
  {
    prova: "spaece", serie: "9", id: "spaece-9-3", numero: 3,
    titulo: "Nas Entrelinhas",
    jogo: "Detetive das Entrelinhas", icone: "🕵️", corJogo: "entrelinhas",
    descritores: ["D04", "D16", "D18"],
    resumo: "O que o texto sugere sem dizer: inferência, pressuposto e ironia.",
    status: "ready", path: "auloes/spaece/9ano/aulao-3.html"
  },
  {
    prova: "spaece", serie: "9", id: "spaece-9-4", numero: 4,
    titulo: "O Nó da Coesão",
    jogo: "Trilha", icone: "🧭", corJogo: "coesao",
    descritores: ["D02", "D11", "D15"],
    resumo: "Como as partes do texto se amarram: referência, causa/consequência e conectivos.",
    status: "ready", path: "auloes/spaece/9ano/aulao-4.html"
  },
  {
    prova: "spaece", serie: "9", id: "spaece-9-5", numero: 5,
    titulo: "Batalha de Ideias",
    jogo: "Batalha Naval", icone: "🚢", corJogo: "batalha",
    descritores: ["D14", "D20", "D21"],
    resumo: "Opinião, defesa de ponto de vista e efeitos de sentido na argumentação.",
    status: "ready", path: "auloes/spaece/9ano/aulao-5.html"
  },
  {
    prova: "spaece", serie: "9", id: "spaece-9-6", numero: 6,
    titulo: "Estilo e Narrativa",
    jogo: "Memória", icone: "🧠", corJogo: "narrativa",
    descritores: ["D10", "D13", "D17", "D19"],
    resumo: "Recursos de estilo, variação linguística e elementos da narrativa.",
    status: "ready", path: "auloes/spaece/9ano/aulao-6.html"
  },

  // ---------- SPAECE · 3º ano EM ----------
  {
    prova: "spaece", serie: "3", id: "spaece-3-1", numero: 1,
    titulo: "Mapa do Texto",
    jogo: "Baamboozle", icone: "🎯", corJogo: "mapa",
    descritores: ["D01", "D03", "D04", "D10"],
    descritorLabels: {
      D01: "Localizar informações explícitas em um texto",
      D03: "Inferir o sentido de uma palavra ou expressão",
      D04: "Interpretar textos não verbais e textos que articulam elementos verbais e não verbais",
      D10: "Identificar o propósito comunicativo em diferentes gêneros"
    },
    resumo: "Tema, assunto, finalidade e tipo textual — a primeira leitura de qualquer texto.",
    status: "ready", path: "auloes/spaece/3ano/aulao-1.html"
  },
  {
    prova: "spaece", serie: "3", id: "spaece-3-2", numero: 2,
    titulo: "Arquitetura do Texto",
    jogo: "Pirâmide", icone: "🏔️", corJogo: "arquitetura",
    descritores: ["D05", "D15", "D16", "D07"],
    descritorLabels: {
      D05: "Identificar o tema ou assunto de um texto",
      D15: "Identificar a tese de um texto",
      D16: "Estabelecer relação entre tese e os argumentos oferecidos para sustentá-la",
      D07: "Diferenciar a informação principal das secundárias em um texto"
    },
    resumo: "Como o texto se organiza: estrutura, progressão de ideias e função do título.",
    status: "ready", path: "auloes/spaece/3ano/aulao-2.html"
  },
  {
    prova: "spaece", serie: "3", id: "spaece-3-3", numero: 3,
    titulo: "Nas Entrelinhas",
    jogo: "Detetive das Entrelinhas", icone: "🕵️", corJogo: "entrelinhas",
    descritores: ["D02", "D22", "D19"],
    descritorLabels: {
      D02: "Inferir informação em texto verbal",
      D22: "Reconhecer efeitos de humor e ironia",
      D19: "Reconhecer o efeito de sentido decorrente da escolha de palavras, frases ou expressões"
    },
    resumo: "O que o texto sugere sem dizer: inferência, pressuposto e ironia.",
    status: "ready", path: "auloes/spaece/3ano/aulao-3.html"
  },
  {
    prova: "spaece", serie: "3", id: "spaece-3-4", numero: 4,
    titulo: "O Nó da Coesão",
    jogo: "Trilha", icone: "🧭", corJogo: "coesao",
    descritores: ["D14", "D11_SAEB", "D17"],
    descritorLabels: {
      D14: "Reconhecer as relações entre partes de um texto, identificando os recursos coesivos que contribuem para sua continuidade",
      D11_SAEB: "Estabelecer relação causa/consequência entre partes e elementos do texto",
      D17: "Reconhecer o sentido das relações lógico-discursivas marcadas por conjunções, advérbios, etc."
    },
    resumo: "Como as partes do texto se amarram: referência, causa/consequência e conectivos.",
    status: "ready", path: "auloes/spaece/3ano/aulao-4.html"
  },
  {
    prova: "spaece", serie: "3", id: "spaece-3-5", numero: 5,
    titulo: "Batalha de Ideias",
    jogo: "Batalha Naval", icone: "🚢", corJogo: "batalha",
    descritores: ["D06", "D13", "D12"],
    descritorLabels: {
      D06: "Distinguir fato de opinião relativa ao fato",
      D13: "Reconhecer diferentes formas de tratar uma informação na comparação de textos de um mesmo tema",
      D12: "Identificar semelhanças e/ou diferenças de ideias e opiniões na comparação entre textos"
    },
    resumo: "Opinião, defesa de ponto de vista e efeitos de sentido na argumentação.",
    status: "ready", path: "auloes/spaece/3ano/aulao-5.html"
  },
  {
    prova: "spaece", serie: "3", id: "spaece-3-6", numero: 6,
    titulo: "Estilo e Narrativa",
    jogo: "Memória", icone: "🧠", corJogo: "narrativa",
    descritores: ["D11", "D23", "D20", "D19_SAEB"],
    descritorLabels: {
      D11: "Reconhecer os elementos que compõem uma narrativa e o conflito gerador",
      D23: "Identificar os níveis de linguagem e/ou as marcas linguísticas que evidenciam locutor e/ou interlocutor",
      D20: "Identificar o efeito de sentido decorrente do uso da pontuação e de outras notações",
      D19_SAEB: "Reconhecer o efeito de sentido decorrente da exploração de recursos ortográficos e/ou morfossintáticos"
    },
    resumo: "Recursos de estilo, variação linguística e elementos da narrativa.",
    status: "ready", path: "auloes/spaece/3ano/aulao-6.html"
  },
];

const WHATSAPP_URL = "https://wa.me/5588996563798?text=" + encodeURIComponent("Olá! Vi o site do APProf e queria saber mais 🙂");

/* Pix copia-e-cola (BR Code estático) — não alterar: o CRC16 no final só vale para esta string exata. */
const PIX_PAYLOAD = "00020126580014BR.GOV.BCB.PIX0136352327bb-6d66-4464-9398-b503b4f282a65204000053039865802BR5924Loyana Jacinto Rodrigues6009SAO PAULO621405101Jy8wpch1r6304A234";
