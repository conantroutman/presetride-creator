import { Box, Input } from '@mantine/core';
import { InputLabel } from '@mantine/core/lib/Input/InputLabel/InputLabel';
import React, { useContext, useState } from 'react';
import { RimPaints } from '../../../../games/mostwanted/colors';
import { FormContext } from '../FormProvider';
import PaintSwatches from './PaintSwatches';

const RimPaintSelect = () => {
  const { form } = useContext(FormContext);

  return (
    <Input.Wrapper label="Rim Paint">
      <PaintSwatches swatches={RimPaints} {...form.getInputProps('rimPaint')} />
    </Input.Wrapper>
  );
};

export default RimPaintSelect;
