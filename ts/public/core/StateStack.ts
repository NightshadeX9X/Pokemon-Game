import { insertIntoArray } from "../util/functions.js";
import { Preloadable, Updatable, Renderable } from "./Attributes.js";
import State from "./State.js";

class StateStack implements Preloadable, Updatable, Renderable {
	public states: State[] = [];

	public async insert(state: State, index = 0) {
		insertIntoArray(this.states, index, [state]);
		await state.preload();
	}

	public async push(state: State) {
		await this.insert(state, this.states.length);
	}

	public async preload() { }
	public update() { }
	public render() { }
}

export default StateStack;