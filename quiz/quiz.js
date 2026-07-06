/* ============================================================
   NEGÓCIO FANTASMA — Funil de Quiz (cliente: Ricco Abravanel)
   Motor + conteúdo. Spec fiel ao PDF do Jerônimo.
   ============================================================ */

/* -------- CONFIG (ajuste fácil) -------- */
const CONFIG = {
  // pra onde o botão final / resultado leva (oferta). '/' = página de vendas na raiz do site:
  offerUrl: '/',
  // endpoint opcional pra enviar o lead (nome+email+perfil+tags). Vazio = só guarda local:
  leadEndpoint: '',
};

/* -------- ABERTURA (Tela 1) -------- */
const INTRO = {
  headline: 'Descubra em menos de 3 minutos qual é o jeito certo de você montar uma renda na internet sem precisar aparecer',
  sub: 'Responda algumas perguntas rápidas e descubra o seu perfil de empreendedor invisível, com o caminho que combina com a sua realidade pra usar a inteligência artificial trabalhando por você.',
  apoio: 'A maioria das pessoas que quer ganhar dinheiro online trava no mesmo ponto. Acha que precisa virar influenciador, gravar vídeo e expor o rosto pra estranho. Não precisa. Existe um jeito de construir e tocar um negócio digital inteiro nos bastidores, e o caminho certo muda de pessoa pra pessoa. Este teste mostra qual é o seu.',
  cta: 'Descobrir meu perfil',
  micro: 'Leva menos de 3 minutos. Sem pegadinha, sem termo complicado.',
};

