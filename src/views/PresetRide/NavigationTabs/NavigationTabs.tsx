import { CloseButton, Tabs, TabsValue } from '@mantine/core';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Plus } from 'tabler-icons-react';
import { useEffectOnce } from 'usehooks-ts';
import { PresetRideProvider } from '../../../contexts/PresetRideProvider';
import useStore from '../../../store';
import Form from '../Form/Form';
import FormProvider from '../Form/FormProvider';
import CreateNewTab from './CreateNewTab';

const NavigationTabs = () => {
	const [activeTab, setActiveTab] = useState<string | null>();
	const store = useStore();

	const handleTabChange = (value: TabsValue) => {
		console.log(value);
		if (value === 'new') return;
		setActiveTab(value);
	};

	const handleClickClose = useCallback(
		(id: string) => {
			if (activeTab === id) {
				const index = store.presetRides.findIndex((el) => el.id === id);
				const newTab =
					store.presetRides[index - 1]?.id ??
					store.presetRides[index + 1]?.id ??
					'untitled';
				setActiveTab(newTab);
			}
			store.removePresetRide(id);
		},
		[store]
	);

	const handleCreateNew = (id: string) => {
		setActiveTab(id);
	};

	const tabs = useMemo(
		() =>
			store.presetRides.map((presetRide) => (
				<Tabs.Tab
					value={presetRide.id}
					rightSection={
						<CloseButton
							size="xs"
							onClick={(e: any) => {
								e.stopPropagation();
								handleClickClose(presetRide.id);
							}}
						/>
					}
				>
					{presetRide.name}
				</Tabs.Tab>
			)),
		[store]
	);

	const panels = useMemo(
		() =>
			store.presetRides.map((presetRide) => (
				<Tabs.Panel value={presetRide.id}>
					{activeTab === presetRide.id && (
						<FormProvider id={presetRide.id}>
							<Form />
						</FormProvider>
					)}
				</Tabs.Panel>
			)),
		[store, activeTab]
	);

	useEffectOnce(() => {
		if (store.presetRides.length === 0) return;
		setActiveTab(store.presetRides[0].id);
	});

	return (
		<Tabs
			defaultValue="untitled"
			value={activeTab}
			onTabChange={handleTabChange}
		>
			<Tabs.List>
				{tabs}
				<CreateNewTab onCreateNew={handleCreateNew} />
			</Tabs.List>
			{panels}
		</Tabs>
	);
};

export default NavigationTabs;
