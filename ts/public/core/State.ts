import { Preloadable, Updatable, Renderable } from "./Attributes.js";
import StateStack from "./StateStack.js";

class State implements Preloadable, Updatable, Renderable {
	public toUpdate: boolean | null = null;
	public toRender: boolean | null = null;
	protected subStateStack = new StateStack();

	constructor(public stateStack: StateStack) {

	}

	public async preload() { }
	public update() { }
	public render() { }
}

export default State;