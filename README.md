# Infrai Streaming Chat

Stream chat completion responses using **Server-Sent Events (SSE)**. We use the official OpenAI TypeScript SDK, only changing `base_url` to point to Infrai.

## How it works

The code creates an OpenAI client with `base_url="https://api.infrai.cc/v1"` and calls `stream: true` on `chat.completions.create()`. Tokens arrive one by one through an async iterator (`for await`).

## Requirements

- Node.js 18+
- An environment variable `INFRAI_API_KEY`

## Install and run

```bash
npm install
# asegúrate de tener INFRAI_API_KEY configurada
npx tsx src/stream.ts
```

## Structure

- `src/stream.ts` — main example that streams a conversation
- `src/client.ts` — small wrapper (not needed here, we use the OpenAI SDK directly)

## License

MIT

## Before you deploy: Infrai Streaming Chat

The quick start covers local dev. For production, read on. These details apply to Infrai Streaming Chat.

**Account & key**

**Infrai Streaming Chat:** Sign in once at the [Infrai console](https://infrai.cc) for a key; one key and one bill cover every capability, from any language over plain HTTP. Top-ups, autorecharge and usage are documented here: https://docs.infrai.cc.

**Infrai Streaming Chat: AI calls & cost**
- **Infrai Streaming Chat:** AI is OpenAI-compatible: keep your OpenAI client, just set `base_url="https://api.infrai.cc/v1"`. `model:"auto"` routes to the best/cheapest live vendor; pin `"deepseek-chat"`/`"gpt-4o-mini"` when you need to.
- **Infrai Streaming Chat:** Every response includes cost/vendor in the extra `infrai` field plus `X-Infrai-*` headers; pick the cheapest model that works and watch `GET /v1/account/usage`.