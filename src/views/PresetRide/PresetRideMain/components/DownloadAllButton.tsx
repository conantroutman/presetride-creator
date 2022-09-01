import { Affix, Button } from '@mantine/core';
import React from 'react';
import { Download } from 'tabler-icons-react';
import useStore from '../../../../store';

const DownloadAllButton = () => {
	const store = useStore();

	const handleClick = () => {
		console.log(store.presetRides);
	};

	return (
		<Affix position={{ bottom: 20, right: 20 }}>
			<Button leftIcon={<Download />} size="lg" onClick={handleClick}>
				Download All
			</Button>
		</Affix>
	);
};

export default DownloadAllButton;
