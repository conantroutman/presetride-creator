import { Group, Checkbox, Select, Input } from '@mantine/core';
import { useContext } from 'react';
import usePartsData from '../../../../hooks/usePartsData';
import { FormContext } from '../FormProvider';

const PartHoodSelect = () => {
  const { form } = useContext(FormContext);
  const { hoods } = usePartsData();

  return (
    <Input.Wrapper label="Hood">
      <Group>
        <Select data={hoods} {...form.getInputProps('hood.name')} />
        <Checkbox label="Carbon" {...form.getInputProps('hood.cf')} />
      </Group>
    </Input.Wrapper>
  );
};

export default PartHoodSelect;
