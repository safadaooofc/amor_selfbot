# Discord Selfbot Romântico

Este é um selfbot para Discord que envia mensagens românticas aleatórias para um usuário específico a cada 4 horas.

**AVISO IMPORTANTE:** O uso de selfbots é contra os Termos de Serviço do Discord e pode resultar no encerramento da sua conta. Use por sua própria conta e risco.

## Requisitos

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Configuração

1.  **Clone este repositório (ou crie os arquivos manualmente):**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd discord-selfbot
    ```

2.  **Instale as dependências:**

    ```bash
    npm install discord.js-selfbot-v13
    ```

3.  **Obtenha seu Token de Usuário:**

    -   Abra o Discord no seu navegador (não no aplicativo de desktop).
    -   Pressione `Ctrl + Shift + I` (Windows/Linux) ou `Cmd + Option + I` (macOS) para abrir as Ferramentas do Desenvolvedor.
    -   Vá para a aba `Application` (ou `Aplicativo`).
    -   No menu lateral esquerdo, expanda `Local Storage` e clique no item relacionado ao Discord (geralmente `https://discord.com`).
    -   Procure por uma chave chamada `token`. O valor associado a ela é o seu token de usuário. Ele estará entre aspas duplas e começará com `"mfa.` ou similar. **Copie este valor com cuidado, sem as aspas.**

4.  **Obtenha seu ID de Usuário:**

    -   No Discord, vá em `Configurações de Usuário` > `Avançado` e ative o `Modo Desenvolvedor`.
    -   Clique com o botão direito do mouse no seu próprio nome de usuário (em qualquer lugar do Discord) e selecione `Copiar ID`.

5.  **Edite o arquivo `index.js`:**

    Abra o arquivo `index.js` e substitua os placeholders:

    ```javascript
    const USER_TOKEN = 'YOUR_USER_TOKEN_HERE'; // Substitua pelo seu token de usuário
    const TARGET_USER_ID = 'YOUR_USER_ID_HERE'; // Substitua pelo seu ID de usuário
    ```

    Pelo seu token e ID, respectivamente.

6.  **Personalize as Mensagens (Opcional):**

    Você pode editar a lista `romanticMessages` no arquivo `index.js` para adicionar ou remover mensagens e poemas.

## Como Executar

Para iniciar o bot, execute o seguinte comando no terminal, dentro da pasta `discord-selfbot`:

```bash
node index.js
```

O bot começará a enviar mensagens automaticamente a cada 4 horas. Você verá logs no console confirmando o login e o envio das mensagens.

## Tratamento de Erros

O código inclui um bloco `try-catch` para lidar com erros durante o envio de mensagens. Erros serão logados no console, mas o bot continuará tentando enviar mensagens nos intervalos programados.


