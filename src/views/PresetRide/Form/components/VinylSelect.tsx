import { Select } from '@mantine/core';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { vinyls } from '../../../../games/mostwanted/visuals';
import { FormContext } from '../FormProvider';

type VinylCategories = keyof typeof vinyls;

const VinylSelect = () => {
	const { form } = useContext(FormContext);
	const [category, setCategory] = useState<VinylCategories | 'none'>('none');

	const handleCategoryChange = (value: string) => {
		setCategory(value as VinylCategories);
	};

	const categorySelect = (
		<Select
			data={[
				{ value: 'none', label: 'None' },
				{ value: 'flame', label: 'Flame' },
				{ value: 'tribal', label: 'Tribal' },
				{ value: 'stripe', label: 'Stripe' },
				{ value: 'raceflag', label: 'Race Flag' },
				{ value: 'nationalflag', label: 'National Flag' },
				{ value: 'body', label: 'Body' },
				{ value: 'unique', label: 'Unique' },
				{ value: 'contest', label: 'Contest Winners' },
			]}
			value={category}
			styles={{
				input: {
					borderTopLeftRadius: 0,
					borderBottomLeftRadius: 0,
				},
			}}
			onChange={handleCategoryChange}
		></Select>
	);

	const data = useMemo(() => {
		if (category === 'none') {
			form.setFieldValue('vinyl', `""`);
			return [];
		}

		const filteredVinyls = vinyls[category]?.map((vinyl) => {
			return { value: vinyl.id, label: vinyl.name };
		});

		form.setFieldValue('vinyl', filteredVinyls[0].value);

		return filteredVinyls;
	}, [category]);

	return (
		<Select
			label="Vinyl"
			data={data}
			rightSection={categorySelect}
			rightSectionWidth={150}
			disabled={category === 'none'}
			{...form.getInputProps('vinyl')}
			placeholder="None"
		></Select>
	);
};

export default VinylSelect;