/* -------- 16 PERGUNTAS (Telas 2 a 17) -------- */
const QUESTIONS = [
  { // 1 — Tela 2
    text: 'O que mais te faz querer uma renda na internet hoje?',
    options: [
      { t: 'Quero parar de depender só do meu salário e ter algo meu', tags: { seg: 'independência' } },
      { t: 'Já tentei umas coisas online e quero finalmente acertar', tags: { seg: 'recomeço' } },
      { t: 'Quero uma renda extra sem largar o que eu já faço hoje', tags: { seg: 'extra' } },
      { t: 'Quero liberdade pra trabalhar de casa, no meu tempo', tags: { seg: 'liberdade' } },
    ],
  },
  { // 2 — Tela 3
    text: 'Qual faixa de idade é a sua?',
    options: [
      { t: 'Até 29 anos', tags: { seg: '18-29' } },
      { t: '30 a 39 anos', tags: { seg: '30-39' } },
      { t: '40 a 49 anos', tags: { seg: '40-49' } },
      { t: '50 anos ou mais', tags: { seg: '50+' } },
    ],
  },
  { // 3 — Tela 4 (padrão = define perfil; desempate)
    text: 'O que mais te trava de começar agora, ou de continuar?',
    options: [
      { t: 'A ideia de ter que aparecer, gravar vídeo e me expor', tags: { diag: 'exposição', padrao: 'invisivel' } },
      { t: 'Já tentei antes e não deu certo, perdi a confiança', tags: { diag: 'frustração', padrao: 'recomeco' } },
      { t: 'A correria, minha rotina já é puxada', tags: { diag: 'tempo', padrao: 'silencioso' } },
      { t: 'Não sei por onde começar e tenho medo de cair em furada', tags: { diag: 'direção' } },
    ],
  },
  { // 4 — Tela 5 (padrão)
    text: 'Como você se sente com a ideia de mostrar o rosto pra vender na internet?',
    options: [
      { t: 'Travo só de pensar, isso não é pra mim de jeito nenhum', tags: { padrao: 'invisivel' } },
      { t: 'Até encararia, mas sozinho isso nunca me trouxe resultado', tags: { padrao: 'recomeco' } },
      { t: 'Não tenho problema, mas não tenho tempo de ficar gravando', tags: { padrao: 'silencioso' } },
      { t: 'Tenho vergonha e prefiro mil vezes ficar por trás', tags: { padrao: 'invisivel' } },
    ],
  },
  { // 5 — Tela 6 (padrão)
    text: 'Você já tentou ganhar dinheiro na internet de alguma forma?',
    options: [
      { t: 'Nunca tentei de verdade, sempre travei antes de começar', tags: { padrao: 'invisivel' } },
      { t: 'Já tentei mais de uma vez e não engatei', tags: { padrao: 'recomeco' } },
      { t: 'Comecei alguma coisa mas não tive tempo de levar pra frente', tags: { padrao: 'silencioso' } },
      { t: 'Só pesquisei e assisti vídeo, nunca botei a mão na massa', tags: { padrao: 'recomeco' } },
    ],
  },
  { // 6 — Tela 7 (padrão)
    text: 'Quando você imagina ganhando dinheiro pela internet, o que aparece primeiro na sua cabeça?',
    options: [
      { t: 'Eu nos bastidores, montando tudo, sem ninguém saber que é meu', tags: { padrao: 'invisivel' } },
      { t: 'Eu tentando de novo, mas agora com um método que funciona', tags: { padrao: 'recomeco' } },
      { t: 'Eu fazendo isso de madrugada ou nas folgas, em silêncio', tags: { padrao: 'silencioso' } },
      { t: 'Não sei bem como seria, só sei que quero', tags: { padrao: 'recomeco' } },
    ],
  },
  { // 7 — Tela 8 (diag)
    text: 'O que mais te atrai na ideia de usar inteligência artificial pra trabalhar por você?',
    options: [
      { t: 'Não precisar dar a cara, a IA faz a parte de frente', tags: { diag: 'exposição' } },
      { t: 'Conseguir resultado sem depender de seguidor e audiência', tags: { diag: 'frustração' } },
      { t: 'Adiantar o trabalho em pouco tempo, minha rotina é corrida', tags: { diag: 'tempo' } },
      { t: 'Aprender uma habilidade nova que vale pro futuro', tags: { diag: 'curiosidade' } },
    ],
  },
  { // 8 — Tela 9 (score)
    text: 'Pensa nos últimos meses. O quanto você ficou parado, só na vontade, sem conseguir começar?',
    options: [
      { t: 'Parado total, só na vontade mesmo', tags: { score: 3 } },
      { t: 'Comecei e parei mais de uma vez', tags: { score: 2 } },
      { t: 'Avancei um pouco, mas sem constância', tags: { score: 2 } },
      { t: 'Só pesquisando, ainda nem botei a mão na massa', tags: { score: 1 } },
    ],
  },
  { // 9 — Tela 10 (qual)
    text: 'O quanto não ter essa renda a mais pesa na sua vida hoje?',
    options: [
      { t: 'Bastante, sinto que estou ficando pra trás', tags: { qual: 'alta' } },
      { t: 'O suficiente pra eu querer resolver de vez', tags: { qual: 'alta' } },
      { t: 'Incomoda, mas vou levando', tags: { qual: 'media' } },
      { t: 'Quero resolver antes que aperte mais', tags: { qual: 'preventiva' } },
    ],
  },
  { // 10 — Tela 11 (qual)
    text: 'Como você se sente quando tenta e não vê resultado?',
    options: [
      { t: 'Frustrado, sinto que falhei mais uma vez', tags: { qual: 'alta' } },
      { t: 'Cansado de tanta promessa que não entrega', tags: { qual: 'alta' } },
      { t: 'Desanimado, mas ainda com esperança', tags: { qual: 'media' } },
      { t: 'Tranquilo, encaro como parte do processo', tags: { qual: 'fria' } },
    ],
  },
  { // 11 — Tela 12 (qual)
    text: 'Se daqui a um ano nada mudar, como você imagina que vai estar?',
    options: [
      { t: 'Preocupado, não quero chegar lá', tags: { qual: 'alta' } },
      { t: 'Incomodado, mas levando como sempre', tags: { qual: 'media' } },
      { t: 'Quero agir agora justamente pra não descobrir', tags: { qual: 'alta' } },
      { t: 'Acho que daria um jeito de qualquer forma', tags: { qual: 'fria' } },
    ],
  },
  { // 12 — Tela 13 (qual investe/novo)
    text: 'Você já pagou por algum curso ou método pra ganhar dinheiro online?',
    options: [
      { t: 'Sim, mais de um, e nem todos funcionaram', tags: { qual: 'investe' } },
      { t: 'Sim, uma coisa ou outra pontual', tags: { qual: 'investe' } },
      { t: 'Ainda não, mas estou aberto', tags: { qual: 'novo' } },
      { t: 'Não, sempre tentei só por conta própria', tags: { qual: 'novo' } },
    ],
  },
  { // 13 — Tela 14 (qual quente/morna/fria)
    text: 'Se existisse um jeito de montar essa renda usando inteligência artificial, sem precisar aparecer e sem termo complicado, você toparia ver como funciona?',
    options: [
      { t: 'Com certeza, já quero começar', tags: { qual: 'quente' } },
      { t: 'Sim, se for prático e couber na minha rotina', tags: { qual: 'morna' } },
      { t: 'Talvez, dependendo de como funciona', tags: { qual: 'fria' } },
    ],
  },
  { // 14 — Tela 15 (obj)
    text: 'O que mais te faz hesitar na hora de começar algo novo pra você?',
    options: [
      { t: 'Medo de gastar e não funcionar de novo', tags: { obj: 'prova' } },
      { t: 'Falta de tempo na rotina', tags: { obj: 'tempo' } },
      { t: 'Medo de ser complicado demais pra mim', tags: { obj: 'simplicidade' } },
      { t: 'Receio de ter que me expor pra estranho', tags: { obj: 'exposição' } },
    ],
  },
  { // 15 — Tela 16 (comp)
    text: 'Quanto tempo por dia você conseguiria dedicar pra montar isso, de forma leve?',
    options: [
      { t: 'Alguns minutos por dia, eu encaixo', tags: { comp: 'alto' } },
      { t: 'Um pouco, desde que seja simples', tags: { comp: 'medio' } },
      { t: 'Pouco tempo, minha rotina é cheia', tags: { comp: 'baixo' } },
    ],
  },
  { // 16 — Tela 17 (comp + qual)
    text: 'O quanto você quer resolver isso agora, de 1 a 4?',
    options: [
      { t: '4, é prioridade pra mim', tags: { comp: 'alto', qual: 'quente' } },
      { t: '3, quero muito', tags: { comp: 'alto', qual: 'morna' } },
      { t: '2, quero, mas sem pressa', tags: { comp: 'medio', qual: 'fria' } },
      { t: '1, só pesquisando por enquanto', tags: { comp: 'baixo', qual: 'fria' } },
    ],
  },
];

