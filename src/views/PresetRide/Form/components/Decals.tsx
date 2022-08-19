import { SimpleGrid, Switch } from '@mantine/core';
import React from 'react';
import DecalSelect from './DecalSelect';

const Decals = () => {
  return (
    <SimpleGrid cols={2}>
      <DecalSelect formInputName="windshieldFront" label="Front Windshield" />
      <DecalSelect formInputName="windshieldRear" label="Rear Windshield" />
      <DecalSelect formInputName="doorL.0" label="Left Door 1" />
      <DecalSelect formInputName="doorR.0" label="Right Door 1" />
      <DecalSelect formInputName="doorL.1" label="Left Door 2" />
      <DecalSelect formInputName="doorR.1" label="Right Door 2" />
      <DecalSelect formInputName="doorL.2" label="Left Door 3" />
      <DecalSelect formInputName="doorR.2" label="Right Door 3" />
      <DecalSelect formInputName="doorL.3" label="Left Door 4" />
      <DecalSelect formInputName="doorR.3" label="Right Door 4" />
      <DecalSelect formInputName="doorL.4" label="Left Door 5" />
      <DecalSelect formInputName="doorR.4" label="Right Door 5" />
      <DecalSelect formInputName="doorL.5" label="Left Door 6" />
      <DecalSelect formInputName="doorR.5" label="Right Door 6" />
      <DecalSelect formInputName="quarterPanelL" label="Left Quarter Panel" />
      <DecalSelect formInputName="quarterPanelR" label="Right Quarter Panel" />
    </SimpleGrid>
  );
};

export default Decals;
