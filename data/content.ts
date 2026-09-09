/**
 * Toda a copy da landing page, separada dos componentes.
 *
 * Itens marcados com "PLACEHOLDER" são texto de exemplo — o esboço da oferta
 * não trouxe o conteúdo final para esses pontos (subtemas dos módulos,
 * depoimentos, algumas respostas de FAQ). Troque pelo conteúdo real antes de
 * publicar a página.
 */

export const product = {
  name: "Guia Visual Aprenda Sem Estudar",
};

export const expertSection = {
  eyebrow: "Autoridade & cuidado editorial",
  headingLine1: "Conteúdo organizado com",
  headingLine2: "acompanhamento especializado",
  subheading:
    "O Guia Visual Aprenda Sem Estudar foi desenvolvido para apresentar conteúdos laboratoriais de maneira mais visual, organizada e fácil de consultar, com atenção à clareza das informações e à experiência de estudo.",
  photo: {
    mobile: { src: "/imagens/mobile/especialista.webp", width: 320, height: 427 },
    desktop: { src: "/imagens/desktop/especialista.webp", width: 640, height: 853 },
  },
  name: "Profª. Jenifer Velasque",
  role: "Professora e especialista em Análises Clínicas",
  bio: [
    "A Profª. Jenifer Velasque atua na área de Análises Clínicas e contribuiu para que os conteúdos do Guia Visual fossem apresentados de maneira clara, organizada e didática.",
    "Seu acompanhamento editorial auxilia na transformação de conceitos relacionados à hematologia, coleta de amostras, urinálise, microbiologia, bioquímica e demais áreas laboratoriais em mapas visuais mais simples de consultar, revisar e compreender.",
    "O objetivo é oferecer aos estudantes um material complementar que una organização, recursos visuais e uma linguagem educacional acessível, facilitando o estudo dos principais assuntos de Análises Clínicas.",
  ],
  credentials: [
    { icon: "🎓", label: "Formação", text: "Biomedicina e Ciências Biológicas" },
    {
      icon: "🕐",
      label: "Experiência",
      text: "Experiência no ensino, na organização e na apresentação educacional de conteúdos relacionados às rotinas e aos fundamentos laboratoriais.",
    },
    {
      icon: "🔬",
      label: "Área de atuação",
      text: "Análises Clínicas, educação laboratorial e organização de conteúdos para estudantes de Biomedicina, Farmácia e cursos técnicos.",
    },
    {
      icon: "📄",
      label: "Revisão do material",
      text: "Acompanhamento da clareza, organização visual, linguagem educacional e apresentação dos conteúdos laboratoriais.",
    },
  ],
  quote:
    "Nosso objetivo é transformar assuntos laboratoriais que muitas vezes parecem complexos em conteúdos mais visuais, organizados e fáceis de revisar.",
  quoteName: "Profª. Jenifer Velasque",
  quoteRole: "Especialista em Análises Clínicas",
  disclaimer:
    "Este material possui finalidade exclusivamente educacional e complementar. Ele não substitui aulas, orientação docente, literatura científica, atividades práticas supervisionadas, avaliação profissional, diagnóstico, interpretação clínica individualizada ou protocolos laboratoriais oficiais.",
  trustBadges: [
    "Conteúdo educacional",
    "Organização por assuntos",
    "Revisão visual e textual",
    "Material complementar de estudo",
  ],
};

export const hero = {
  image: {
    mobile: { src: "/imagens/mobile/hero-768.webp", width: 768, height: 960 },
    desktop: { src: "/imagens/desktop/hero.webp", width: 1120, height: 1400 },
  },
  headlinePrefix: "Tenha 80 mapas de 10 áreas de Análises Clínicas reunidos em ",
  headlineHighlight:
    "1 única biblioteca visual para consultar pelo celular sempre que esquecer alguma coisa.",
  subheadlinePrefix:
    'Chega de procurar uma informação em apostilas, prints, PDFs e anotações diferentes. O Guia Visual "Aprenda Sem Estudar" reúne os principais conteúdos de hematologia, microbiologia, parasitologia, bioquímica, imunologia e outras áreas em ',
  subheadlineHighlight: "80 mapas organizados por tema",
  subheadlineSuffix: " e disponíveis em 3 tipos de dispositivo: celular, tablet ou computador.",
  ctaText: "QUERO ESTUDAR COM MAPAS VISUAIS",
  trustBullets: ["Pagamento único", "100% digital", "Acesso imediato"],
};

