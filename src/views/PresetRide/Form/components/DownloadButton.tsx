import { Button } from '@mantine/core';
import React, { useContext } from 'react';
import { Download } from 'tabler-icons-react';
import { useDownloadFile } from '../../../../hooks/useDownloadFile';
import { FormContext } from '../FormProvider';

const DownloadButton = () => {
	const { form } = useContext(FormContext);
	const { downloadFile } = useDownloadFile();

	const handleClick = () => {
		downloadFile(form.values);
	};

	return (
		<Button leftIcon={<Download />} onClick={handleClick}>
			Download Script
		</Button>
	);
};

export default DownloadButton;