/* -------- CAPTURA (Tela 18) -------- */
const CAPTURE = {
  headline: 'Seu diagnóstico está pronto',
  texto: 'Pra te mostrar o seu perfil de empreendedor invisível completo e o caminho personalizado pra começar, deixa onde podemos enviar.',
  cta: 'Ver o meu perfil agora',
  micro: 'Seus dados ficam seguros. Sem spam, só o seu resultado e o passo a passo pra você.',
  loading: 'Montando o seu perfil de empreendedor invisível...',
};

/* -------- RESULTADOS (Tela 19 — 1 de 3 perfis) -------- */
const PROFILES = {
  invisivel: {
    key: 'A',
    title: 'O seu perfil é o do Arquiteto Invisível',
    espelhamento: 'Você tem o desejo de sobra pra montar uma renda online, mas tem uma coisa te segurando: a ideia de aparecer. Só de pensar em gravar um vídeo, mostrar o rosto ou colocar a sua cara pra estranho julgar, você já trava. E não é frescura. É que esse mundo de internet sempre te vendeu que pra ganhar dinheiro você teria que virar influenciador, criar audiência e expor a sua vida. Você quer o resultado, não os holofotes.',
    causa: 'A raiz do seu travamento não é falta de coragem nem de talento. É que você tentou enxergar uma saída usando um mapa errado, aquele que diz que renda na internet é a mesma coisa que aparecer. Enquanto você acreditar nesse mapa, vai continuar parado, porque ele pede de você exatamente aquilo que você não quer dar. O problema nunca foi você, foi o caminho que te mostraram.',
    porque: 'Toda vez que você chegou perto, esbarrou na mesma parede. Pra dar certo, parecia que tinha que se expor. Aí você fechou a aba e seguiu a vida, com a sensação de ter capacidade de sobra e nenhum modelo que respeitasse o seu jeito de ser.',
    transicao: 'Existe um jeito de construir um negócio digital inteiro nos bastidores, onde a inteligência artificial assume toda a parte de frente. Ela cria, ela escreve, ela aparece por você. Você fica onde sempre quis, no comando, invisível, montando a estrutura sem dar a sua cara pra ninguém. Esse jeito tem nome, chama Método Fantasma, e foi desenhado pra pessoas como você.',
    cta: 'Quero ver como montar isso sem aparecer',
    reforco: 'Feito pra quem quer o resultado sem nunca precisar mostrar o rosto, com a inteligência artificial aparecendo no seu lugar.',
  },
  recomeco: {
    key: 'B',
    title: 'O seu perfil é o do Estrategista do Recomeço',
    espelhamento: 'Você não é iniciante. Já tentou ganhar dinheiro na internet antes, talvez mais de uma vez. Já mexeu com alguma coisa, já assistiu aula, já se animou e já se frustrou. Hoje você carrega aquela ferida silenciosa de quem tentou e não engatou. Não porque é incapaz, mas porque os modelos que te ensinaram pediam coisas que não combinavam com você, como aparecer, criar audiência e esperar meses por um resultado que nunca chegava.',
    causa: 'O motivo de você ter travado antes não foi falta de esforço, foi o modelo. Você tentou construir resultado em cima de métodos que dependiam da sua exposição, da sua constância nas redes e da sua paciência infinita esperando audiência crescer. Quando faltou uma dessas peças, tudo desmoronou. O que sempre faltou no seu quebra-cabeça foi um mecanismo que trabalhasse por você, sem depender de você aparecer todo dia.',
    porque: 'No fundo a vontade não morreu, só ficou mais cautelosa. Você não procura mais promessa fácil, procura uma coisa que finalmente faça sentido e prove pra você mesmo que dessa vez é diferente. Você não precisa começar do zero, precisa recomeçar do jeito certo.',
    transicao: 'Essa peça que faltava existe e chama Método Fantasma. É um jeito de montar um negócio digital onde a inteligência artificial faz o trabalho pesado e a parte de frente, sem você precisar de seguidor, de audiência ou de aparecer. Pra quem já tentou e travou, ele resolve justamente o ponto que sempre te derrubou, a dependência da sua exposição e da sua constância.',
    cta: 'Quero ver por que dessa vez é diferente',
    reforco: 'Feito pra quem já tentou antes e precisa do mecanismo que faltava pra recomeçar do jeito certo.',
  },
  silencioso: {
    key: 'C',
    title: 'O seu perfil é o do Realizador Silencioso',
    espelhamento: 'Você tem vontade de sobra, o que te falta é tempo. A sua rotina já é puxada, talvez um trabalho que consome o seu dia, talvez uma casa e uma família pra cuidar. Quando sobra um tempinho é à noite ou no fim de semana, e mesmo cansado você fica ali pensando que tinha que existir um jeito de fazer uma renda a mais sem virar a sua vida de cabeça pra baixo.',
    causa: 'O que te impede não é preguiça nem falta de garra. É que quase tudo que te ofereceram até hoje exigia um tempo que você não tem, como gravar vídeo, alimentar rede social e ficar horas na frente da tela. Pra quem tem a rotina apertada, esses modelos são impossíveis de sustentar, e a culpa cai injustamente em você. O furo nunca foi a sua dedicação, foi o método pedir um tempo que a sua vida não permite dar.',
    porque: 'Você não sonha em largar tudo amanhã. Quer algo que caiba na vida que você já tem, que você toque no silêncio, no seu ritmo, sem alarde. Você faz acontecer na surdina, e quando uma coisa funciona, você segura firme. Só ainda não encontrou a coisa certa pra segurar.',
    transicao: 'A solução pra você é um modelo que trabalha mesmo quando você não está na frente da tela. É isso que o Método Fantasma faz. A inteligência artificial assume a parte que tomaria horas suas, cria e aparece no seu lugar, e te devolve um negócio que cabe nas suas folgas e nos seus minutos livres. Sem precisar aparecer e sem precisar de tempo que você não tem.',
    cta: 'Quero ver como encaixar isso na minha rotina',
    reforco: 'Feito pra quem tem pouco tempo e precisa de um negócio que trabalha mesmo fora da frente da tela.',
  },
};