export const quickBullets = [
  { text: "Acesso digital imediato" },
  { text: "Pagamento único" },
  { text: "Estude em qualquer dispositivo" },
  { text: "Conteúdo organizado por temas" },
];

// Títulos e módulos conferidos diretamente nas imagens reais dos mapas
// (public/imagens/desktop/prev-01..10). Nota: os nomes/números de módulo aqui
// (02 a 05) não batem 1:1 com o `modulesIndex` abaixo, que ainda é
// placeholder — ajustar modulesIndex quando tivermos o índice real completo.
export const previewCarousel = {
  eyebrow: "Veja por dentro",
  heading: "Veja por dentro do Guia Visual Aprenda Sem Estudar",
  subheading:
    "Conheça algumas das páginas que você poderá acessar imediatamente após a confirmação da compra.",
  items: [
    { mobileImage: "/imagens/mobile/prev-01.webp", image: "/imagens/desktop/prev-01.webp", title: "Preparação do Paciente", module: "Coleta e Fase Pré-Analítica" },
    { mobileImage: "/imagens/mobile/prev-02.webp", image: "/imagens/desktop/prev-02.webp", title: "Sangue Total x Plasma x Soro", module: "Coleta e Fase Pré-Analítica" },
    { mobileImage: "/imagens/mobile/prev-03.webp", image: "/imagens/desktop/prev-03.webp", title: "Ordem dos Tubos de Coleta", module: "Coleta e Fase Pré-Analítica" },
    { mobileImage: "/imagens/mobile/prev-04.webp", image: "/imagens/desktop/prev-04.webp", title: "Hemograma: Visão Geral", module: "Hematologia" },
    { mobileImage: "/imagens/mobile/prev-05.webp", image: "/imagens/desktop/prev-05.webp", title: "Leucócitos", module: "Hematologia" },
    { mobileImage: "/imagens/mobile/prev-06.webp", image: "/imagens/desktop/prev-06.webp", title: "Contagem Diferencial de Leucócitos", module: "Hematologia" },
    { mobileImage: "/imagens/mobile/prev-07.webp", image: "/imagens/desktop/prev-07.webp", title: "Plaquetas", module: "Hematologia" },
    { mobileImage: "/imagens/mobile/prev-08.webp", image: "/imagens/desktop/prev-08.webp", title: "Cascata da Coagulação", module: "Hemostasia e Coagulação" },
    { mobileImage: "/imagens/mobile/prev-09.webp", image: "/imagens/desktop/prev-09.webp", title: "Tempo de Tromboplastina Parcial Ativada", module: "Hemostasia e Coagulação" },
    { mobileImage: "/imagens/mobile/prev-10.webp", image: "/imagens/desktop/prev-10.webp", title: "Coleta de Urina", module: "Urinálise e Líquidos Biológicos" },
  ],
  mobileWidth: 768,
  mobileHeight: 543,
  desktopWidth: 1280,
  desktopHeight: 905,
  closingText: "E isso é apenas uma pequena parte de todo o conteúdo disponível.",
  ctaText: "QUERO TER ACESSO AO ATLAS",
};

