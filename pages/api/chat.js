export default async function handler(req, res) {
    const { messages } = req.body;
  
    console.log('API KEY LOADED:', process.env.OPENAI_API_KEY); // ✅ Check if the key is working
  
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages.map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content,
        })),
        temperature: 0.5,
      }),
    });
  
    const data = await response.json();
  
    console.log('OpenAI response:', data); // ✅ See what the AI says back
  
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I had trouble answering that.';
    res.status(200).json({ response: reply });
  }
  