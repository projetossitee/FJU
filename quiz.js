/* ===========================
   QUIZ BÍBLICO — FJU
   Difícil | 60 perguntas
   - Embaralha perguntas e opções
   - Mostra referência bíblica no feedback
=========================== */

/* Função utilitária para embaralhar */
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

/* Perguntas: question, options[4], answer(idx), ref */
let questions = [
  {
    question: "Quem foi lançado na cova dos leões?",
    options: ["Moisés", "Daniel", "José", "Paulo"],
    answer: 1,
    ref: "Daniel 6:16-23"
  },
  {
    question: "Em qual cidade os discípulos foram chamados de ‘cristãos’ pela primeira vez?",
    options: ["Jerusalém", "Antioquia", "Éfeso", "Corinto"],
    answer: 1,
    ref: "Atos 11:26"
  },
  {
    question: "Qual profeta teve a visão do vale de ossos secos?",
    options: ["Isaías", "Ezequiel", "Jeremias", "Daniel"],
    answer: 1,
    ref: "Ezequiel 37:1-10"
  },
  {
    question: "Qual rei recebeu como sinal o recuo da sombra no relógio de sol?",
    options: ["Ezequias", "Acabe", "Saul", "Joás"],
    answer: 0,
    ref: "2 Reis 20:8-11"
  },
  {
    question: "Quem pediu sabedoria a Deus e também recebeu riquezas e honra?",
    options: ["Davi", "Salomão", "Samuel", "Josué"],
    answer: 1,
    ref: "1 Reis 3:9-13"
  },
  {
    question: "Quem era o sacerdote quando Samuel ouviu a voz de Deus ainda menino?",
    options: ["Abiatar", "Eli", "Zadoque", "Nadabe"],
    answer: 1,
    ref: "1 Samuel 3:1-9"
  },
  {
    question: "O ‘Shema’ (“Ouve, Israel…”) aparece em qual passagem?",
    options: ["Deuteronômio 6:4-5", "Êxodo 20:1-3", "Levítico 19:2", "Números 6:24-26"],
    answer: 0,
    ref: "Deuteronômio 6:4-5"
  },
  {
    question: "Quem batizou o eunuco etíope?",
    options: ["Pedro", "João", "Filipe", "Paulo"],
    answer: 2,
    ref: "Atos 8:26-39"
  },
  {
    question: "Qual igreja é chamada de morna no Apocalipse?",
    options: ["Éfeso", "Pérgamo", "Laodiceia", "Sardes"],
    answer: 2,
    ref: "Apocalipse 3:14-16"
  },
  {
    question: "Quem adormeceu na janela e caiu do terceiro andar enquanto Paulo pregava?",
    options: ["Trófimo", "Êutico", "Tíquico", "Málquio"],
    answer: 1,
    ref: "Atos 20:9-10"
  },
  {
    question: "Quem foi a mãe de João Batista?",
    options: ["Marta", "Elisabete", "Maria", "Ana"],
    answer: 1,
    ref: "Lucas 1:5-13,57-60"
  },
  {
    question: "Quem foi o primeiro mártir da Igreja?",
    options: ["Tiago", "Estevão", "João", "André"],
    answer: 1,
    ref: "Atos 7:54-60"
  },
  {
    question: "Qual rainha intercedeu pelo povo judeu diante do rei?",
    options: ["Atalia", "Ester", "Bate-Seba", "Jezabel"],
    answer: 1,
    ref: "Ester 4–7"
  },
  {
    question: "Quem cortou a orla do manto de Saul na caverna de En-Gedi?",
    options: ["Abisai", "Joabe", "Davi", "Jônatas"],
    answer: 2,
    ref: "1 Samuel 24:3-7"
  },
  {
    question: "Qual juíza liderou Israel com Baraque contra Sísera?",
    options: ["Débora", "Jael", "Miriã", "Hulda"],
    answer: 0,
    ref: "Juízes 4–5"
  },
  {
    question: "Qual era o nome do sogro de Moisés?",
    options: ["Labão", "Jetro", "Quis", "Naor"],
    answer: 1,
    ref: "Êxodo 3:1"
  },
  {
    question: "Qual profeta se casou com Gômer como sinal profético?",
    options: ["Oséias", "Malaquias", "Ageu", "Sofonias"],
    answer: 0,
    ref: "Oséias 1:2-3"
  },
  {
    question: "Qual apóstolo era cobrador de impostos?",
    options: ["Pedro", "Mateus", "Filipe", "Bartolomeu"],
    answer: 1,
    ref: "Mateus 9:9"
  },
  {
    question: "Quem causou a separação entre Paulo e Barnabé?",
    options: ["Marcos", "Silas", "Tito", "Demas"],
    answer: 0,
    ref: "Atos 15:36-40"
  },
  {
    question: "Em qual passagem Paulo descreve a ‘armadura de Deus’?",
    options: ["Romanos 8", "Efésios 6:10-18", "Gálatas 5", "Colossenses 3"],
    answer: 1,
    ref: "Efésios 6:10-18"
  },
  {
    question: "Quem teve a visão de um lençol descendo do céu com animais?",
    options: ["Pedro", "João", "Tiago", "Cornélio"],
    answer: 0,
    ref: "Atos 10:9-16"
  },
  {
    question: "Quem orou e não choveu por três anos e seis meses?",
    options: ["Elias", "Eliseu", "Jeremias", "Miqueias"],
    answer: 0,
    ref: "Tiago 5:17; 1 Reis 17:1"
  },
  {
    question: "Qual nazireu recebeu força extraordinária desde o ventre?",
    options: ["Samuel", "Sansão", "João Batista", "Absalão"],
    answer: 1,
    ref: "Juízes 13:3-5"
  },
  {
    question: "Quem foi escolhido para substituir Judas Iscariotes?",
    options: ["Justo", "Matias", "Barnabé", "Silas"],
    answer: 1,
    ref: "Atos 1:23-26"
  },
  {
    question: "Tradicionalmente, quem é associado como autor de Lamentações?",
    options: ["Ezequiel", "Jeremias", "Isaías", "Ageu"],
    answer: 1,
    ref: "Lamentações 1:1 (tradição judaica atribui a Jeremias)"
  },
  {
    question: "Qual profeta confrontou Davi após o pecado com Bate-Seba?",
    options: ["Gade", "Natã", "Elias", "Eliseu"],
    answer: 1,
    ref: "2 Samuel 12:1-7"
  },
  {
    question: "Quem restaurou o altar no Carmelo e orou fogo do céu?",
    options: ["Eliseu", "Elias", "Samuel", "Moisés"],
    answer: 1,
    ref: "1 Reis 18:30-39"
  },
  {
    question: "Qual é o salmo mais longo da Bíblia?",
    options: ["Salmo 78", "Salmo 117", "Salmo 119", "Salmo 23"],
    answer: 2,
    ref: "Salmo 119"
  },
  {
    question: "Melquisedeque era rei de qual cidade?",
    options: ["Hebrom", "Salém", "Betel", "Sodoma"],
    answer: 1,
    ref: "Gênesis 14:18"
  },
  {
    question: "Qual juiz era canhoto e matou Eglom, rei de Moabe?",
    options: ["Gideão", "Jefté", "Sansão", "Eúde"],
    answer: 3,
    ref: "Juízes 3:15-22"
  },
  {
    question: "Quem comeu um rolo (livro) que era doce como mel?",
    options: ["Ezequiel", "Jeremias", "João (Apocalipse)", "Isaías"],
    answer: 0,
    ref: "Ezequiel 3:1-3"
  },
  {
    question: "Quem pediu sinais com o velo (lã) para confirmar a vontade de Deus?",
    options: ["Gideão", "Jefté", "Saul", "Asa"],
    answer: 0,
    ref: "Juízes 6:36-40"
  },
  {
    question: "De qual tribo Paulo era descendente?",
    options: ["Levi", "Judá", "Benjamim", "Issacar"],
    answer: 2,
    ref: "Filipenses 3:5"
  },
  {
    question: "Lídia, convertida em Filipos, era natural de qual cidade?",
    options: ["Tiatira", "Pérgamo", "Esmirna", "Laodiceia"],
    answer: 0,
    ref: "Atos 16:14"
  },
  {
    question: "De quem a sombra chegou a curar enfermos, segundo Atos?",
    options: ["Pedro", "Paulo", "Tiago", "João"],
    answer: 0,
    ref: "Atos 5:15"
  },
  {
    question: "Em qual Evangelho está o Sermão do Monte (Mateus 5–7)?",
    options: ["Marcos", "Lucas", "Mateus", "João"],
    answer: 2,
    ref: "Mateus 5–7"
  },
  {
    question: "‘Fruto do Espírito’ aparece onde?",
    options: ["Romanos 12", "Gálatas 5:22-23", "Efésios 4", "Colossenses 3"],
    answer: 1,
    ref: "Gálatas 5:22-23"
  },
  {
    question: "Neemias servia ao rei de qual império quando pediu para reconstruir Jerusalém?",
    options: ["Nabucodonosor", "Artaxerxes", "Ciro", "Dario I"],
    answer: 1,
    ref: "Neemias 2:1-5"
  },
  {
    question: "Quem sonhou com uma grande estátua de metais diferentes?",
    options: ["Daniel", "Nabucodonosor", "Belsazar", "Faraó"],
    answer: 1,
    ref: "Daniel 2:31-35"
  },
  {
    question: "Qual profeta era boieiro e veio de Tecoa?",
    options: ["Amós", "Obadias", "Malaquias", "Ageu"],
    answer: 0,
    ref: "Amós 1:1; 7:14-15"
  },
  {
    question: "A sogra de qual apóstolo foi curada por Jesus?",
    options: ["Pedro", "André", "Tiago", "Filipe"],
    answer: 0,
    ref: "Mateus 8:14-15"
  },
  {
    question: "Quem era chamado de ‘filho da consolação’?",
    options: ["Barnabé", "Tito", "Timóteo", "Silas"],
    answer: 0,
    ref: "Atos 4:36"
  },
  {
    question: "Depois de Sara, quem foi a outra esposa de Abraão?",
    options: ["Quetura", "Raquel", "Hagare", "Mical"],
    answer: 0,
    ref: "Gênesis 25:1"
  },
  {
    question: "Quem morreu ao tocar a arca de Deus durante o transporte?",
    options: ["Uzias", "Uzá", "Urias", "Uziel"],
    answer: 1,
    ref: "2 Samuel 6:6-7"
  },
  {
    question: "Quem tinha quatro filhas que profetizavam?",
    options: ["Felipe (o evangelista)", "Cornélio", "Tiago", "Priscila"],
    answer: 0,
    ref: "Atos 21:8-9"
  },
  {
    question: "Em qual monte Elias ouviu a ‘voz mansa e suave’?",
    options: ["Carmelo", "Tabor", "Horebe (Sinaí)", "Moriá"],
    answer: 2,
    ref: "1 Reis 19:8-13"
  },
  {
    question: "Qual rei encontrou o ‘Livro da Lei’ durante a reforma do templo?",
    options: ["Ezequias", "Josias", "Manassés", "Joaquim"],
    answer: 1,
    ref: "2 Reis 22:8-13"
  },
  {
    question: "Quem viu ‘rodas dentro de rodas’ na visão?",
    options: ["Ezequiel", "Daniel", "Isaías", "Zacarias"],
    answer: 0,
    ref: "Ezequiel 1:15-21"
  },
  {
    question: "Quem foi picado por uma víbora em Malta e nada sofreu?",
    options: ["Pedro", "Paulo", "Lucas", "Barnabé"],
    answer: 1,
    ref: "Atos 28:3-6"
  },
  {
    question: "Qual discípulo apresentou ao Mestre o rapaz com cinco pães e dois peixes?",
    options: ["Filipe", "André", "Tomé", "Bartolomeu"],
    answer: 1,
    ref: "João 6:8-9"
  },
  {
    question: "Qual carta declara que ‘a fé sem obras é morta’?",
    options: ["Romanos", "Gálatas", "Tiago", "Hebreus"],
    answer: 2,
    ref: "Tiago 2:17"
  },
  {
    question: "Qual é o livro mais curto do Novo Testamento em número de versículos?",
    options: ["2 João", "3 João", "Judas", "Filemom"],
    answer: 0,
    ref: "2 João (13 versículos)"
  },
  {
    question: "‘O Senhor é meu pastor’ é o início de qual salmo?",
    options: ["Salmo 1", "Salmo 23", "Salmo 84", "Salmo 91"],
    answer: 1,
    ref: "Salmo 23:1"
  },
  {
    question: "Quem circuncidou o filho usando uma pedra afiada para livrar Moisés?",
    options: ["Miriã", "Zípora", "Rebeca", "Raquel"],
    answer: 1,
    ref: "Êxodo 4:24-26"
  },
  {
    question: "Quem ouviu a defesa de Paulo dizendo ‘Quase me persuades a ser cristão’?",
    options: ["Festo", "Félix", "Agripa", "Cláudio Lisias"],
    answer: 2,
    ref: "Atos 26:28 (trad. clássicas)"
  },
  {
    question: "Em quais línguas estava a inscrição na cruz de Jesus?",
    options: ["Hebraico, Latim e Grego", "Aramaico e Latim", "Grego e Latim", "Hebraico e Aramaico"],
    answer: 0,
    ref: "João 19:20"
  },
  {
    question: "Quem intercedeu por Sodoma e Gomorra?",
    options: ["Lot", "Abraão", "Melquisedeque", "Noé"],
    answer: 1,
    ref: "Gênesis 18:22-33"
  },
  {
    question: "Qual sumo sacerdote interrogou Jesus segundo os Evangelhos?",
    options: ["Anás", "Caifás", "Zacarias", "Ismael"],
    answer: 1,
    ref: "Mateus 26:57"
  },
  {
    question: "Quais os nomes hebraicos de Sadraque, Mesaque e Abede-Nego?",
    options: ["Hananias, Misael e Azarias", "Azarias, Eliaquim e Misael", "Hananias, Urias e Micaías", "Micaías, Azarias e Urias"],
    answer: 0,
    ref: "Daniel 1:6-7"
  },
  {
    question: "‘O justo viverá pela fé’ aparece primeiro em qual livro?",
    options: ["Romanos", "Habacuque", "Gálatas", "Hebreus"],
    answer: 1,
    ref: "Habacuque 2:4"
  },
  {
    question: "Quem tomou o menino Jesus nos braços e o bendisse no templo?",
    options: ["Zacarias", "Simeão", "Nicodemos", "José de Arimateia"],
    answer: 1,
    ref: "Lucas 2:25-35"
  },
  {
    question: "Em qual rio Naamã mergulhou para ser curado da lepra?",
    options: ["Eufrates", "Jaboque", "Jordão", "Abana"],
    answer: 2,
    ref: "2 Reis 5:10-14"
  },
  {
    question: "Qual profeta anunciou o sinal do Emanuel?",
    options: ["Jeremias", "Malaquias", "Isaías", "Zacarias"],
    answer: 2,
    ref: "Isaías 7:14"
  },
  {
    question: "Quem enfrentou leão e urso antes de lutar contra Golias?",
    options: ["Sansão", "Davi", "Saul", "Jônatas"],
    answer: 1,
    ref: "1 Samuel 17:34-36"
  },
  {
    question: "Quem era a sogra e mentora de Rute?",
    options: ["Noemi", "Ester", "Raquel", "Ana"],
    answer: 0,
    ref: "Rute 1:1-5; 2:22"
  },
  {
    question: "Quem escreveu o livro de Atos dos Apóstolos?",
    options: ["Paulo", "Pedro", "Lucas", "Marcos"],
    answer: 2,
    ref: "Atos 1:1; Lucas 1:1-4"
  },
  {
    question: "Para qual cidade Saulo se dirigia quando teve o encontro com Jesus?",
    options: ["Damasco", "Jerusalém", "Antioquia", "Tarso"],
    answer: 0,
    ref: "Atos 9:1-6"
  },
  {
    question: "Quem foi o primeiro rei de Israel?",
    options: ["Saul", "Davi", "Salomão", "Isbosete"],
    answer: 0,
    ref: "1 Samuel 10:1, 24"
  },
  {
    question: "Quantas pessoas foram salvas na arca de Noé?",
    options: ["6", "8", "10", "12"],
    answer: 1,
    ref: "1 Pedro 3:20; Gênesis 7:7"
  },
  {
    question: "Quem cedeu o túmulo para sepultar Jesus?",
    options: ["Nicodemos", "José de Arimateia", "Simão Cireneu", "Gamaliel"],
    answer: 1,
    ref: "Mateus 27:57-60"
  },
  {
    question: "Quem interpretou a escrita na parede ‘Menê, Menê, Tequel e Parsim’?",
    options: ["Daniel", "Ezequiel", "Jeremias", "Ageu"],
    answer: 0,
    ref: "Daniel 5:13-28"
  },
  {
    question: "Qual profeta repreendeu um rei e um jumenta falou no episódio?",
    options: ["Elias", "Balaão", "Natã", "Samuel"],
    answer: 1,
    ref: "Números 22:21-35"
  }
];

