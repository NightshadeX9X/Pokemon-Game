import { Preloadable, Updatable, Renderable } from "./Attributes.js";

class Game implements Preloadable, Updatable, Renderable {
	public cnv = document.getElementById('screen') as HTMLCanvasElement;
	public ctx = this.cnv.getContext('2d') as CanvasRenderingContext2D;

	constructor() {

	}

	public async preload() { }
	public update() { }
	public render() { }
}

export default Game;