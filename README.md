# 🎮 Tres en Línea - Tic Tac Toe

Un juego interactivo de tres en línea (tic-tac-toe) desarrollado con React y Vite.

## 🚀 Características

- ✨ Interfaz moderna y atractiva
- 🎯 Jugabilidad para 2 jugadores (X y O)
- 📝 Historial completo de movimientos
- ⏪ Capacidad de regresar a movimientos anteriores
- 🔄 Botón para reiniciar el juego
- 🤝 Detección de empates
- 🏆 Detección automática de ganadores
- 📱 Diseño responsivo para móviles

## 🛠️ Tecnologías utilizadas

- **React 19.1.0** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 7.0.4** - Herramienta de construcción y desarrollo
- **CSS3** - Estilos modernos con animaciones
- **JavaScript ES6+** - Funcionalidades modernas

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd tres-en-linea-app-react
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173` (o el puerto que indique la consola)

## 🎯 Cómo jugar

1. El juego se juega entre dos jugadores: X (❌) y O (⭕)
2. Los jugadores se turnan para colocar su símbolo en una casilla vacía
3. El primer jugador en conseguir tres símbolos en línea (horizontal, vertical o diagonal) gana
4. Si todas las casillas se llenan sin que haya un ganador, el juego termina en empate

## 🎮 Controles

- **Clic en casilla**: Coloca tu símbolo en la casilla seleccionada
- **Historial de movimientos**: Haz clic en cualquier movimiento del historial para regresar a ese punto
- **Nuevo Juego**: Reinicia completamente el juego

## 📁 Estructura del proyecto

```
tres-en-linea-app-react/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Componente principal con la lógica del juego
│   ├── index.jsx        # Punto de entrada de la aplicación
│   ├── index.css        # Estilos globales
│   └── styles.css       # Estilos específicos del juego
├── index.html           # Template HTML
├── package.json         # Dependencias y scripts
└── vite.config.js       # Configuración de Vite
```

## 🏗️ Scripts disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta el linter de código

## 🎨 Características de diseño

- **Colores modernos**: Paleta de colores azul y gris profesional
- **Animaciones suaves**: Transiciones y efectos hover
- **Iconos emoji**: Uso de emojis para hacer el juego más visual
- **Sombras y bordes**: Efectos de profundidad con CSS
- **Responsive**: Se adapta a diferentes tamaños de pantalla

## 🔧 Personalización

Puedes personalizar fácilmente:

- **Colores**: Modifica las variables CSS en `styles.css`
- **Tamaños**: Ajusta las dimensiones de las casillas
- **Animaciones**: Cambia las transiciones y efectos
- **Símbolos**: Reemplaza los emojis por otros símbolos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

¡Disfruta jugando! 🎉+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
