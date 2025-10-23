import VtoApi from "./google-vto";
import VertextAiApi from "./imagen-api";

export default class Repository {
  vtoApi: VtoApi
  vertexApi: VertextAiApi
  constructor() {
    this.vtoApi = new VtoApi();
    this.vertexApi = new VertextAiApi();
  }
}