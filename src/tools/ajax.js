import axios from "axios";

export const ajax = async (options) => await axios.request(options).then(response => response.data);


// otra manera

// export const ajax = async (options) => {
//   try {
//     // Hacer una petición GET a la API
//     const response = await axios.get(options.url);

//     // Procesar la respuesta de la API
//     console.log(response.data);
//   } catch (error) {
//     // Procesar el error
//     console.error(error);
//   }
// }

// y para importarla a otro componente

// import { ajax } from './api';

// const options = {
//   url: 'https://api.example.com/resource',
// };

// ajax(options);

