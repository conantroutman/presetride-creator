import { Group, Checkbox, Select, Input } from '@mantine/core';
import { useContext } from 'react';
import usePartsData from '../../../../hooks/usePartsData';
import { FormContext } from '../FormProvider';

const PartRoofScoopSelect = () => {
  const { form } = useContext(FormContext);
  const { roofScoops } = usePartsData();

  const categorySelect = (
    <Select
      defaultValue="STOCK"
      data={[
        { label: 'Stock', value: 'STOCK' },
        { label: 'Offset', value: 'OFFSET' },
        { label: 'Dual', value: 'DUAL' },
      ]}
      {...form.getInputProps('roofScoopStyle')}
      styles={{
        input: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
    />
  );

  return (
    <Input.Wrapper label="Roof Scoop">
      <Group>
        <Select
          data={roofScoops}
          {...form.getInputProps('roofScoop')}
          rightSection={categorySelect}
          rightSectionWidth={100}
        />
        <Checkbox label="Carbon" {...form.getInputProps('roofScoopCF')} />
      </Group>
    </Input.Wrapper>
  );
};

export default PartRoofScoopSelect;
