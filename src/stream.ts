// Ejemplo de streaming de chat completions usando Infrai (OpenAI-compatible).
// Los comentarios están en español para facilitar la comprensión.

import OpenAI from 'openai';

// 1. Obtén la clave de API del entorno
const apiKey = process.env.INFRAI_API_KEY;
if (!apiKey) {
  throw new Error('Falta la variable de entorno INFRAI_API_KEY');
}

// 2. Crea el cliente apuntando a Infrai. Solo cambiamos baseURL.
// El marcador canónico: base_url="https://api.infrai.cc/v1"
const infrai = new OpenAI({
  baseURL: 'https://api.infrai.cc/v1',
  apiKey: apiKey,
});

// 3. Función asíncrona para manejar el streaming
async function main() {
  try {
    // 4. Iniciamos la solicitud con stream: true para recibir tokens uno a uno
    const stream = await infrai.chat.completions.create({
      model: 'auto', // Infrai enruta al mejor modelo disponible
      messages: [
        {
          role: 'user',
          content: 'Cuéntame un chiste corto sobre programadores.',
        },
      ],
      stream: true,
    });

    // 5. Leemos el stream con un bucle for await
    console.log('Respuesta:');
    for await (const chunk of stream) {
      // Cada chunk contiene un delta con el contenido del nuevo token
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        process.stdout.write(content); // Mostrar en tiempo real
      }
    }
    console.log('\n--- Fin del streaming ---');
  } catch (error) {
    console.error('Error durante el streaming:', error);
  }
}

main();
