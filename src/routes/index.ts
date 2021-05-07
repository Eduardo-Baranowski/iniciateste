import { response, Router } from 'express';
import axios from 'axios';

const routes = Router();

routes.get('/', async(request, response) => {
    const token = '5bf4fbbbef517abe966a645646e109e5ca3764b0'

    const data  = await axios.get('https://brasil.io/api/dataset/covid19/caso/data/?state=PR&date=2020-05-10', {
        headers: {
            'Authorization': `Token ${token}`,
            'User-Agent': 'python-urllib/brasilio-client-0.1.0'
          }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.error(error)
    });

    console.log(data);

    return response.json({message: 'Hello World'})
});

export default routes;