/* Embaralha as perguntas ao iniciar */
questions = shuffle(questions);

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

/* Carrega pergunta atual (com opções embaralhadas) */
function loadQuestion() {
  const q = questions[currentQuestion];

  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";
  feedbackElement.textContent = "";
  nextBtn.classList.add("hidden");

  // Embaralha as alternativas preservando o índice da correta
  const shuffledOptions = q.options.map((opt, i) => ({ opt, i }));
  shuffledOptions.sort(() => Math.random() - 0.5);

  shuffledOptions.forEach(({ opt, i }) => {
    const button = document.createElement("button");
    button.textContent = opt;
    button.onclick = () => checkAnswer(i);
    optionsElement.appendChild(button);
  });
}

/* Verifica resposta e exibe referência */
function checkAnswer(selected) {
  const q = questions[currentQuestion];

  if (selected === q.answer) {
    feedbackElement.textContent = `✅ Correto! (${q.ref})`;
    feedbackElement.style.color = "green";
    score++;
    scoreElement.textContent = score;
  } else {
    // Mostra também qual era a resposta correta
    const correctText = q.options[q.answer];
    feedbackElement.textContent = `❌ Errado. Correto: ${correctText} (${q.ref})`;
    feedbackElement.style.color = "red";
  }

  nextBtn.classList.remove("hidden");

  // Desabilita botões após responder
  Array.from(optionsElement.querySelectorAll("button")).forEach(b => {
    b.disabled = true;
  });
}

/* Próxima pergunta ou fim */
nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Fim do Quiz! 🎉";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Pontuação final: ${score}/${questions.length}`;
    nextBtn.classList.add("hidden");
  }
};

/* Inicializa */
loadQuestion();
