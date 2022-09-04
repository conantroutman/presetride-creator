import { Select } from '@mantine/core';
import React, { useContext, useMemo } from 'react';
import { PresetRideContext } from '../../../../contexts/PresetRideProvider';
import carsData from '@/data/mostwanted/cars.json';
import useCustomCarsStore from '@/store/mostwanted/cars';
import sortCarsAlphabetically from '@/utils/sortCarsAlphabetically';

const CarSelect = (props: { value: any; onChange: any }) => {
	const { value, onChange } = props;
	const { cars: customCars } = useCustomCarsStore();

	// Combine and sort vanilla cars + custom cars
	const allCars = useMemo(() => {
		return carsData.concat(customCars).sort(sortCarsAlphabetically);
	}, [customCars]);

	// Map combined cars array to Select component data
	const data = useMemo(() => {
		return allCars.map((car) => {
			return { value: car.data.model, label: `${car.brand} ${car.model}` };
		});
	}, [allCars]);

	const handleChange = (value: string) => {
		const selectedCar = allCars.find((car) => car.data.model === value);
		if (!selectedCar) return;

		onChange(selectedCar);
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
