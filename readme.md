# Weather App

Este proyecto es una aplicación web que permite a los usuarios ver el clima actual en su ubicación y en cualquier otra ubicación deseada. Se construyó con React JS, Vite, Axios y tres API REST para países, ciudades y clima.

## Características
- Ver el clima actual en su ubicación o en cualquier otra ubicación deseada
- Una interfaz amigable e intuitiva para el usuario

## Tecnologías utilizadas
- React JS: un marco de JavaScript para aplicaciones web
- Vite: un servidor web en tiempo real rápido y ligero para desarrollar aplicaciones de JavaScript
- Axios: una biblioteca de JavaScript para realizar solicitudes HTTP
- API REST para países, ciudades y clima: para acceder a la información necesaria sobre países, ciudades y clima

## Variables de entorno
El proyecto requiere dos claves de API. En el archivo **.env.example** proporcionado muestra los nombres de las variables y su formato:

- VITE_rapidApiKey="YOUR_RAPID_API_KEY"
- VITE_openWeatherApiKey="YOUR_OPEN_WEATHER_API_KEY"

Por favor, reemplaza los valores vacíos con las claves de API proporcionadas por las APIs correspondientes.

## Instrucciones para ejecutar el proyecto
1. Clone este repositorio en su máquina local.
2. Asegúrese de tener Node.js y npm instalados.
3. Ejecute `npm create vite@latest` para instalar la última versión de Vite.
4. Ejecute `npm install axios` para instalar Axios en su proyecto.
5. Ejecute `npm install` para instalar las dependencias del proyecto.
6. Ejecute `npm run dev` para iniciar el servidor de desarrollo.
7. Abra su navegador en `http://localhost:3000/` para ver la aplicación.

Desarrollado por **Gustavo Martín Rañieski**, developer frontend.