# Water Jug Challenge API

## Descripción

Este proyecto es una API RESTful desarrollada en Express y TypeScript para resolver el **Water Jug Riddle** (el desafío de las jarras de agua). La API permite calcular los pasos necesarios para medir exactamente `amount_wanted` galones usando dos jarras de capacidades `bucket_x` y `bucket_y`.

El algoritmo implementado devuelve la solución más eficiente (menos pasos) comparando dos estrategias: comenzar llenando primero el cubo X o el cubo Y.

## Algoritmo

### Descripción del Algoritmo

El algoritmo es una implementación basada en el uso de las operaciones básicas que se pueden realizar en dos cubos:
- **Llenar** un cubo.
- **Vaciar** un cubo.
- **Transferir** agua de un cubo a otro.

Se comparan las dos soluciones obtenidas y se selecciona la que tenga menos pasos.

### Pasos posibles:
1. Llenar un cubo (X o Y).
2. Vaciar un cubo (X o Y).
3. Transferir el contenido de un cubo al otro.

### Complejidad del Algoritmo

El algoritmo tiene una **complejidad de tiempo** que es aproximadamente **O(n)**, donde `n` es el número de operaciones necesarias para llegar a la solución (dependiendo de los tamaños de los cubos y del valor de `amount_wanted`). Aunque no es una búsqueda exhaustiva completa, se realiza una exploración secuencial de los pasos posibles para lograr el objetivo.

La **complejidad espacial** es también **O(n)**, ya que se almacenan los pasos realizados hasta encontrar la solución.

## Instalación

### Prerrequisitos

- Node.js (versión >= 20)
- npm (versión >= 6)

### Pasos para instalar y ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/angeldfreitez/chicks-group-back.git
```

2. Instalar las dependencias

```bash
nvm use   
npm install
```
3. Ejecutar el proyecto

```bash
npm start
```

Esto levantará el servidor en http://localhost:3000.

### Rutas
```bash
localhost:3000/api/water-jug/solve
```
#### Payload
```json
{
  "x_capacity": 3,
  "y_capacity": 4,
  "z_amount_wanted": 4
}
```
#### Respuesta
```json
{
  "steps": [
    {
      "step": 1,
      "bucketX": 0,
      "bucketY": 4,
      "action": "Fill bucket Y || SOLVED"
    }
  ],
  "resume": "Solution found by prioritizing bucketY, in 1 steps. Final state: bucketX=0, bucketY=4"
}
```
## Estructura del Proyecto
El proyecto sigue una estructura modular para facilitar el mantenimiento y la escalabilidad. Aquí se explica brevemente cómo está organizado:

```
water-jug-challenge/
│
├── src/                      
│   ├── controllers/          
│   │   └── water-jug.controller.ts
│   ├── entities/             
│   │   └── index.ts
│   ├── services/             
│   │   └── water-jug-solver.service.ts
│   ├── routes/               
│   │   └── water-jug.route.ts
│   └── app.ts                
│
├── tests/                    
│   ├── water-jug.controller.spec.ts
│   └── water-jug.service.spec.ts
│
├── node_modules/             
├── .gitignore                
├── .nvmrc                
├── package.json              
├── tsconfig.json             
└── README.md                 

```

## Tecnologías Utilizadas

- **Node.js**: Un entorno de ejecución para JavaScript que permite construir aplicaciones del lado del servidor. Utilizado para ejecutar la lógica de backend y manejar las solicitudes HTTP.

- **Express.js**: Un framework minimalista para Node.js que simplifica la creación de APIs RESTful. Se utiliza para definir las rutas de la API y gestionar las solicitudes y respuestas HTTP de manera eficiente.

- **TypeScript**: Un superconjunto tipado de JavaScript que añade tipos estáticos, lo cual facilita el desarrollo de aplicaciones escalables y más seguras, ayudando a prevenir errores de tipo durante el desarrollo.

- **Jest**: Un framework de pruebas para JavaScript y TypeScript que se utiliza para realizar pruebas unitarias en el proyecto. Jest permite escribir pruebas automatizadas que garantizan que el código funcione según lo esperado.

- **Supertest**: Un módulo para pruebas HTTP en Node.js. Se utiliza junto con Jest para realizar pruebas de integración de las rutas y endpoints del servidor Express, permitiendo simular solicitudes HTTP y verificar las respuestas sin necesidad de levantar el servidor.

- **ts-node**: Un ejecutor de TypeScript que permite ejecutar archivos `.ts` directamente sin necesidad de compilar a JavaScript. Utilizado durante el desarrollo para ejecutar el servidor sin necesidad de generar el código JavaScript manualmente.

- **nodemon**: Una herramienta que monitorea los cambios en los archivos del proyecto y reinicia automáticamente el servidor. Facilita el flujo de trabajo durante el desarrollo, ya que no es necesario reiniciar manualmente el servidor después de cada cambio.