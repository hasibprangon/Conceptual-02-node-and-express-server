import { IncomingMessage, ServerResponse } from "http";
import { products } from "../data/products";
import { parseBody } from "../utils/parseBody";
import { IProduct } from "../types/products";

export const handleProducts = async(req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;

    if(url === '/products' && req.method === 'GET') {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(products))
    }
    else if(url === '/products' && req.method === 'POST'){
        try{
            // const body = await parseBody(req);
            const newProduct: IProduct = {id: 3, name: 'book'};
            products.push(newProduct);
            res.writeHead(201, {'content-type': 'application/json'})
            res.end(JSON.stringify(products))
        }
        catch(err){
            res.writeHead(400);
            res.end(`${err}`)
        }
    }
}