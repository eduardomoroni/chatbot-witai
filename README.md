# chatbot-witai

## Rodando localmente
- git clone
- npm install
- npm run hubot

### Variaveis de ambiente
Voce precisará criar um arquivo `.env` após clonar o repositório, na pasta raiz do projeto e adicionar
```
HUBOT_LOG_LEVEL=debug
FB_WEBHOOK_BASE=<BASE_URL>
FB_PAGE_ID=<ID>
WIT_SERVER_TOKEN=<ACCESS_TOKEN>
TOKEN=<GITTER TOKEN>
FB_APP_ID=<APP ID>
FB_APP_SECRET=<APP SECRET>
FB_PAGE_TOKEN=<PAGE TOKEN>
FB_VERIFY_TOKEN=<VERIFICATION TOKEN>
TELEGRAM_TOKEN=<TOKEN>
```

## Configurando seu próprio bot
Se quiser configurar seu próprio bot e não tiver as variáveis acima, siga 
[este guia para usar no facebook](https://github.com/chen-ye/hubot-fb/blob/master/INSTALL.md), e/ou  
[este guia para usar no gitter](https://github.com/kcjpop/hubot-gitter), e/ou  
[este guia para usar no telegram](https://github.com/lukefx/hubot-telegram).
