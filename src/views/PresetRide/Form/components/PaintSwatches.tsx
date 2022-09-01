import { CheckIcon, ColorSwatch, Grid, Group } from '@mantine/core';
import React, { useCallback, useMemo } from 'react';
import { IPaint } from '../../../../games/mostwanted/colors';
import PaintSwatch from './PaintSwatch';

function propsCompare(prevProps: any, nextProps: any) {
	throw new Error('Function not implemented.');
}

const PaintSwatches = (props: {
	swatches: IPaint[];
	value: string;
	onChange: (paint: string) => void;
}) => {
	const { swatches, value, onChange } = props;

	const handleChange = useCallback(
		(paint: string) => {
			onChange(paint);
		},
		[onChange]
	);

	const swatchGrid = useMemo(
		() =>
			swatches.map((swatch) => (
				<Grid.Col span={1} key={swatch.name}>
					<PaintSwatch
						swatch={swatch}
						checked={value === swatch.name}
						onChange={handleChange}
					/>
				</Grid.Col>
			)),
		[swatches, value]
	);

	return (
		<Grid columns={20} gutter={4}>
			{swatchGrid}
		</Grid>
	);
};

export default React.memo(PaintSwatches);
