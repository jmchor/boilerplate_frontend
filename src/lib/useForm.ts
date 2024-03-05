import { useEffect, useState } from 'react';

// Define a generic type for inputs
export interface Inputs {
	[key: string]: string | number | boolean | string[] | null | object; // You can adjust this type definition as needed
}

export default function useForm<T extends Inputs>(initial: T) {
	// Create a state object for our inputs
	const [inputs, setInputs] = useState<T>(initial);
	const initialValues = Object.values(initial).join('');

	useEffect(() => {
		// This function runs when the things we are watching change
		setInputs(initial);
	}, [initialValues]);

	function handleChange<K extends keyof T>(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) {
		const { name, type } = e.target;

		let value: string | number | boolean | string[] = e.target.value;

		// Adjust value based on input type
		if (type === 'number') {
			value = parseFloat(value);
		} else if (type === 'checkbox') {
			value = (e.target as HTMLInputElement).checked; // Type assertion for checkbox input
		} else if (type === 'select-multiple') {
			// Multiple select, gather all selected options' values
			value = Array.from((e.target as HTMLSelectElement).selectedOptions).map((option) => option.value);
		}

		setInputs({
			// Copy the existing state
			...inputs,
			[name]: value,
		});
	}

	function resetForm() {
		setInputs(initial);
	}

	function clearForm() {
		const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
		setInputs(blankState as T);
	}

	// Return the things we want to surface from this custom hook
	return {
		inputs,
		handleChange,
		resetForm,
		clearForm,
	};
}