/* -------- PONTE PRA OFERTA (Tela 20) -------- */
const BRIDGE = {
  texto: 'Agora que você conhece o seu perfil, o próximo passo é simples. O Negócio Fantasma reúne o passo a passo completo do Método Fantasma em 5 módulos diretos, mais o Kit IA Pronta com mais de 50 comandos prontos pra colar e usar, e o Guia do Produto Invisível pra você ter o que vender mesmo sem aparecer. Tudo no seu ritmo, do jeito que faz sentido pro seu perfil, com 7 dias de garantia incondicional.',
  cta: 'Quero garantir o meu acesso',
  // quebra de objeção dinâmica (tag obj da Tela 15)
  objecao: {
    prova: 'Garantia de 7 dias incondicional e depoimentos reais de quem já está faturando no modo invisível.',
    tempo: 'Poucos minutos por dia. A inteligência artificial faz o trabalho pesado por você.',
    simplicidade: 'Passo a passo simples, sem termo complicado e sem precisar entender de tecnologia.',
    'exposição': 'Você nunca aparece. A inteligência artificial é a cara do negócio.',
  },
};

/* ============================================================
   MOTOR
   ============================================================ */
const state = { step: 'intro', q: 0, answers: [], lead: null };
const app = document.getElementById('app');
const bar = document.getElementById('progress-bar');

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function setProgress(pct) {
  if (bar) bar.style.width = Math.max(0, Math.min(100, pct)) + '%';
}

