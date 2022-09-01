import { Affix, Button } from '@mantine/core';
import React, { useEffect } from 'react';
import { Download } from 'tabler-icons-react';
import { PresetRideProvider } from '../../../contexts/PresetRideProvider';
import useStore from '../../../store';
import NavigationTabs from '../NavigationTabs/NavigationTabs';
import DownloadAllButton from './components/DownloadAllButton';

const PresetRideMain = () => {
	return (
		<>
			<NavigationTabs />
			<DownloadAllButton />
		</>
	);
};

export default PresetRideMain;
