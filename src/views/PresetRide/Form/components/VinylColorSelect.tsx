import { Input, Select } from '@mantine/core';
import React, { useContext, useState } from 'react';
import { VinylPaints } from '../../../../games/mostwanted/colors';
import { FormContext } from '../FormProvider';
import PaintSwatches from './PaintSwatches';

const VinylColorSelect = () => {
  const { form } = useContext(FormContext);
  const [slot, setSlot] = useState('0');

  const handleChange = (value: string) => {
    setSlot(value);
  };

  return (
    <Input.Wrapper label="Vinyl Color">
      <Select
        data={[
          { value: '0', label: 'Color 1' },
          { value: '1', label: 'Color 2' },
          { value: '2', label: 'Color 3' },
        ]}
        onChange={handleChange}
        value={slot}
      />
      <PaintSwatches swatches={VinylPaints} {...form.getInputProps(`vinylColors.${slot}`)} />
    </Input.Wrapper>
  );
};

export default VinylColorSelect;
