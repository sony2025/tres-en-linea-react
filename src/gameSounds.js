// 🎵 Sistema de sonidos para el juego de Tres en Línea
// Utiliza Web Audio API para generar sonidos sin archivos externos

class GameSounds {
  constructor() {
    // Verificar si el navegador soporta Web Audio API
    this.audioContext = null;
    this.enabled = true; // Control global de sonido
    this.initializeAudio();
  }

  initializeAudio() {
    try {
      // Crear contexto de audio
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API no soportada:', error);
    }
  }

  // Función helper para crear y reproducir un tono
  playTone(frequency, duration, type = 'sine', volume = 0.3) {
    if (!this.audioContext || !this.enabled) return;

    // Reanudar el contexto si está suspendido (requerido por algunos navegadores)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    // Configurar el oscilador
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);

    // Configurar el volumen
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    // Conectar nodos
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Reproducir
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  // 🎉 Sonido de victoria - Melodía ascendente alegre
  playWinSound() {
    if (!this.audioContext) return;

    const notes = [
      { freq: 523.25, duration: 0.2 }, // C5
      { freq: 659.25, duration: 0.2 }, // E5
      { freq: 783.99, duration: 0.2 }, // G5
      { freq: 1046.50, duration: 0.4 } // C6
    ];

    notes.forEach((note, index) => {
      setTimeout(() => {
        this.playTone(note.freq, note.duration, 'square', 0.4);
      }, index * 150);
    });
  }

  // 🤝 Sonido de empate - Tono neutral
  playDrawSound() {
    if (!this.audioContext) return;

    // Sonido de empate: dos tonos iguales
    this.playTone(440, 0.3, 'sine', 0.3); // A4
    setTimeout(() => {
      this.playTone(440, 0.3, 'sine', 0.3); // A4 repetido
    }, 200);
  }

  // 🔄 Sonido de clic al colocar ficha
  playMoveSound() {
    if (!this.audioContext) return;
    this.playTone(800, 0.1, 'square', 0.2);
  }

  // 🔄 Sonido de reset/nuevo juego
  playResetSound() {
    if (!this.audioContext || !this.enabled) return;
    
    // Sonido descendente
    const notes = [600, 500, 400, 300];
    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playTone(freq, 0.1, 'sawtooth', 0.3);
      }, index * 50);
    });
  }

  // Métodos para controlar el estado del sonido
  enableSound() {
    this.enabled = true;
  }

  disableSound() {
    this.enabled = false;
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

// Crear instancia global
export const gameSounds = new GameSounds();
