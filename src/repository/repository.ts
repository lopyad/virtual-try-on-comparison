import GoogleApi from "./google-virtual-try-on-api.repository";
import GeminiApi from "./gemini-api";
import VertextAiApi from "./imagen-api";

export default class Repository{
    googleApi: GoogleApi
    // geminiApi: GeminiApi
    vertexApi: VertextAiApi
    constructor(){
        this.googleApi = new GoogleApi();
        // this.geminiApi = new GeminiApi();
        this.vertexApi = new VertextAiApi();
    }
}