import { Input, TextInput } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';

const NameInput = (props: { value: string; onChange: any }) => {
	const { value, onChange } = props;
	const [internalValue, setInternalValue] = useState(value);
	const debouncedValue = useDebounce(internalValue, 500);

	const handleChange = (e: any) => {
		setInternalValue(e.target.value);
	};

	const handleBlur = () => {
		if (internalValue.length === 0) setInternalValue(value);
	};

	useEffect(() => {
		if (debouncedValue.length === 0) return;
		if (debouncedValue === value) return;

		onChange(debouncedValue);
	}, [debouncedValue]);

	return (
		<TextInput
			label="Name"
			value={internalValue}
			onChange={handleChange}
			onBlur={handleBlur}
		/>
	);
};

export default NameInput;
