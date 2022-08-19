import { Group, Select, Slider } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React, { useContext, useMemo, useState } from 'react';
import { Wheels } from '../../../../games/mostwanted/parts';
import usePartsData from '../../../../hooks/usePartsData';
import { FormContext } from '../FormProvider';

type RimCategories = keyof typeof Wheels;

const PartRimsSelect = () => {
  const { form } = useContext(FormContext);
  const [category, setCategory] = useState<RimCategories | 'stock'>('stock');
  const { rims } = usePartsData();

  const handleBrandChange = (value: string) => {
    setCategory(value as RimCategories);
  };

  const categories = useMemo(() => {
    const options = Wheels.map((brand) => {
      return { value: brand.id, label: brand.name };
    });

    return [{ value: 'stock', label: 'Stock' }, ...options];
  }, []);

  const data = useMemo(() => {
    if (category === 'stock') {
      //form.setFieldValue('rims', '0');
      return [{ value: '0', label: 'Stock' }];
    }

    const brand = Wheels.find((brand) => brand.id === category);
    if (!brand) return [];

    form.setFieldValue('rims', `${String(category)}_STYLE01`);

    return brand?.rims.map((rim) => {
      return { value: `${String(category)}_STYLE0${rim.style}`, label: rim.name };
    });
  }, [category]);

  const brandSelect = (
    <Select
      data={categories}
      onChange={handleBrandChange}
      styles={{
        input: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
    />
  );

  return (
    <Group grow>
      <Select
        disabled={category === 'stock'}
        label="Rims"
        data={data}
        rightSection={brandSelect}
        rightSectionWidth={100}
        {...form.getInputProps('rims')}
      />
      <Slider
        label="Size"
        disabled={category === 'stock'}
        max={20}
        min={17}
        marks={[{ value: 17 }, { value: 18 }, { value: 19 }, { value: 20 }]}
        {...form.getInputProps('rimSize')}
      />
    </Group>
  );
};

export default PartRimsSelect;
