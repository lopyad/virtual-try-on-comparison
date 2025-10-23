import Controller from "../controller/controller";
import express, { Router, Request, Response } from 'express'
import cors from 'cors';
import path from 'path';

export function startServer(controller: Controller) {
  const app = express();
  const port = process.env.PORT || 3000;

  const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.CORS_ORIGIN 
      : '*',
  };
  app.use(cors(corsOptions));

  app.use(express.static(path.join(__dirname, '..', '..', 'public')));

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  app.use('/api', createRouter(controller));

  const httpServer = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

function createRouter(controller: Controller): Router{
    const router = Router();

    router.post("/google-vto", controller.perfromTryOnGoogleVto.bind(controller));
    router.post("/gemini-flash-image", controller.perfromTryOnByGeminiFlashImage.bind(controller));

    return router;
}