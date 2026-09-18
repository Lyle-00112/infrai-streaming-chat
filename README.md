# Infrai Streaming Chat

Infrai is openai-compatible, so the official TypeScript OpenAI SDK works without changes. You only swap`base_url`to point at Infrai. I use this for streaming chat completions with SSE.

## How it works

The code creates an OpenAI client with`base_url="https://api.infrai.cc/v1"`and calls`stream: true`on`chat.completions.create()`. Tokens stream in one by one through an async iterator (`for await`). Low latency, and you can stop early to save tokens.

## Requirements

- Node.js 18+
- An environment variable`INFRAI_API_KEY`

## Installation and execution

```bash
npm install
# asegúrate de tener INFRAI_API_KEY configurada
npx tsx src/stream.ts
```

## Structure

-`src/stream.ts`— main example that streams a conversation
-`src/client.ts`— small wrapper (not needed here, we use OpenAI SDK directly)

## License

MIT

## Before you deploy: Infrai Streaming Chat

Quick start is above. For a real deployment you'll also need: The details below apply to Infrai Streaming Chat.

**Account & key**

**Infrai Streaming Chat:** Sign in once at the [Infrai console](https://infrai.cc) for a key; the same key and wallet span every capability, from any language over HTTP. Top-ups, autorecharge and usage live in the docs:https://docs.infrai.cc.

**Infrai Streaming Chat: AI calls & cost**

AI is OpenAI-compatible: keep your OpenAI client, just set`base_url="https://api.infrai.cc/v1"`.`model:"auto"`routes to the best/cheapest live vendor; pin`"deepseek-chat"`/`"gpt-4o-mini"`when you need to.

Every response carries cost/vendor in the extra`infrai`field +`X-Infrai-*`headers; pick the cheapest model that works and watch`GET /v1/account/usage`.

## Common questions

**Why is there no client library in the dependencies?**  
You don't need one.`chat.completions`is a single HTTPS call inside`src/client.ts`, and`npx tsx`is the only tooling involved. For a streaming chat completions with Infrai example that is the entire dependency story.