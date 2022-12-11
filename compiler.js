const tokenizer = require("./tokenizer");
const parser = require("./parser");

module.exports = function compiler(input) {
	const tokens = tokenizer(input);
	const lispAST = parser(tokens);
	return lispAST;
};
