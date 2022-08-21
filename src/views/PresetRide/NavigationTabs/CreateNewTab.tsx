import { Tabs } from '@mantine/core';
import React, { useCallback } from 'react';
import { Plus } from 'tabler-icons-react';
import useStore from '../../../store';

const CreateNewTab = (props: { onCreateNew: (id: string) => void }) => {
	const { onCreateNew } = props;
	const store = useStore();

	const handleClick = useCallback(() => {
		const id = String(Math.floor(Math.random() * 100));
		store.addPresetRide(id);
		onCreateNew(id);
	}, []);

	return (
		<Tabs.Tab value="new" icon={<Plus size={14} />} onClick={handleClick}>
			New Preset Ride
		</Tabs.Tab>
	);
};

export default CreateNewTab;
