export function createChildObject<Child extends Record<keyof any, any>, Parent extends Record<keyof any, any>>(child: Child, parents: Parent[]) {
	function fromTwoParents<Base extends Record<keyof any, any>, A extends Record<keyof any, any>, B extends Record<keyof any, any>>(base: Base, a: A, b: B) {
		const proxy = new Proxy(base, {
			get(target, key) {
				let value: any = undefined;
				[a, b, target].forEach(obj => {
					if (key in obj) {
						value = (obj as any)[key];
					}
				});
				return value;
			},
			has(target, key) {
				let value = false;
				[a, b, target].forEach(obj => {
					if (key in obj) {
						value = true;
					}
				});
				return value;
			}
		});

		return proxy as A & B;
	}
	return parents.reduce((acc, curr) => {
		return fromTwoParents(acc, curr, {})
	}, fromTwoParents(child, {}, {})) as UnionToIntersection<Parent> & Child;
}



export function ChildOf(...parents: Constructor[]) {
	return function (ctor: Constructor) {
		Object.setPrototypeOf(ctor.prototype, createChildObject({}, parents.map(p => p.prototype)));
	}
}