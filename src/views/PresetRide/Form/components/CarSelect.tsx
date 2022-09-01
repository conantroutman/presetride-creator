import { Select } from '@mantine/core';
import React, { useContext, useMemo } from 'react';
import { PresetRideContext } from '../../../../contexts/PresetRideProvider';

import { cars, ICarMW } from '../../../../games/mostwanted/cars';

const CarSelect = (props: { value: any; onChange: any }) => {
	const { value, onChange } = props;
	const data = useMemo(
		() =>
			cars.map((car) => {
				return { value: car.data.model, label: `${car.brand} ${car.model}` };
			}),
		[cars]
	);

	const handleChange = (value: string) => {
		const newCar = cars.find((car) => car.data.model === value);
		if (!newCar) return;

		onChange(newCar);
	};

	return (
		<Select
			label="Car"
			data={data}
			defaultValue={value.data.model}
			onChange={handleChange}
		/>
	);
};

export default CarSelect;
