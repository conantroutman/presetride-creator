import { Accordion, Box, Container, Select, Stack } from '@mantine/core';
import React, { useContext } from 'react';
import usePartsData from '../../../hooks/usePartsData';
import useStore from '../../../store';
import CarSelect from './components/CarSelect';
import Decals from './components/Decals';
import PaintSelect from './components/PaintSelect';
import PartHoodSelect from './components/PartHoodSelect';
import PartRimsSelect from './components/PartRimsSelect';
import PartRoofScoopSelect from './components/PartRoofScoopSelect';
import PartSpoilerSelect from './components/PartSpoilerSelect';
import RimPaintSelect from './components/RimPaintSelect';
import VinylColorSelect from './components/VinylColorSelect';
import VinylSelect from './components/VinylSelect';
import WindshieldTintSelect from './components/WindshieldTintSelect';
import { FormContext } from './FormProvider';
import { useUpdateEffect } from 'usehooks-ts';
import NameInput from './components/NameInput';
import DownloadButton from './components/DownloadButton';

const Form = () => {
	const { form } = useContext(FormContext);
	const { bodyKits } = usePartsData();
	const store = useStore();

	useUpdateEffect(() => {
		store.patchPresetRide(form.values);
	}, [form.values]);

	return (
		<Container sx={{ maxWidth: 600 }} p={24}>
			<Stack>
				<NameInput label="Name" {...form.getInputProps('name')} />
				<CarSelect {...form.getInputProps('car')} />
				<Accordion multiple defaultValue={['parts']}>
					<Accordion.Item value="parts">
						<Accordion.Control>Parts</Accordion.Control>
						<Accordion.Panel>
							<Select
								label="Body Kit"
								data={bodyKits}
								{...form.getInputProps('bodyKit')}
							/>
							<PartHoodSelect />
							<PartRoofScoopSelect />
							<PartSpoilerSelect />
							<PartRimsSelect />
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="colors">
						<Accordion.Control>Colors</Accordion.Control>
						<Accordion.Panel>
							<PaintSelect />
							<RimPaintSelect />
							<WindshieldTintSelect />
						</Accordion.Panel>
					</Accordion.Item>
					<Accordion.Item value="decals">
						<Accordion.Control>Decals</Accordion.Control>
						<Accordion.Panel>
							<VinylSelect />
							<VinylColorSelect />
							<Decals />
						</Accordion.Panel>
					</Accordion.Item>
				</Accordion>
				<DownloadButton />
			</Stack>
		</Container>
	);
};

export default Form;
