const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const USER_TOKEN = 'MTM4MTc5OTczMDk4MzQ2OTEwNw.GfNYKd.Dw5bOvJFdWh2TooJz3H9yPkOrTZNK9KYstoatk'; // Substitua pelo seu token de usuário
const TARGET_USER_ID = '1340435615333875757'; // Substitua pelo seu ID de usuário

const romanticMessages = [
    "Te amo com todas as forças, meu amor! luiza eu te amo",
    "Você é a luz da minha vida. luiza eu te amo ",
    "Meu coração é seu para sempre. luiza eu te amo",
    "Cada momento ao seu lado é um presente. luiza eu te amo",
    "Sua presença ilumina meus dias. luiza eu te amo",
    "Você é a melodia que embala minha alma. luiza eu te amo",
    "Meu amor por você cresce a cada dia. luiza eu te amo",
    "Em seus braços, encontro meu paraíso. luiza eu te amo",
    "Você é a estrela que guia meu caminho. luiza eu te amo",
    "Com você, a vida é um poema de amor. luiza eu te amo"
];

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const user = await client.users.fetch(TARGET_USER_ID);
    if (!user) {
        console.error('Usuário alvo não encontrado.');
        return;
    }

    // Função para enviar mensagem romântica
    const sendRomanticMessage = async () => {
        const randomIndex = Math.floor(Math.random() * romanticMessages.length);
        const message = romanticMessages[randomIndex];
        try {
            await user.send(message);
            console.log(`Mensagem enviada para ${user.tag}: ${message}`);
        } catch (error) {
            console.error(`Erro ao enviar mensagem para ${user.tag}:`, error);
        }
    };

    // Enviar mensagem a cada 4 horas (4 * 60 * 60 * 1000 milissegundos)
    setInterval(sendRomanticMessage, 4 * 60 * 60 * 1000);

    // Enviar a primeira mensagem imediatamente
    sendRomanticMessage();
});

client.login(USER_TOKEN);