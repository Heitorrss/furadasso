const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Na Escola Estadual do Campo de Ivaína, o professor passa um projeto sobre como melhorar a produção das propriedades da nossa região de forma sustentável. Qual é a sua primeira ideia, Guilhermino?",
        alternativas: [
            {
                texto: "Apostar na agroecologia, adubação verde e manejo orgânico sem veneno.",
                afirmacao: "Você escolheu defender a saúde da terra e da comunidade de Ivaína através de práticas agroecológicas sustentáveis."
            },
            {
                texto: "Investir na modernização com maquinário pesado e defensivos químicos tradicionais.",
                afirmacao: "Sua linha de pensamento focou na alta produtividade imediata e na mecanização pesada da lavoura."
            }
        ]
    },
    {
        enunciado: "Para organizar as propostas dos alunos, a escola do campo convoca uma feira agrícola comunitária. O pessoal quer decidir como os pequenos produtores devem vender seus produtos. O que você sugere?",
        alternativas: [
            {
                texto: "Montar uma cooperativa local para vender direto nas feiras da região e no PNAE (alimentação escolar).",
                afirmacao: "Ao apoiar o cooperativismo, você fortaleceu a união entre os vizinhos e garantiu renda justa para a agricultura familiar."
            },
            {
                texto: "Vender a produção em grande escala para atravessadores e grandes redes de supermercados de fora.",
                afirmacao: "Você optou pela praticidade de repassar a produção para grandes comércios, focando no volume de vendas."
            }
        ]
    },
    {
        enunciado: "Chega o momento de debater o uso da tecnologia na nossa realidade rural em Ivaína. As ferramentas digitais devem entrar forte no campo?",
        alternativas: [
            {
                texto: "Sim! Devemos usar aplicativos de previsão do tempo e sensores de irrigação para economizar água.",
                afirmacao: "Sua visão trouxe a tecnologia como uma aliada importante para otimizar os recursos naturais da nossa terra."
            },
            {
                texto: "Não. O melhor é manter a tradição, o conhecimento dos antigos e o trabalho manual que passa de pai para filho.",
                afirmacao: "Você valorizou os saberes tradicionais da comunidade, mantendo viva a cultura raiz do manejo da terra."
            }
        ]
    },
    {
        enunciado: "Para o encerramento do projeto na escola, você precisa criar um cartaz que represente a identidade de Ivaína. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Fazer desenhos manuais com tintas naturais extraídas da própria terra e de plantas locais.",
                afirmacao: "A criação artística com materiais da natureza reforçou o seu orgulho e o respeito pelas nossas origens."
            },
            {
                texto: "Usar programas de computador para desenhar um logotipo moderno e digital.",
                afirmacao: "A escolha do design digital mostrou que a juventude do campo está conectada com as linguagens modernas."
            }
        ]
    },
    {
        enunciado: "O relatório final do projeto do grupo ficou pronto, mas foi gerado automaticamente por um aplicativo de inteligência artificial. O texto está correto, mas não cita a história do povo daqui. Como você resolve isso?",
        alternativas: [
            {
                texto: "Deixa como está. O importante é a nota e o texto feito pelo aplicativo parece mais profissional.",
                afirmacao: "No fim das contas, a pressa fez com que a identidade real de Ivaína ficasse de fora do papel oficial."
            },
            {
                texto: "Reescreve os parágrafos, colocando os causos, as dificuldades e a realidade que só quem vive em Ivaína conhece.",
                afirmacao: "Você provou que nenhuma máquina substitui o coração e a vivência de quem trabalha na terra. O relatório final teve a cara da nossa escola!"
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Projeto Concluído! O futuro de Ivaína...";
    textoResultado.textContent = "Resumo da sua jornada, Guilhermino: " + historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();