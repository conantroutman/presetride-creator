import { Select } from '@mantine/core';
import React, { useContext } from 'react';
import usePartsData from '../../../../hooks/usePartsData';
import { FormContext } from '../FormProvider';

const WindshieldTintSelect = () => {
  const { form } = useContext(FormContext);
  const { windshieldTint } = usePartsData();

  return <Select label="Windshield Tint" data={windshieldTint} {...form.getInputProps('windshieldTint')} />;
};

export default WindshieldTintSelect;
