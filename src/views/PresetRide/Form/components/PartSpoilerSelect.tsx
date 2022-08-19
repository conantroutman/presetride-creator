import { Group, Checkbox, Select, Input } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React, { useContext, useMemo, useState } from 'react';
import { Spoilers } from '../../../../games/mostwanted/parts';
import usePartsData from '../../../../hooks/usePartsData';
import { FormContext } from '../FormProvider';

type SpoilerCategories = keyof typeof Spoilers;

const PartSpoilerSelect = () => {
  const { form } = useContext(FormContext);
  const [category, setCategory] = useState<SpoilerCategories>('sport');

  const handleCategoryChange = (value: string) => {
    setCategory(value as SpoilerCategories);
  };

  const data = useMemo(() => {
    const options = Spoilers[category].map((spoiler) => {
      return { value: String(spoiler.id), label: spoiler.name };
    });

    //form.setFieldValue('spoiler', '0');

    return [{ value: '0', label: 'Stock' }, ...options];
  }, [category]);

  const categorySelect = (
    <Select
      defaultValue="sport"
      data={[
        {
          value: 'sport',
          label: 'Sport',
        },
        {
          value: 'tuner',
          label: 'Tuner',
        },
      ]}
      styles={{
        input: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
      onChange={handleCategoryChange}
    />
  );

  return (
    <Input.Wrapper label="Spoiler">
      <Group>
        <Select data={data} {...form.getInputProps('spoiler')} rightSection={categorySelect} rightSectionWidth={100} />
        <Checkbox label="Carbon" {...form.getInputProps('spoilerCF')} />
      </Group>
    </Input.Wrapper>
  );
};

export default PartSpoilerSelect;
