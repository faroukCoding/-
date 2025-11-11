
import React, { useState, useRef, useEffect } from 'react';
import { getAiChat } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'أهلاً بك في مدرسة الفجر الدولية! كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chat = getAiChat();
      const stream = await chat.sendMessageStream({ message: input });
      
      let modelResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        modelResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = modelResponse;
          return newMessages;
        });
      }

    } catch (error) {
      console.error("AI Assistant Error:", error);
      const errorMsg = { role: 'model', text: 'عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.' } as Message;
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage.role === 'model' && lastMessage.text === '') {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = errorMsg;
          return newMessages;
        }
        return [...prev, errorMsg];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 bg-brand-blue text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-50 transform hover:scale-110 transition-transform duration-300"
        aria-label="افتح المساعد الذكي"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      <div className={`fixed bottom-24 left-6 w-full max-w-sm bg-white rounded-lg shadow-2xl z-50 transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="bg-brand-blue text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-bold text-lg">المساعد الذكي</h3>
          <button onClick={() => setIsOpen(false)} aria-label="أغلق المساعد الذكي">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div ref={chatContainerRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-brand-light">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-brand-gold text-brand-blue rounded-br-none shadow-md' : 'bg-white text-brand-gray rounded-bl-none shadow'}`}>
                <p className="whitespace-pre-wrap font-cairo text-base">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length-1].text === '' && (
            <div className="flex justify-start">
              <div className="bg-white text-brand-gray px-4 py-2 rounded-2xl rounded-bl-none shadow">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اسأل عن المدرسة..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
            disabled={isLoading}
          />
          <button type="submit" className="mr-3 bg-brand-blue text-white p-2 rounded-full disabled:bg-gray-400" disabled={isLoading || !input.trim()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default AiAssistant;
