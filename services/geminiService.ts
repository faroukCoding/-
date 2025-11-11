
import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
let chat: Chat | null = null;

export async function generateCurriculumDescription(subject: string): Promise<string> {
  const prompt = `
    صف بإيجاز وشكل جذاب المنهج الدراسي لمادة "${subject}" في مدرسة دولية خاصة مرموقة اسمها "مدرسة الفجر الدولية".
    ركز على التعلم التفاعلي والتفكير النقدي وإعداد الطلاب للمستقبل.
    اجعل الوصف في فقرة واحدة أنيقة ومحترفة.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    return response.text;
  } catch (error) {
    console.error("Error generating curriculum description:", error);
    return "عذرًا، حدث خطأ أثناء إنشاء الوصف. يرجى المحاولة مرة أخرى.";
  }
}

export function getAiChat(): Chat {
    if (chat) {
        return chat;
    }
    
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `أنت مساعد ذكاء اصطناعي ودود ومتعاون لمدرسة الفجر الدولية. 
            مهمتك هي الإجابة على أسئلة أولياء الأمور والطلاب المحتملين حول المدرسة.
            معلومات عن المدرسة:
            - الاسم: مدرسة الفجر الدولية.
            - المنهج: عالمي، يركز على التفكير النقدي والتميز الأكاديمي.
            - هيئة التدريس: نخبة من المعلمين ذوي الخبرة.
            - المرافق: حديثة ومجهزة بأحدث التقنيات.
            - القبول: يمكن حجز جولة تعريفية من خلال نموذج على الموقع.
            - الموقع: مدينة التعليم، الرياض، المملكة العربية السعودية.
            كن موجزًا ومحترفًا في إجاباتك باللغة العربية. إذا سئلت عن شيء لا تعرفه، قل بأدب أنك لا تملك هذه المعلومة واقترح عليهم الاتصال بالمدرسة مباشرة عبر البريد الإلكتروني info@alfajrschool.edu.`,
        },
    });
    return chat;
}