function go(html, cls) {
  app.className = 'screen ' + (cls || '');
  app.innerHTML = html;
  app.scrollTop = 0;
  window.scrollTo(0, 0);
  // reflow pra disparar a animação de entrada
  void app.offsetWidth;
  app.classList.add('is-in');
}

/* ----- telas ----- */
function renderIntro() {
  state.step = 'intro';
  setProgress(0);
  const hlPhrase = 'sem precisar aparecer';
  const parts = INTRO.headline.split(hlPhrase);
  const headlineHtml = parts.length === 2
    ? esc(parts[0]) + '<span class="hl">' + esc(hlPhrase) + '</span>' + esc(parts[1])
    : esc(INTRO.headline);
  go(`
    <div class="intro">
      <span class="eyebrow">Negócio Fantasma</span>
      <h1 class="display">${headlineHtml}</h1>
      <p class="sub">${esc(INTRO.sub)}</p>
      <button class="btn btn--gold" data-act="start">${esc(INTRO.cta)}</button>
      <p class="micro">⚡ ${esc(INTRO.micro)}</p>
      <p class="apoio">${esc(INTRO.apoio)}</p>
    </div>
  `, 'screen--intro');
}

function renderQuestion(i) {
  state.step = 'q';
  state.q = i;
  const q = QUESTIONS[i];
  setProgress(((i) / QUESTIONS.length) * 100);
  const opts = q.options.map((o, idx) =>
    `<button class="opt" data-opt="${idx}"><span class="opt__mark"></span><span class="opt__t">${esc(o.t)}</span></button>`
  ).join('');
  go(`
    <div class="quiz">
      <div class="quiz__head">
        <span class="quiz__count">Pergunta ${i + 1} de ${QUESTIONS.length}</span>
      </div>
      <h2 class="quiz__q">${esc(q.text)}</h2>
      <div class="opts">${opts}</div>
      ${i > 0 ? '<button class="back" data-act="back">← voltar</button>' : ''}
    </div>
  `, 'screen--q');
}

function answer(optIdx) {
  const q = QUESTIONS[state.q];
  state.answers[state.q] = { opt: optIdx, tags: q.options[optIdx].tags };
  if (state.q + 1 < QUESTIONS.length) {
    renderQuestion(state.q + 1);
  } else {
    renderCapture();
  }
}

function renderCapture() {
  state.step = 'capture';
  setProgress(100);
  go(`
    <div class="capture">
      <span class="eyebrow">Diagnóstico pronto</span>
      <h2 class="display display--sm">${esc(CAPTURE.headline)}</h2>
      <p class="sub">${esc(CAPTURE.texto)}</p>
      <form class="lead-form" id="lead-form" novalidate>
        <input type="text" name="nome" placeholder="Seu nome" autocomplete="name" required>
        <input type="email" name="email" placeholder="Seu melhor e-mail" autocomplete="email" required>
        <button class="btn btn--gold" type="submit">${esc(CAPTURE.cta)}</button>
      </form>
      <p class="micro">🔒 ${esc(CAPTURE.micro)}</p>
    </div>
  `, 'screen--capture');
}

function renderLoading() {
  setProgress(100);
  go(`
    <div class="loading">
      <div class="spinner" aria-hidden="true"></div>
      <p class="loading__t">${esc(CAPTURE.loading)}</p>
    </div>
  `, 'screen--loading');
}

/* ----- pontuação (apêndice técnico) ----- */
function tally(key) {
  const out = {};
  state.answers.forEach((a) => {
    if (a && a.tags && a.tags[key] != null) {
      const v = a.tags[key];
      out[v] = (out[v] || 0) + 1;
    }
  });
  return out;
}

function computeProfile() {
  // padrão das telas 4,5,6,7 = perguntas índice 2,3,4,5. Maioria vence; empate usa Tela 4 (índice 2).
  const counts = { invisivel: 0, recomeco: 0, silencioso: 0 };
  [2, 3, 4, 5].forEach((i) => {
    const p = state.answers[i] && state.answers[i].tags && state.answers[i].tags.padrao;
    if (p && counts[p] != null) counts[p]++;
  });
  let best = 'invisivel', max = -1, tie = false;
  Object.keys(counts).forEach((k) => {
    if (counts[k] > max) { max = counts[k]; best = k; tie = false; }
    else if (counts[k] === max) { tie = true; }
  });
  if (tie) {
    const desempate = state.answers[2] && state.answers[2].tags && state.answers[2].tags.padrao;
    if (desempate && counts[desempate] != null) best = desempate;
  }
  return best;
}

