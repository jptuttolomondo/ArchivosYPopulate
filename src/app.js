
import {archivo} from './files/files.js'

 const pathFile= "./src/files/people.json"
 //archivo(pathFile)


 import express from 'express';
 import {Route1} from './router/router.js'
 const app = express();
 const PORT = 8080 || 3000;
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 //app.use('/api/', Router1); // endpoint
 app.use('/prueba', Route1); // endpoint
 
 app.listen(PORT , () => {
    console.log(`Server listening at PORT ${PORT}`);
 });

