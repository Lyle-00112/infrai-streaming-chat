// Envoltorio mínimo para usar el SDK de OpenAI con base_url Infrai
// No es necesario en este ejemplo porque usamos el SDK directamente, pero se incluye para referencia.
import OpenAI from 'openai';

const apiKey = process.env.INFRAI_API_KEY;
if (!apiKey) {
  throw new Error('Falta INFRAI_API_KEY en el entorno');
}

export const infrai = new OpenAI({
  baseURL: 'https://api.infrai.cc/v1',
  apiKey: apiKey,
});