function computeTemperature() {
  const q = tally('qual');
  const quenteAlta = (q.quente || 0) + (q.alta || 0);
  const fria = q.fria || 0;
  const mornaMedia = (q.morna || 0) + (q.media || 0);
  if (quenteAlta >= 2) return 'quente';
  if (fria > quenteAlta && fria >= mornaMedia) return 'frio';
  return 'morno';
}

function renderResult() {
  state.step = 'result';
  const profileKey = computeProfile();
  const p = PROFILES[profileKey];
  const temp = computeTemperature();
  state.result = { profile: profileKey, temperatura: temp };
  sendLead(); // dispara/registra o lead com o resultado completo
  setProgress(100);
  go(`
    <div class="result">
      <span class="eyebrow">Seu perfil de empreendedor invisível</span>
      <h2 class="display display--sm">${esc(p.title)}</h2>
      <div class="result__body">
        <p>${esc(p.espelhamento)}</p>
        <h3>A raiz do seu travamento</h3>
        <p>${esc(p.causa)}</p>
        <h3>Por que o que você tentou não bastou</h3>
        <p>${esc(p.porque)}</p>
        <div class="result__transition">
          <p>${esc(p.transicao)}</p>
        </div>
      </div>
      <button class="btn btn--gold" data-act="bridge">${esc(p.cta)}</button>
    </div>
  `, 'screen--result');
}

function renderBridge() {
  state.step = 'bridge';
  const profileKey = state.result.profile;
  const p = PROFILES[profileKey];
  const objTag = (tally('obj') && Object.keys(tally('obj'))[0]) || 'prova';
  const objText = BRIDGE.objecao[objTag] || BRIDGE.objecao.prova;
  go(`
    <div class="bridge">
      <span class="eyebrow">O próximo passo</span>
      <p class="bridge__reforco">${esc(p.reforco)}</p>
      <p class="bridge__txt">${esc(BRIDGE.texto)}</p>
      <div class="bridge__obj">✓ ${esc(objText)}</div>
      <a class="btn btn--gold" href="${esc(CONFIG.offerUrl)}" data-act="offer">${esc(BRIDGE.cta)}</a>
      <p class="micro">🛡️ 7 dias de garantia incondicional</p>
    </div>
  `, 'screen--bridge');
}

/* ----- lead ----- */
function sendLead() {
  const payload = {
    ...(state.lead || {}),
    perfil: state.result ? state.result.profile : null,
    temperatura: state.result ? state.result.temperatura : null,
    tags: {
      seg: tally('seg'), diag: tally('diag'), obj: tally('obj'),
      comp: tally('comp'), qual: tally('qual'),
      score: state.answers.reduce((s, a) => s + ((a && a.tags && a.tags.score) || 0), 0),
    },
    respostas: state.answers.map((a, i) => a ? { p: i + 1, opt: a.opt } : null),
    ts: new Date().toISOString(),
  };
  try { localStorage.setItem('nf_lead_last', JSON.stringify(payload)); } catch (e) {}
  if (CONFIG.leadEndpoint) {
    try {
      fetch(CONFIG.leadEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      }).catch(() => {});
    } catch (e) {}
  }
}

/* ----- eventos ----- */
document.addEventListener('click', (e) => {
  const optBtn = e.target.closest('.opt');
  if (optBtn) { answer(Number(optBtn.dataset.opt)); return; }
  const act = e.target.closest('[data-act]');
  if (!act) return;
  const a = act.dataset.act;
  if (a === 'start') renderQuestion(0);
  else if (a === 'back') renderQuestion(Math.max(0, state.q - 1));
  else if (a === 'bridge') renderBridge();
});

document.addEventListener('submit', (e) => {
  if (e.target.id !== 'lead-form') return;
  e.preventDefault();
  const f = e.target;
  const nome = f.nome.value.trim();
  const email = f.email.value.trim();
  if (!nome || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    f.classList.add('shake');
    setTimeout(() => f.classList.remove('shake'), 500);
    return;
  }
  state.lead = { nome, email };
  renderLoading();
  setTimeout(renderResult, 2200);
});

/* start */
renderIntro();
