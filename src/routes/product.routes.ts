import { IncomingMessage, ServerResponse } from "http";

export const routeHandler = async(req: IncomingMessage, res: ServerResponse) => {
    const url = req.url
    // console.log(req);
    if(url ===  '/' && req.method === 'GET'){
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end('Welcome to nodejs server')
    }
}