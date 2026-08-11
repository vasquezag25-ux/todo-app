# Explicación de cada módulo del proyecto

## 1. `src/index.tsx`
Inicializa la aplicación. Crea el **root** a partir de `<div id="root">` en `public/index.html` y renderiza el componente **App** dentro de `React.StrictMode`.

## 2. `src/App.tsx`
Componente raíz que gestiona la lógica de la UI. Importa **useTasks** y monta los componentes de entrada y lista. Se encarga de mostrar el título y los contadores.

## 3. `src/hooks/useTasks.ts`
Hook personalizado que encapsula el estado de las tareas (`tasks`, `input`) y las funciones de negocio: `addTask`, `toggleTask`, `deleteTask`. Facilita la reutilización y mantiene la lógica separada del UI.

## 4. `src/components/TaskInput.tsx`
Input para añadir tareas. Recibe el valor actual, una función `onChange` y `onAdd` para crear nuevas tareas. Los estilos se aplican inline con colores rosa pastel.

## 5. `src/components/TaskList.tsx`
Renderiza la lista de tareas como elemento `<ul>`. Cada elemento delega a **TaskItem**.

## 6. `src/components/TaskItem.tsx`
Elemento individual de la lista con checkbox, texto y botón de borrado. Usa estilos inline y reacta al clic de cambiar el estado y eliminar la tarea.

## 7. `src/types/types.ts`
Define tipos TS centrales: `Task`, `TaskInputProps`, `TaskItemProps`, etc., garantizando tipado estricto en toda la app.

## 8. `package.json`
Archivo de configuración de NPM. Incluye scripts `dev`, `build`, `preview` de Vite y dependencias de React + TypeScript.

## 9. `vite.config.ts`
Configuración Vite básica que habilita el plugin React.

## 10. `tsconfig.json`
Opciones de compilador TypeScript: target ESNext, JSX React, estricta, etc.

## 11. `.gitignore`
Archivo opcional para excluir `node_modules`, `dist`, etc.
