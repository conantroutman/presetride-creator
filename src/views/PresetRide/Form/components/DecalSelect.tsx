import usePartsData from '@/hooks/usePartsData';
import { Select } from '@mantine/core';
import { useContext } from 'react';
import { FormContext } from '../FormProvider';

const DecalSelect = (props: { formInputName: string; label?: string }) => {
	const { formInputName, label } = props;
	const { form } = useContext(FormContext);
	const { decalsData } = usePartsData();

	const colorSelect = (
		<Select
			data={[
				{ label: 'Black', value: 'BLACK' },
				{ label: 'White', value: 'WHITE' },
			]}
			defaultValue="BLACK"
			{...form.getInputProps(`decals.${formInputName}.color`)}
			width={92}
		/>
	);

	return (
		<Select
			label={label}
			defaultValue="0"
			data={decalsData}
			{...form.getInputProps(`decals.${formInputName}.name`)}
			rightSection={colorSelect}
			rightSectionWidth={92}
		/>
	);
};

export default DecalSelect;
