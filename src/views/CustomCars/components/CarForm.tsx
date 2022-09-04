import useCustomCarsStore from '@/store/mostwanted/cars';
import {
	Autocomplete,
	Box,
	Button,
	Container,
	Group,
	Input,
	NumberInput,
	Select,
	Stack,
	TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useMemo } from 'react';
import {
	validateFrontend,
	validateModel,
	validatePvehicle,
} from './validation';

const CarForm = (props: { onSubmit: () => void }) => {
	const { onSubmit } = props;
	const { cars, addCar } = useCustomCarsStore();

	const form = useForm({
		initialValues: {
			brand: '',
			model: '',
			data: {
				model: '',
				frontend: '',
				pvehicle: '',
				spoilerType: 'default',
				bodyKits: 5,
			},
		},
		validate: {
			brand: (value) =>
				value.length < 1 ? 'You must provide a brand name' : null,
			model: (value) =>
				value.length < 1 ? 'You must provide a model name' : null,
			data: {
				model: (value) => validateModel(value, cars),
				frontend: (value) => validateFrontend(value, cars),
				pvehicle: (value) => validatePvehicle(value, cars),
			},
		},
	});

	const autocompleteData = useMemo(() => {
		return [...new Set(cars.map((car) => car.brand).sort())];
	}, [cars]);

	return (
		<form
			onSubmit={form.onSubmit((values) => {
				addCar(values);
				form.reset();
				onSubmit();
			})}
		>
			<Stack>
				<Autocomplete
					label="Brand"
					{...form.getInputProps('brand')}
					data={autocompleteData}
				></Autocomplete>
				<TextInput label="Name" {...form.getInputProps('model')}></TextInput>
				<Input.Wrapper label="Metadata">
					<Container>
						<TextInput
							label="Model"
							{...form.getInputProps('data.model')}
						></TextInput>
						<TextInput
							label="Frontend"
							{...form.getInputProps('data.frontend')}
						></TextInput>
						<TextInput
							label="Pvehicle"
							{...form.getInputProps('data.pvehicle')}
						></TextInput>
						<NumberInput
							label="Number of Body Kits"
							{...form.getInputProps('data.bodyKits')}
							min={0}
						></NumberInput>
						<Select
							label="Spoiler Type"
							data={[
								{ value: 'default', label: 'Default' },
								{ value: 'hatch', label: 'Hatchback' },
								{ value: 'porsche', label: 'Porsche' },
								{ value: 'carreragt', label: 'Carrera GT' },
							]}
							{...form.getInputProps('data.spoilerType')}
						></Select>
					</Container>
				</Input.Wrapper>
				<Button type="submit">Add</Button>
			</Stack>
		</form>
	);
};

export default CarForm;
