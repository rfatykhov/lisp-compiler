module.exports = function parser(tokens) {
	let current = 0;
	function walk() {
		const token = tokens[current];
		if (token.type === "number") {
			current++;
			return {
				type: "NumberLiteral",
				value: token.value,
			};
		}
		// if (token.type === ...) {}
		throw new TypeError(`Unknown token: '${token}'`);
	}
	const ast = {
		type: "Program",
		body: [walk()],
	};

	return ast;
};
