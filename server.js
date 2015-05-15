
const FIRENODE = require("firenode-for-nodejs");

console.log("FIRENODE", FIRENODE);

exports.main = function () {

	console.log("firenode.io main server!");

	FIRENODE.main();
}
