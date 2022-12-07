const tokenizer = require("./tokenizer");

module.exports = function compiler(input) {
	// 1. Lexical Analysis -
	//      Breaks the input code (string) into the basic syntax
	//      of the language (array of objects)
	const tokens = tokenizer(input);
	// 2. Syntactic Analysis
	// 3. Transformation
	// 4. Code Generation
	//
	return tokens;
};