export const painSection = {
  headingLine1: "Estudar Análises Clínicas",
  headingLine2: "não precisa ser tão confuso",
  question:
    "Você também sente que existe informação demais para memorizar e pouco material realmente organizado?",
  pains: [
    {
      title: "Muitos conteúdos diferentes",
      description:
        "Hematologia, microbiologia, bioquímica, imunologia, parasitologia e outras áreas precisam ser estudadas ao mesmo tempo.",
    },
    {
      title: "Termos difíceis de memorizar",
      description:
        "Células, microrganismos, exames e alterações podem parecer muito semelhantes quando apresentados apenas em textos.",
    },
    {
      title: "Apostilas extensas",
      description:
        "Você passa horas lendo capítulos inteiros, mas continua com dificuldade para visualizar e lembrar dos pontos principais.",
    },
    {
      title: "Conteúdos desorganizados",
      description:
        "Anotações soltas, prints, PDFs e materiais espalhados tornam sua revisão mais lenta e confusa.",
    },
    {
      title: "Dificuldade nas provas",
      description:
        "Mesmo estudando, é comum confundir informações importantes no momento de responder às questões.",
    },
    {
      title: "Pouco tempo para revisar",
      description:
        "Entre aulas, provas, trabalhos e estágios, nem sempre sobra tempo para reler materiais extensos.",
    },
  ],
};

export const bridge = {
  text: "Foi para transformar essa rotina que criamos o Guia Visual Aprenda Sem Estudar.",
  ctaText: "QUERO FACILITAR MEUS ESTUDOS",
};

export const benefits = {
  image: {
    mobile: { src: "/imagens/mobile/beneficios-amostras.webp", width: 480, height: 338 },
    desktop: { src: "/imagens/desktop/beneficios-amostra.webp", width: 900, height: 634 },
  },
  heading: "Conteúdos complexos transformados em",
  headingHighlight: "mapas visuais",
  description:
    "O Guia Visual Aprenda Sem Estudar organiza os assuntos mais importantes da área laboratorial em páginas ilustradas, objetivas e fáceis de consultar.",
  items: [
    "Identifique informações importantes mais rapidamente",
    "Visualize diferenças entre células e microrganismos",
    "Revise conteúdos antes de provas",
    "Organize seus estudos por temas",
    "Consulte o material sempre que precisar",
    "Compare estruturas lado a lado",
    "Evite perder tempo procurando informações em diferentes materiais",
  ],
  quote:
    "Não é apenas um conjunto de resumos. É uma biblioteca visual organizada para facilitar sua rotina de estudos.",
  ctaText: "QUERO APRENDER DE FORMA VISUAL",
};

export const whyVisualMaps = {
  headingLine1: "Por que os mapas visuais",
  headingLine2: "facilitam sua revisão?",
  reasons: [
    {
      title: "Mais organização",
      description:
        "Os conteúdos são separados por temas e apresentados em uma sequência fácil de acompanhar.",
    },
    {
      title: "Revisão mais rápida",
      description:
        "Encontre os pontos principais sem precisar reler capítulos inteiros antes de uma prova.",
    },
    {
      title: "Comparação visual",
      description:
        "Observe lado a lado células, exames, microrganismos, estruturas e características importantes.",
    },
    {
      title: "Acesso prático",
      description: "Consulte os mapas pelo celular, tablet ou computador onde estiver.",
    },
  ],
  examples: [
    {
      mobile: { src: "/imagens/mobile/residuos.webp", width: 640, height: 448 },
      desktop: { src: "/imagens/desktop/residuos.webp", width: 1119, height: 784 },
      caption: "Resíduos laboratoriais",
    },
    {
      mobile: { src: "/imagens/mobile/selecao.webp", width: 640, height: 452 },
      desktop: { src: "/imagens/desktop/selecao.webp", width: 1119, height: 791 },
      caption: "Seleção da veia",
    },
  ],
};

