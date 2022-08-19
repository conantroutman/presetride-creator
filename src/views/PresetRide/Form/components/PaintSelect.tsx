import { Input, Select } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Paints } from '../../../../games/mostwanted/colors';
import { FormContext } from '../FormProvider';
import PaintSwatches from './PaintSwatches';

const PaintSelect = () => {
  const { form } = useContext(FormContext);
  const [category, setCategory] = useState<string>('gloss');

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const swatches = useMemo(() => {
    return Paints[category];
  }, [category]);

  useEffect(() => {
    form.setFieldValue('paint', swatches[0].name);
  }, [swatches]);

  return (
    <Input.Wrapper label="Paint">
      <Select
        data={[
          { value: 'gloss', label: 'Gloss' },
          { value: 'metallic', label: 'Metallic' },
          { value: 'pearlescent', label: 'Pearlescent' },
          { value: 'chrome', label: 'Chrome' },
          { value: 'matte', label: 'Matte' },
        ]}
        value={category}
        onChange={handleCategoryChange}
        mb={5}
      />
      <PaintSwatches swatches={swatches} {...form.getInputProps('paint')} />
    </Input.Wrapper>
  );
};

export default PaintSelect;
