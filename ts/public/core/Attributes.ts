export interface Preloadable {
	preload(): Promise<void>;
}
export interface Updatable {
	update(): void;
}
export interface Renderable {
	render(ctx: CanvasRenderingContext2D): void;
}