export const modulesIndex = {
  eyebrow: "Biblioteca completa",
  headingLine1: "Uma biblioteca visual",
  headingLine2: "completa de Análises Clínicas",
  subheading: "Os mapas estão organizados por áreas para facilitar seus estudos e revisões.",
  modules: [
    {
      number: 1,
      name: "Fundamentos do Laboratório",
      subtopics: ["Biossegurança", "Vidrarias", "Equipamentos", "Organização laboratorial", "Boas práticas"],
    },
    {
      number: 2,
      name: "Coleta e Fase Pré-Analítica",
      subtopics: [
        "Tipos de amostras",
        "Tubos de coleta",
        "Anticoagulantes",
        "Ordem de coleta",
        "Conservação e transporte",
        "Erros pré-analíticos",
      ],
    },
    {
      number: 3,
      name: "Hematologia",
      subtopics: [
        "Componentes do sangue",
        "Células sanguíneas",
        "Hemograma",
        "Eritrócitos",
        "Leucócitos",
        "Plaquetas",
        "Índices hematimétricos",
      ],
    },
    {
      number: 4,
      name: "Hemostasia e Coagulação",
      subtopics: ["Hemostasia", "Cascata de coagulação", "Fatores de coagulação", "Exames de coagulação", "Alterações principais"],
    },
    {
      number: 5,
      name: "Microbiologia",
      subtopics: ["Bactérias", "Fungos", "Meios de cultura", "Coloração de Gram", "Técnicas de identificação"],
    },
    {
      number: 6,
      name: "Parasitologia",
      subtopics: ["Protozoários", "Helmintos", "Ciclos biológicos", "Formas evolutivas", "Métodos de identificação"],
    },
    {
      number: 7,
      name: "Bioquímica Clínica",
      subtopics: ["Glicose", "Função renal", "Função hepática", "Perfil lipídico", "Enzimas", "Marcadores laboratoriais"],
    },
    {
      number: 8,
      name: "Imunologia",
      subtopics: ["Antígenos", "Anticorpos", "Resposta imune", "Imunoglobulinas", "Testes imunológicos"],
    },
    {
      number: 9,
      name: "Urinálise",
      subtopics: ["Exame físico", "Exame químico", "Sedimentoscopia", "Cristais", "Cilindros", "Células encontradas"],
    },
    {
      number: 10,
      name: "Controle de Qualidade",
      subtopics: [
        "Erros laboratoriais",
        "Controle interno",
        "Controle externo",
        "Calibração",
        "Boas práticas",
        "Segurança dos resultados",
      ],
    },
  ],
};

export const disclaimer =
  "O material possui finalidade educacional e não substitui aulas práticas, livros acadêmicos, protocolos laboratoriais, orientação profissional ou interpretação clínica individualizada.";

export const comparisonSection = {
  heading: "Por que o Guia Visual é diferente?",
  traditional: {
    title: "Materiais tradicionais",
    items: [
      "Textos longos",
      "Informações espalhadas",
      "Pouca organização visual",
      "Difícil revisão",
      "Excesso de conteúdo sem hierarquia",
      "Necessidade de procurar em diferentes materiais",
    ],
  },
  atlas: {
    title: "Guia Visual Aprenda Sem Estudar",
    items: [
      "Conteúdo organizado por temas",
      "Mapas ilustrados e objetivos",
      "Comparações visuais",
      "Consulta rápida",
      "Acesso em diferentes dispositivos",
      "80 ou 160 mapas em uma única biblioteca",
    ],
  },
};

export const studyAnywhere = {
  image: {
    mobile: { src: "/imagens/mobile/devices.webp", width: 480, height: 360 },
    desktop: { src: "/imagens/desktop/devices.webp", width: 1440, height: 1080 },
  },
  heading: "Estude onde e como preferir",
  description:
    "O Guia Visual é totalmente digital e pode ser acessado pelo celular, tablet ou computador. Você pode estudar em casa, na faculdade, durante o estágio ou antes de uma prova.",
  bullets: ["Acesso digital", "Conteúdo organizado", "Consulte sempre que precisar"],
};

export const testimonialsSection = {
  heading: "Veja o que os estudantes estão dizendo",
};

// Prints reais de conversas (estilo WhatsApp), um por estudante — o
// depoimento em si já está desenhado dentro da imagem.
export const testimonials = Array.from({ length: 10 }, (_, index) => {
  const id = (index + 1).toString().padStart(2, "0");
  return {
    id,
    mobile: { src: `/imagens/mobile/depoimento-${id}.webp`, width: 400, height: 711 },
    desktop: { src: `/imagens/desktop/depoimento-${id}.webp`, width: 760, height: 1350 },
  };
});

