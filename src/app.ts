import 'reflect-metadata';
import * as http from 'http';
import { Container } from 'typedi';
import { createExpressServer, useContainer } from 'routing-controllers';
import { BeerService } from './service/beer-service';
import { BeerController } from './web/beer-controller';

useContainer(Container);
const SERVER_PORT = 8000;

export class App {
    private httpServer!: http.Server;

    constructor() {
        Container.import([
            BeerService
        ]);
    }

    async start(): Promise<http.Server> {
        return this.startHttpServer();
    }

    private startHttpServer(): Promise<http.Server> {
        return new Promise((resolve, reject) => {
            this.httpServer = createExpressServer({
                controllers: [
                    BeerController,
                ],
            });
            this.httpServer.listen(SERVER_PORT, () => {
                console.log('server running on *:' + SERVER_PORT);
                resolve(this.httpServer);
            });
        });
    }
}