**[English Version](README.md#english)** || **[Version en Español](README.md#español)**
### English
# Artify
# Artify Backend

This is the backend application for Artify, built with Node.js and Express. It has been dockerized and the container image is stored in an Azure Container Registry. The application is then deployed and running as an Azure Web Application.

## Technologies Used
- Node.js
- Express
- Docker

## Description
The Artify backend application is an API for retrieving product data from Artify. It receives a GET request, which triggers a query to a PostgreSQL database hosted on Azure. The response is a JSON object that contains a list of products. The application follows the MVC (Model-View-Controller) architecture to maintain separation of concerns and ensure scalability and maintainability.

To ensure system stability and scalability, this application was packaged into a single Docker container, with its image hosted in an Azure container registry and then instantiated using the Azure Web Application resource.

To view the code for the Artify Frontend application, please refer to the following repository:
[Artify-backend-app](https://github.com/Eduardbarrios/Artify-front-app/tree/main)

----
### Español
# Artify Backend

Esta es la aplicación backend para Artify, construida con Node.js y Express. Se ha dockerizado y la imagen del contenedor se almacena en un Azure Container Registry. La aplicación se implementa y se ejecuta como una Azure Web Application.

## Tecnologías utilizadas
- Node.js
- Express
- Docker

## Descripción
La aplicación backend de Artify es una API para obtener datos de productos de Artify. La cual recibe una solicitud GET, que desencadena una consulta a una base de datos PostgreSQL alojada en Azure. La respuesta es un objeto JSON que contiene una lista de productos. La aplicación sigue la arquitectura MVC (Modelo-Vista-Controlador) para mantener la separación de responsabilidades y garantizar la escalabilidad y mantenibilidad del sistema.
Con el fin de garantizar la estabilidad y escalabilidad del sistema esta aplicación fue empaquetada en un contenedor unitario de docker, cuya imagen fue alojada en un contenedor de registro de Azure y luego instanciada por medio del recurso aplicación de Azure.

Para ver el código de la aplicación Frontend de Artify, consulta el siguiente repositorio:
[Artify-backend-app](https://github.com/Eduardbarrios/Artify-front-app/tree/main)


