# Usa a imagem oficial do Node.js
FROM node:18-alpine
WORKDIR /app

# Copia os arquivos e instala as dependências
COPY package.json package-lock.json ./
RUN npm install --production

COPY . .
RUN npm run build

# Expõe a porta do Next.js
EXPOSE 3000

CMD ["npm", "start"]
