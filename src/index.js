import '#Config/env.js';
import httpServer from '#Config/http.js';

const bootstrap = () => {
    httpServer.listen(process.env.PORT_DEV, () => {
        console.log(`Servidor Corriendo en PUERTO: ${process.env.PORT_DEV}`);
    });
};

bootstrap();
