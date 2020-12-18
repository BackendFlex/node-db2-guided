
exports.seed = async function(knex) {
	// clear out the table before adding the test data
	await knex("fruits").truncate()

	// create some hard-coded test data so we can get it to a predictable state for testing
	await knex("fruits").insert([
		{ name: "dragon fruit", avgWeightOz: 16.7, delicious: true, color: "red" },
		{ name: "durian", avgWeightOz: 52.9, delicious: false, color: "yellow" },
		{ name: "rambutan", avgWeightOz: 1.1, delicious: true, color: "pink" },
		{ name: "lingonberry", avgWeightOz: 0.01, delicious: true, color: "red" },
		{ name: "golden gooseberry", avgWeightOz: 0.02, delicious: false, color: "yellow" },
	])
}