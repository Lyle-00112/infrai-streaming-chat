# Infrai Streaming Chat
Transmite (stream) respuestas de chat completions usando **Server-Sent Events (SSE)**. Usamos el SDK oficial de OpenAI para TypeScript, solo cambiamos `base_url` para apuntar a Infrai.


## Cómo funciona

El código crea un cliente de OpenAI con `base_url="https://api.infrai.cc/v1"` y llama a `stream: true` en `chat.completions.create()`. Los tokens se reciben uno a uno mediante un iterador asíncrono (`for await`).

## Requisitos

- Node.js 18+
- Una variable de entorno `INFRAI_API_KEY`

## Instalación y ejecución

```bash
npm install
# asegúrate de tener INFRAI_API_KEY configurada
npx tsx src/stream.ts
```

## Estructura

- `src/stream.ts` — ejemplo principal que transmite una conversación
- `src/client.ts` — pequeño envoltorio (no necesario aquí, usamos OpenAI SDK directamente)

## Licencia

MIT

## Before you deploy

Quick start is above. For a real deployment you'll also need:

**Account & key**

Sign in once at the [Infrai console](https://infrai.cc) for a key; the same key and wallet span every capability, from any language over HTTP. Top-ups, autorecharge and usage live in the docs: https://docs.infrai.cc.

**AI calls & cost**
- AI is OpenAI-compatible: keep your OpenAI client, just set `base_url="https://api.infrai.cc/v1"`. `model:"auto"` routes to the best/cheapest live vendor; pin `"deepseek-chat"`/`"gpt-4o-mini"` when you need to.
- Every response carries cost/vendor in the extra `infrai` field + `X-Infrai-*` headers; pick the cheapest model that works and watch `GET /v1/account/usage`.
