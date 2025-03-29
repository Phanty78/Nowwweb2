declare module 'shuffle-letters' {
    interface ShuffleOptions {
        text?: string;
        iterations?: number;
        fps?: number;
        duration?: number;
        onComplete?: () => void;
    }

    function shuffleLetters(element: HTMLElement, options?: ShuffleOptions): void;
    export default shuffleLetters;
} 