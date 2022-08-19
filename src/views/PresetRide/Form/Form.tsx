import {
  Accordion,
  Box,
  Button,
  Checkbox,
  ColorInput,
  Group,
  InputWrapper,
  Select,
  Slider,
  Stack,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useContext } from 'react';
import { PresetRideProvider } from '../../../contexts/PresetRideProvider';
import { useDownloadFile } from '../../../hooks/useDownloadFile';
import usePartsData from '../../../hooks/usePartsData';
import CarSelect from './components/CarSelect';
import Decals from './components/Decals';
import PaintSelect from './components/PaintSelect';
import PartHoodSelect from './components/PartHoodSelect';
import PartRimsSelect from './components/PartRimsSelect';
import PartRoofScoopSelect from './components/PartRoofScoopSelect';
import PartSpoilerSelect from './components/PartSpoilerSelect';
import RimPaintSelect from './components/RimPaintSelect';
import VinylColorSelect from './components/VinylColorSelect';
import VinylSelect from './components/VinylSelect';
import WindshieldTintSelect from './components/WindshieldTintSelect';
import { FormContext } from './FormProvider';
import { IFormValues } from './interfaces';

const Form = () => {
  const { form } = useContext(FormContext);
  const { bodyKits } = usePartsData();
  const { downloadFile } = useDownloadFile();

  return (
    <Box sx={{ maxWidth: 600 }}>
      <form
        onSubmit={form.onSubmit((values: any) => {
          console.log(form.getInputProps('decals.doorL.1.name'));
          console.log(values);
          downloadFile(values);
        })}
      >
        <Stack>
          <TextInput label="Name" {...form.getInputProps('name')} />
          <CarSelect />
          <Accordion multiple defaultValue={['parts']}>
            <Accordion.Item value="parts">
              <Accordion.Control>Parts</Accordion.Control>
              <Accordion.Panel>
                <Select label="Body Kit" data={bodyKits} {...form.getInputProps('bodyKit')} />
                <PartHoodSelect />
                <PartRoofScoopSelect />
                <PartSpoilerSelect />
                <PartRimsSelect />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="colors">
              <Accordion.Control>Colors</Accordion.Control>
              <Accordion.Panel>
                <PaintSelect />
                <RimPaintSelect />
                <WindshieldTintSelect />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="decals">
              <Accordion.Control>Decals</Accordion.Control>
              <Accordion.Panel>
                <VinylSelect />
                <VinylColorSelect />
                <Decals />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Button type="submit">Download Script</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