export const pricingSection = {
  eyebrow: "Planos",
  heading: "Escolha como deseja acessar",
  subheading: "Pagamento único. Sem mensalidades e sem assinatura.",
  trustLine: "Compra segura • Pagamento único • Acesso digital • Garantia de 30 dias",
};

export const pricing = {
  basico: {
    name: "Básico",
    displayTitle: "Guia Visual Essencial",
    image: {
      mobile: { src: "/imagens/mobile/plano-basico.webp", width: 240, height: 300 },
      desktop: { src: "/imagens/desktop/plano-basico.webp", width: 480, height: 600 },
    },
    priceFromLabel: "37,00",
    priceLabel: "14,90",
    priceValue: 14.9,
    ctaText: "QUERO O BÁSICO POR R$ 14,90",
    features: [
      "80 Mapas Visuais de Análises Clínicas",
      "Conteúdo dividido por temas",
      "Acesso pelo celular, tablet ou computador",
      "Material totalmente digital",
      "Acesso após a confirmação do pagamento",
      "Sem mensalidade",
    ],
    notIncluded: [
      "80 mapas adicionais",
      "Guia Visual de Tubos de Coleta",
      "Atlas Visual de Hematologia",
      "Guia Visual de Parasitologia",
      "Checklist para Estágios Laboratoriais",
      "Caderno de Revisão para Provas",
    ],
  },
  premium: {
    name: "Premium",
    displayTitle: "Guia Visual Completo",
    badge: "MAIS COMPLETO",
    image: {
      mobile: { src: "/imagens/mobile/plano-premium.webp", width: 240, height: 300 },
      desktop: { src: "/imagens/desktop/plano-premium.webp", width: 480, height: 600 },
    },
    priceFromLabel: "97,00",
    priceLabel: "37",
    priceValue: 37,
    ctaText: "QUERO O PREMIUM POR R$ 37",
    features: [
      "160 Mapas Visuais de Análises Clínicas",
      "Todo o conteúdo do Plano Básico",
      "80 mapas visuais adicionais",
      "Guia Visual de Tubos de Coleta",
      "Atlas Visual de Hematologia",
      "Guia Visual de Parasitologia",
      "Checklist para Estágios Laboratoriais",
      "Caderno de Revisão para Provas",
      "Acesso pelo celular, tablet ou computador",
      "Sem mensalidade",
    ],
    highlight: "Você recebe o dobro de mapas e todos os cinco bônus.",
    bonusMobileWidth: 400,
    bonusMobileHeight: 496,
    bonusDesktopWidth: 400,
    bonusDesktopHeight: 496,
    bonuses: [
      { mobileImage: "/imagens/mobile/bonus-1.webp", image: "/imagens/desktop/bonus-1.webp", title: "Guia Visual de Tubos de Coleta", description: "Cores, aditivos, finalidades, ordem de coleta e principais cuidados com as amostras." },
      { mobileImage: "/imagens/mobile/bonus-2.webp", image: "/imagens/desktop/bonus-2.webp", title: "Atlas Visual de Hematologia", description: "Conteúdos complementares sobre células sanguíneas, hemograma e alterações hematológicas." },
      { mobileImage: "/imagens/mobile/bonus-3.webp", image: "/imagens/desktop/bonus-3.webp", title: "Guia Visual de Parasitologia", description: "Principais protozoários, helmintos, formas evolutivas, ciclos e características de identificação." },
      { mobileImage: "/imagens/mobile/bonus-4.webp", image: "/imagens/desktop/bonus-4.webp", title: "Checklist para Estágios Laboratoriais", description: "Um material prático para ajudar na organização das atividades e rotinas durante o estágio." },
      { mobileImage: "/imagens/mobile/bonus-5.webp", image: "/imagens/desktop/bonus-5.webp", title: "Caderno de Revisão para Provas", description: "Páginas objetivas para revisar os assuntos mais importantes antes das avaliações." },
    ],
  },
};

export const bonusSection = {
  eyebrow: "Plano Premium",
  headingLine1: "Ao escolher o Plano Premium,",
  headingLine2: "você recebe 5 bônus exclusivos",
  subheading: "Materiais complementares para deixar seus estudos ainda mais completos.",
  includedBadge: "Incluído no Premium",
  footerText: "Todos os cinco bônus já estão incluídos no Plano Premium.",
};

