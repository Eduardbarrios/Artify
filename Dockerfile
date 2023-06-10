# Define la imagen base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expone el puerto en el que se ejecuta tu aplicación (asegúrate de que coincida con el puerto que has configurado en tu aplicación)
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD [ "node", "index.js" ]
