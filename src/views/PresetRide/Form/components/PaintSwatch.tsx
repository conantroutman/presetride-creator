import { CheckIcon, ColorSwatch } from '@mantine/core';
import React, { useCallback } from 'react';

const PaintSwatch = (props: {
	swatch: any;
	checked: boolean;
	onChange: any;
}) => {
	const { swatch, checked, onChange } = props;

	const handleChange = () => {
		onChange(swatch.name);
	};

	return (
		<ColorSwatch
			color={swatch.color}
			sx={{ color: '#fff', cursor: 'pointer' }}
			radius="sm"
			onClick={handleChange}
		>
			{checked && <CheckIcon width={10} />}
		</ColorSwatch>
	);
};

export default PaintSwatch;
