import { aleatorio, nome } from './aleatorio.js';

export const perguntas = [
    {
        enunciado: `Assim que saiu da escola você depara com uma nova tecnologia, um chat que responde tudo que alguém pergunta, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de ${nome}?`,
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: `Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA na sala de aula. Qual atitude você toma?`,
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi a pesquisa e escrita. Nessa conversa você é solicitado a opinar sobre o futuro do trabalho com o avanço da IA. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar grupos de discussão sobre ética e impacto social da IA."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o seu sentimento em relação à IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de imagens usando geradores de IA!"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem tradicional como o Paint.",
                afirmacao: "Notou que muitas pessoas ainda têm dificuldade em desenhar no computador e optou por métodos tradicionais."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer o uso da IA para fazer o trabalho. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Escrever o trabalho com base na IA é um bom caminho, pois economiza tempo e ajuda a entregar no prazo.",
                afirmacao: "Infelizmente passou a depender totalmente da IA para fazer suas tarefas."
            },
            {
                texto: "A IA pode ser um meio de pesquisa, mas não deve resumir todo o trabalho, por isso refaz o trabalho para garantir originalidade.",
                afirmacao: "Percebeu que a IA deve ser usada como ferramenta e não como substituta da criatividade humana."
            }
        ]
    }
];
