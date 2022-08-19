import { CheckIcon, ColorSwatch, Grid, Group } from '@mantine/core';
import React, { useCallback, useMemo } from 'react';
import { IPaint } from '../../../../games/mostwanted/colors';

function propsCompare(prevProps: any, nextProps: any) {
  throw new Error('Function not implemented.');
}

const PaintSwatches = (props: { swatches: IPaint[]; value: string; onChange: (paint: string) => void }) => {
  const { swatches, value, onChange } = props;

  const handleChange = useCallback(
    (paint: string) => {
      onChange(paint);
    },
    [onChange]
  );

  const swatchGrid = useMemo(
    () =>
      swatches.map((swatch) => (
        <Grid.Col span={1} key={swatch.name}>
          <ColorSwatch
            color={swatch.color}
            sx={{ color: '#fff', cursor: 'pointer' }}
            radius="sm"
            onClick={() => handleChange(swatch.name)}
          >
            {swatch.name === value && <CheckIcon width={10} />}
          </ColorSwatch>
        </Grid.Col>
      )),
    [swatches, value]
  );

  return (
    <Grid columns={20} gutter={4}>
      {swatchGrid}
    </Grid>
  );
};

export default React.memo(PaintSwatches);
