# Informe Técnico: Pruebas Unitarias en Aplicación de Lista de Tareas

**Autor:** Yonnier Stiven Leon Campo  
**Institución:** CTPI  
**Instructor:** David Lozada  
**Fecha:** Junio 2025

## Resumen

Este informe presenta un análisis detallado de la implementación de pruebas unitarias en una aplicación de lista de tareas desarrollada con React. El documento evalúa la cobertura de pruebas, identifica áreas de mejora y proporciona recomendaciones para garantizar la calidad del software.

## Introducción

Las pruebas unitarias son una técnica fundamental en el desarrollo de software que permite validar el correcto funcionamiento de las unidades individuales de código de forma aislada (Myers et al., 2011). En el contexto de aplicaciones React, estas pruebas son esenciales para asegurar que cada componente funcione según lo esperado, facilitando el mantenimiento y la escalabilidad del código (Dodds, 2020).

## Metodología

El análisis se realizó sobre una aplicación React que implementa una lista de tareas con las siguientes funcionalidades:

- Adición de nuevas tareas con validación
- Marcado/desmarcado de tareas como completadas
- Eliminación de tareas
- Interfaz de usuario intuitiva

Las pruebas se implementaron utilizando:

- **Jest** como marco de pruebas principal
- **React Testing Library** para pruebas centradas en el usuario
- **Jest DOM** para aserciones específicas del DOM

## Análisis de la Implementación de Pruebas

### Estructura de Pruebas

La aplicación sigue una arquitectura de pruebas distribuida donde cada componente tiene su propio archivo de pruebas:

1. **App.test.jsx**: Pruebas del componente principal
2. **TodoForm.test.jsx**: Pruebas del formulario de añadir tareas
3. **TodoItem.test.jsx**: Pruebas de los elementos individuales de la lista
4. **TodoList.test.jsx**: Pruebas de la lista de tareas completa

### Evaluación por Componente

#### 3.1. App.test.jsx

**Cobertura actual:**
- Verificación del título principal "Lista de Tareas"

**Fortalezas:**
- Prueba clara y concisa
- Verificación del renderizado básico

**Áreas de mejora:**
- Incluir pruebas para componentes hijos
- Verificar el estado inicial de la aplicación
- Añadir pruebas de accesibilidad

#### 3.2. TodoForm.test.jsx

**Cobertura actual:**
- Renderizado del formulario con input y botón
- Adición de nuevas tareas
- Validación de entradas vacías

**Fortalezas:**
- Uso efectivo de `jest.fn()` para simular funciones
- Pruebas de comportamiento del usuario
- Validación de entradas

**Áreas de mejora:**
- Probar el comportamiento al presionar Enter
- Verificar limpieza del input después de añadir una tarea
- Añadir pruebas de accesibilidad

#### 3.3. TodoItem.test.jsx

**Cobertura actual:**
- Renderizado de texto y botones
- Comportamiento del botón de completar
- Comportamiento del botón de eliminar

**Fortalezas:**
- Uso de `beforeEach` para limpiar mocks
- Pruebas aisladas para cada funcionalidad
- Buenas prácticas de organización

**Áreas de mejora:**
- Probar estilos de tareas completadas
- Verificar atributos ARIA
- Añadir pruebas de accesibilidad

#### 3.4. TodoList.test.jsx

**Cobertura actual:**
- Renderizado inicial
- Adición de tareas
- Alternancia de estado de completado
- Eliminación de tareas

**Fortalezas:**
- Pruebas de flujo completo
- Verificación de cambios de estado
- Cobertura de casos de uso principales

**Áreas de mejora:**
- Probar con múltiples tareas
- Verificar contador de tareas pendientes
- Añadir pruebas de rendimiento

## Recomendaciones

### Cobertura de Código

1. Implementar `jest --coverage` para medir la cobertura actual
2. Establecer un objetivo mínimo del 80% de cobertura
3. Añadir pruebas para casos límite y condiciones de error

### Pruebas de Integración

1. Implementar pruebas que verifiquen la interacción entre componentes
2. Probar flujos completos de usuario
3. Añadir pruebas de rutas y navegación

### Mejoras de Calidad

1. **Accesibilidad**:
   - Añadir pruebas para atributos ARIA
   - Verificar navegación por teclado
   - Probar con lectores de pantalla

2. **Rendimiento**:
   - Añadir pruebas de rendimiento
   - Verificar tiempos de respuesta
   - Probar con grandes conjuntos de datos

3. **Seguridad**:
   - Validar entradas del usuario
   - Probar contra inyección de código
   - Verificar manejo de datos sensibles

### Integración Continua/Despliegue Continuo (CI/CD)

1. Configurar integración continua con GitHub Actions o similar
2. Ejecutar pruebas automáticamente en cada commit
3. Implementar gates de calidad para el despliegue

## Conclusión

La aplicación cuenta con una base sólida de pruebas unitarias que cubren las funcionalidades principales. Siguiendo las recomendaciones de Kent C. Dodds (2020) sobre pruebas en React, se ha logrado un buen equilibrio entre pruebas unitarias y de integración. Sin embargo, existen oportunidades para mejorar la cobertura, especialmente en áreas como accesibilidad, rendimiento y pruebas de integración.

La implementación de las recomendaciones propuestas en este informe permitirá mejorar significativamente la calidad del código, facilitar el mantenimiento y aumentar la confiabilidad de la aplicación a largo plazo.

## Referencias

- Dodds, K. (2020). *Testing JavaScript Applications*. The Pragmatic Programmers.
- Myers, G. J., Sandler, C., & Badgett, T. (2011). *The Art of Software Testing* (3rd ed.). Wiley.
- React Testing Library. (2023). *Documentation*. https://testing-library.com/docs/react-testing-library/intro/
- Wieruch, R. (2022). *The Road to React* (2022 ed.). Leanpub.

## Anexo: Comandos para Ejecución de Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con cobertura
npm test -- --coverage

# Ejecutar pruebas en modo observación
npm test -- --watch

# Ejecutar pruebas de un archivo específico
npm test -- src/components/TodoList.test.jsx

# Ejecutar pruebas con reporte detallado
npm test -- --verbose
```

---
*Documento generado el 16 de junio de 2025*
