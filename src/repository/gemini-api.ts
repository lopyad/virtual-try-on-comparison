import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export default class GeminiApi {
    private ai: GoogleGenAI;
    constructor(){
        if(!GEMINI_API_KEY){
            throw new Error('Missing required environment variables: GEMINI_API_KEY');
        }
        this.ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    }

    async sendMessage(prompt: string){
        const response = await this.ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });
        console.log(response.text);
    }

    async generateImage(prompt: string){
        const response = await this.ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
            numberOfImages: 1,
            },
        });
        

        if(!response.generatedImages){
            throw new Error();
        }
        let idx = 1;
        for(const generatedImage of response.generatedImages){
            let imgBytes = generatedImage.image!.imageBytes;
            const buffer = Buffer.from(imgBytes!, "base64");
            fs.writeFileSync(`imagen-${idx}.png`, buffer);
            idx++;
        }
    }
}