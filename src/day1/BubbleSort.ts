export default function bubble_sort(arr: number[]): void {
	// Outer loop controls the number of passes through the array
	for (let i = 0; i < arr.length; i++) {
		// Inner loop iterates through the unsorted portion of the array
		for (let j = 0; j < arr.length - 1 - i; j++) {
			// Compare adjacent elements and swap if they are in the wrong order

			// Store the value at arr[j] in a temporary variable
			const temp = arr[j];
			if (arr[j] > arr[j + 1]) {
				// Swap the elements if they are out of order
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}