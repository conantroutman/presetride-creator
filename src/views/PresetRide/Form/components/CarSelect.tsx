import { Select } from "@mantine/core";
import React, { useContext, useMemo } from "react";
import { PresetRideContext } from "../../../../contexts/PresetRideProvider";

import { cars, ICarMW } from "../../../../games/mostwanted/cars";

const CarSelect = () => {
  const { car, update } = useContext(PresetRideContext);

  const data = useMemo(
    () =>
      cars.map((car) => {
        return { value: car.data.model, label: `${car.brand} ${car.model}` };
      }),
    [cars]
  );

  const handleChange = (value: string) => {
    const newCar = cars.find((car) => car.data.model === value);
    if (!newCar) return;

    update.car(newCar);
  };

  return <Select label="Car" data={data} defaultValue={car?.data?.model} onChange={handleChange} />;
};

export default CarSelect;