export const downsell = {
  value: 27,
  eyebrow: "Condição especial liberada",
  headingLine1: "Plano Premium com",
  headingLine2Prefix: "desconto por ",
  headingLine2Highlight: "R$ 27",
  description:
    "Aproveite o desconto exclusivo e libere agora o Plano Premium com 160 mapas e 5 bônus por apenas R$ 27.",
  offerCard: {
    label: "Premium promocional",
    badge: "RECOMENDADO",
    price: "27",
    features: ["160 mapas visuais", "80 mapas adicionais", "5 bônus exclusivos", "Acesso digital completo"],
  },
  footerNote: "Economize e leve o dobro de mapas + 5 bônus exclusivos",
  acceptCtaText: "Sim, quero o Premium por R$ 27",
  declineCtaText: "Não, prefiro comprar o Plano Básico por R$ 14,90",
};

export const pricingCountdown = {
  guaranteePrefix: "Você terá ",
  guaranteeBold: "30 dias de garantia",
  guaranteeSuffix: " para experimentar o material com tranquilidade.",
};

export const guarantee = {
  days: 30,
  headingLine1: "30 dias de garantia para",
  headingLine2: "você conhecer o material",
  description:
    "Você terá 30 dias para acessar o material e conhecer o conteúdo com tranquilidade. Se dentro desse período você entender que o produto não faz sentido para você, poderá solicitar o cancelamento conforme as condições aplicáveis à compra.",
  badges: ["Compra protegida", "Pagamento processado com segurança", "Garantia de 30 dias", "Pagamento único"],
};

export const faqSection = {
  heading: "Perguntas frequentes",
};

export const faq = [
  {
    question: "Vou receber material físico ou é só digital?",
    answer: "O Guia Visual Aprenda Sem Estudar é totalmente digital. Nenhum material físico será enviado.",
  },
  {
    question: "Vou receber o acesso na hora?",
    answer:
      "Sim. O acesso é liberado assim que o pagamento é confirmado, com as orientações enviadas por e-mail.",
  },
  {
    question: "Funciona no celular?",
    answer: "Sim. Você pode estudar pelo celular, tablet ou computador — onde e como preferir.",
  },
  {
    question: "Vou pagar mensalidade depois?",
    answer: "Não. O pagamento é único, sem mensalidade e sem assinatura.",
  },
  {
    question: "Isso serve para o meu curso?",
    answer:
      "Sim, para estudantes de Biomedicina, Farmácia, Técnico em Análises Clínicas, Patologia Clínica e áreas laboratoriais relacionadas.",
  },
  {
    question: "Isso substitui minhas aulas ou serve para diagnóstico?",
    answer:
      "Não. O material tem finalidade exclusivamente educacional e complementar — não substitui aulas, estágios, protocolos institucionais, diagnóstico, tratamento ou orientação de profissionais habilitados.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "O Básico traz 80 mapas visuais divididos por tema. O Premium traz o dobro (160 mapas) mais 5 bônus exclusivos: Guia de Tubos de Coleta, Atlas de Hematologia, Guia de Parasitologia, Checklist de Estágios e Caderno de Revisão.",
  },
  {
    question: "E se eu não gostar do material?",
    answer:
      "Você tem 30 dias de garantia para avaliar com tranquilidade, conforme as condições aplicáveis à compra.",
  },
  {
    question: "Por que aparece um preço diferente (R$ 27) durante a compra?",
    answer:
      "R$ 27 é uma condição promocional de upgrade para o Plano Premium, exibida apenas para quem seleciona o Plano Básico antes de finalizar a compra.",
  },
];

export const finalCta = {
  heading: "Transforme conteúdos laboratoriais complexos em uma biblioteca visual fácil de consultar.",
  subtext: "Pagamento único, acesso imediato e 30 dias de garantia.",
  ctaText: "QUERO GARANTIR MEU ACESSO AGORA",
};

export const footer = {
  links: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ],
};
