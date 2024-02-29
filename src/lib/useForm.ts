import { useEffect, useState } from 'react';

interface Inputs {
	username: string;
	email: string;
	password: string;
}

export default function useForm(initial: Inputs = { username: '', email: '', password: '' }) {
	//create a state object for our inputs

	const [inputs, setInputs] = useState(initial);
	const initialValues = Object.values(initial).join('');

	useEffect(() => {
		//This function runs when the things we are watching change
		setInputs(initial);
	}, [initialValues]);

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>
	) {
		const { name, type } = e.target;

		const value = type === 'number' ? parseFloat(e.target.value) : e.target.value;

		setInputs({
			//copy the existing state
			...inputs,
			[name]: value,
		});
	}

	function resetForm() {
		setInputs(initial);
	}

	function clearForm() {
		const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
		setInputs(blankState);
	}

	//return the things we want to surface from this custom hook

	return {
		inputs,
		handleChange,
		resetForm,
		clearForm,
	};
}
