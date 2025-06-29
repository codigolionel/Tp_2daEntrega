npm install
npm run dev



Este proyecto consiste en el desarrollo de una API REST utilizando Node.js, Express y MySQL, orientada a la gestión de plugins de audio.

 Dependencias instaladas
Node.js, Express, nodemon, mysql2, dotenv.

dejo en el Proyecto el archivo plugins.sql para usarlo como base de datos.

| Método | Ruta           | Función                        |
| ------ | -------------- | ------------------------------ |
| GET    | `/plugins`     | Obtener todos los plugins      |
| GET    | `/plugins/:id` | Obtener un plugin por ID       |
| POST   | `/plugins`     | Crear un nuevo plugin          |
| PUT    | `/plugins/:id` | Actualizar un plugin existente |
| DELETE | `/plugins/:id` | Eliminar un plugin de la base  |

