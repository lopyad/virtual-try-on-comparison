import { ApiError } from '../types/errors/error';
import Repository from '../repository/repository';
import * as fs from 'fs';

export default class Service {
  constructor(private readonly repository: Repository){}

  async performTryOn(encodedUserImage: string, encodedProductImage: string): Promise<string> {
    if (!encodedUserImage || !encodedProductImage) {
      throw new Error('User image and garment image URIs are required.');
    }

    try{
      const result = await this.repository.googleApi.predict(encodedUserImage, encodedProductImage);

      const outputImage = result.predictions[0]?.bytesBase64Encoded;
      if (outputImage) {
        fs.writeFileSync('output.png', Buffer.from(outputImage, 'base64'));
        console.log('Generated image saved to output.png');
        return outputImage;
      } else {
        console.error('Prediction result did not contain an output image.', result);
        throw new Error('Failed to generate image from prediction.');
      }
    } 
    catch(e) {
      if(e instanceof ApiError){
        console.log(`[Service] ${e.message}`);
        throw e;
      }
      throw e;
    }
  }

  async readImage(encodedImage: string): Promise<void> {
    await this.repository.vertexApi.generateContentWithImage("사진을 설명해줘", encodedImage);
  }
}