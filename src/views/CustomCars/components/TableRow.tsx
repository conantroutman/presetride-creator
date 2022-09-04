import useCustomCarsStore from '@/store/mostwanted/cars';
import { Button } from '@mantine/core';
import React from 'react';

const TableRow = (props: { car: any }) => {
	const { car } = props;
	const { removeCar } = useCustomCarsStore();

	const handleClick = () => {
		removeCar(car.data.model);
	};

	return (
		<tr>
			<td>
				{car.brand} {car.model}
			</td>
			<td>{car.data.model}</td>
			<td>{car.data.frontend}</td>
			<td>{car.data.pvehicle}</td>
			<td>
				<Button size="xs" color="red" onClick={handleClick}>
					Remove
				</Button>
			</td>
		</tr>
	);
};

export default TableRow;
