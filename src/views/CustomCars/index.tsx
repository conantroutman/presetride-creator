import useCustomCarsStore from '@/store/mostwanted/cars';
import { Button, Modal, Table } from '@mantine/core';
import React, { useState } from 'react';
import { Plus } from 'tabler-icons-react';
import CarForm from './components/CarForm';
import TableRow from './components/TableRow';

const CustomCars = () => {
	const { cars } = useCustomCarsStore();
	const [opened, setOpened] = useState(false);

	return (
		<>
			<h2>Custom Cars</h2>
			<p>
				If you have any addon cars you would like to use, you can input them
				here.
			</p>
			<Table>
				<thead>
					<tr>
						<th>Car</th>
						<th>Model</th>
						<th>Frontend</th>
						<th>Pvehicle</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cars.map((car) => (
						<TableRow key={car.data.model} car={car} />
					))}
				</tbody>
			</Table>
			<Modal opened={opened} onClose={() => setOpened(false)} title="Add Car">
				<CarForm onSubmit={() => setOpened(false)} />
			</Modal>
			<Button leftIcon={<Plus />} onClick={() => setOpened(true)}>
				Add Car
			</Button>
		</>
	);
};

export default CustomCars;
