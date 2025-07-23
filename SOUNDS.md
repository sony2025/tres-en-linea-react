# 🎵 Sistema de Sonidos - Tres en Línea

## 🎮 Sonidos implementados:

### 🎯 **Sonidos de juego:**
- **Clic en casilla** (`playMoveSound()`) - Sonido corto al colocar X u O
- **Victoria** (`playWinSound()`) - Melodía ascendente alegre cuando alguien gana
- **Empate** (`playDrawSound()`) - Dos tonos neutrales para empate
- **Nuevo juego** (`playResetSound()`) - Sonido descendente al resetear

### 🔧 **Características técnicas:**
- ✅ **Sin archivos externos** - Usa Web Audio API nativa del navegador
- ✅ **Control de volumen** - Volúmenes ajustados para no ser molestos
- ✅ **Botón ON/OFF** - Los usuarios pueden desactivar los sonidos
- ✅ **Compatibilidad** - Funciona en navegadores modernos
- ✅ **Fallback seguro** - No rompe si el navegador no soporta audio

### 🎼 **Detalles de los sonidos:**

**🎉 Sonido de Victoria:**
- Notas: C5 → E5 → G5 → C6 (Do mayor ascendente)
- Duración: ~0.8 segundos
- Tipo: Onda cuadrada para sonido retro

**🤝 Sonido de Empate:**
- Nota: A4 (440Hz) repetida dos veces
- Duración: 0.3 segundos cada una
- Tipo: Onda senoidal suave

**🔄 Sonido de Movimiento:**
- Frecuencia: 800Hz
- Duración: 0.1 segundos
- Tipo: Onda cuadrada para "clic"

**🔄 Sonido de Reset:**
- Frecuencias: 600Hz → 500Hz → 400Hz → 300Hz
- Efecto: Sonido descendente
- Tipo: Onda diente de sierra

### 🎚️ **Controles disponibles:**
```jsx
gameSounds.enableSound()    // Activar sonidos
gameSounds.disableSound()   // Desactivar sonidos
gameSounds.toggleSound()    // Alternar estado
gameSounds.isEnabled()      // Verificar estado
```

### 🌐 **Compatibilidad de navegadores:**
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Navegadores antiguos tendrán fallback silencioso
