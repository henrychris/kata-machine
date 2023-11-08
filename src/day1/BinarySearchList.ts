export default function bs_list(haystack: number[], needle: number): boolean {
	let lowIndex = 0;
	let highIndex = haystack.length;

	do {
		const midIndex = Math.floor((lowIndex + highIndex) / 2);

		if (haystack[midIndex] === needle) {
			return true;
		}
		if (haystack[midIndex] > needle) {
			highIndex = midIndex;
		}
		else {
			lowIndex = midIndex + 1;
		}

	} while (lowIndex < highIndex);

	return false;
}