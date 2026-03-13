declare module '@studio-freight/lenis' {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal';
    smooth?: boolean;
    mouseMultiplier?: number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
  }

  export interface Lenis {
    on<T extends string>(event: T, callback: (event: CustomEvent<T>) => void): void;
    destroy(): void;
    raf(callback: (time: number) => void): void;
  }
}

export = Lenis;
