import React, { useContext, useEffect, useMemo } from 'react';
import { PresetRideContext } from '../contexts/PresetRideProvider';
import { ICarMW } from '../games/mostwanted/cars';
import { WindshieldTint } from '../games/mostwanted/colors';
import { Hoods, RoofScoops, Spoilers, Wheels } from '../games/mostwanted/parts';
import { decals } from '../games/mostwanted/visuals';

const usePartsData = () => {
  const { car } = useContext(PresetRideContext);

  const bodyKits = useMemo(() => {
    const bodyKitCount = car?.data?.bodyKits !== undefined ? car?.data?.bodyKits : 5;
    const content: string[] = ['Stock'];

    for (let index = 0; index < bodyKitCount; index++) {
      content.push(`Body Kit 0${index + 1}`);
    }

    return content.map((bodyKit, index) => {
      return { value: index.toString(), label: bodyKit };
    });
  }, [car]);

  const hoods = useMemo(() => {
    const data = Hoods.map((hood) => {
      return { value: hood.id.toString(), label: hood.name };
    });

    return [{ value: '0', label: 'Stock' }, ...data];
  }, [car]);

  const roofScoops = useMemo(() => {
    const data = RoofScoops.map((roofScoop) => {
      return { value: roofScoop.id.toString(), label: roofScoop.name };
    });

    return [{ value: '0', label: 'Stock' }, ...data];
  }, [car]);

  const windshieldTint = useMemo(() => {
    const data = WindshieldTint.map((tint) => {
      return { value: tint.id.toString(), label: tint.name };
    });

    return [{ value: 'WINDOW_TINT_STOCK', label: 'Stock' }, ...data];
  }, [car]);

  const rims = useMemo(() => {
    const data = Wheels.map((brand) => {
      return brand.rims.map((rim) => {
        return { value: `${brand.id}_STYLE0${rim.style}`, label: rim.name, group: brand.name };
      });
    });
    const combinedData = new Array().concat(...data);

    return [{ value: '0', label: 'Stock', group: 'Stock' }, ...combinedData];
  }, []);

  const decalsData = useMemo(() => {
    const data = decals.map((decal) => {
      return { value: decal.id.toString(), label: decal.name };
    });

    return [{ value: '0', label: 'Stock' }, ...data];
  }, []);

  return {
    bodyKits,
    hoods,
    roofScoops,
    windshieldTint,
    rims,
    decalsData,
  };
};

export default usePartsData;
