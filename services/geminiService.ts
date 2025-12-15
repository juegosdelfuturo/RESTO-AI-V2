import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Helper to simulate a delay for natural feeling
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const sendMessageToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      // Fallback for demo purposes if no key is present in environment
      await delay(1000);
      return "Para probar la demo interactiva real, por favor configura tu API Key de Gemini. Mientras tanto, soy una simulación: ¿En qué fecha te gustaría reservar?";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Construct chat history for context
    // We limit history to keeping it lightweight for the demo
    const systemInstruction = `
      Actúa como "RestoAI", un asistente virtual avanzado para un restaurante de alta cocina llamado "Luminary".
      Tu objetivo es gestionar una reserva.
      1. Sé breve, amable y profesional.
      2. Pregunta por: número de personas, fecha y hora.
      3. Si el usuario da los datos, confirma la reserva simulada.
      4. Si preguntan qué eres, di que eres una IA capaz de responder llamadas y WhatsApps automáticamente.
      5. Mantén las respuestas cortas (menos de 40 palabras).
    `;

    const model = ai.models;
    
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: newMessage }]
        }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, no pude procesar eso. ¿Podrías repetirlo?";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Lo siento, hubo un error de conexión con la IA. Por favor intenta de nuevo.";
  }
};