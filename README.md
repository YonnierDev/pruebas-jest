# Aplicación de Tareas con React

Una aplicación de lista de tareas construida con React que implementa pruebas unitarias siguiendo las mejores prácticas de desarrollo.

## Características

- Añadir nuevas tareas con validación
- Marcar/desmarcar tareas como completadas
- Eliminar tareas
- Interfaz intuitiva y responsiva
- Suite completa de pruebas unitarias
- Cobertura de código verificable

## Empezando

### Requisitos previos

- Node.js (v16 o superior)
- npm (v8 o superior) o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/todo-app.git
   cd todo-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm start
   # o
   yarn start
   ```

## Pruebas

### Ejecutar Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas en modo observación
npm test -- --watch

# Ejecutar pruebas con cobertura
yarn test --coverage --watchAll=false
```

### Estructura de Pruebas

```
src/
├── App.test.jsx          # Pruebas del componente principal
└── components/
    ├── TodoForm.test.jsx  # Pruebas del formulario
    ├── TodoItem.test.jsx  # Pruebas de ítems individuales
    └── TodoList.test.jsx  # Pruebas de la lista completa
```

### Cobertura de Pruebas

El proyecto incluye configuración para medir la cobertura de código. Para ver el informe:

1. Ejecuta las pruebas con cobertura:
   ```bash
   npm test -- --coverage --watchAll=false
   ```

2. Abre el informe generado en:
   ```
   coverage/lcov-report/index.html
   ```

## Estructura del Proyecto

```
src/
├── components/
│   ├── TodoForm.jsx      # Formulario para añadir tareas
│   ├── TodoItem.jsx      # Componente de ítem individual
│   └── TodoList.jsx      # Lista principal de tareas
├── App.jsx               # Componente principal
└── main.jsx              # Punto de entrada
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.
