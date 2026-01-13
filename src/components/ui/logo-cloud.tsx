import { useState, useRef } from 'react';
import { BlurredInfiniteSlider } from './infinite-slider';

export default function LogoCloud() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <div
            ref={containerRef}
            className="min-h-screen w-full relative overflow-hidden"
            style={{ backgroundColor: '#0b2e43' }}
        >
            {/* Layer 1: Fondo base */}
            <img
                src="/fondo____.svg"
                alt="Fondo UNEMI"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Layer 2: Banderín 25 años - moved 83px total to the left */}
            <img
                src="/banderin.svg"
                alt="25 Años UNEMI"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ transform: 'translateX(-83px)' }}
            />

            {/* Layer 3: Animated logos - seamless loop with constrained width */}
            <div
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                style={{ zIndex: 10 }}
            >
                {/* 
                   Contenedor central con ancho restringido al 85% para respetar márgenes.
                   Usamos overflow-hidden para recortar los laterales limpiamente.
                */}
                <div className="w-[85%] max-w-[90%] overflow-hidden relative">
                    <BlurredInfiniteSlider
                        speedOnHover={20}
                        speed={40}
                        gap={0}
                        fadeWidth={120}
                        className="w-full"
                    >
                        <img
                            src="/logos-departamentos.svg"
                            alt="Logos Departamentos UNEMI"
                            className="h-screen w-auto max-w-none"
                            style={{
                                /* Configuración probada para loop continuo limpio: -2.5% */
                                marginLeft: '-2.5%',
                                marginRight: '-2.5%',
                                transform: 'scale(1.05)'
                            }}
                        />
                    </BlurredInfiniteSlider>
                </div>
            </div>

            {/* Fullscreen button - auto-hide behavior added */}
            <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-50 px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 opacity-0 hover:opacity-100"
                style={{
                    backgroundColor: 'rgba(255, 121, 0, 0.8)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500
                }}
            >
                {isFullscreen ? '✕ Salir' : '⛶ Pantalla Completa'}
            </button>
        </div>
    )
}
