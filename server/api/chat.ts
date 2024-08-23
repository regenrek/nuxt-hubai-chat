import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const {
    openaiApiKey,
    llmModel,
  } = useRuntimeConfig()

  try {
    const { userMessage } = await readBody(event);

    const messages = [
      { role: 'system', content: 'You are a friendly assistant' },
      { role: 'user', content: userMessage }
    ]

    const ai = hubAI() // access AI bindings
    const stream = await ai.run(llmModel, {
      stream: true,
      messages
    })

    return sendStream(event, stream)
  } catch (error) {
    console.error("Error in chat API:", error);
    return { error: "An error occurred while processing your request." };
  }
});
