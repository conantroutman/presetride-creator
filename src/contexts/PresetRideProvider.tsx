import React, { ReactNode, useEffect, useState } from "react";
import { cars, ICarMW } from "../games/mostwanted/cars";
import { Paint } from "../games/mostwanted/colors";

interface IPresetRideContext {
  name: string;
  car: ICarMW;
  parts: IParts;
  paint: Paint;
  update: {
    name: (name: string) => void;
    car: (car: ICarMW) => void;
    parts: {
      bodyKit: (kit: any) => void;
      spoiler: (kit: any) => void;
      hood: (hood: any) => void;
    };
    paint: (paint: Paint) => void;
  };
}

interface IParts {
  bodyKit: any;
  spoiler: any;
  hood: any;
  // rims: any
  // roofScoop: any
}

interface IPresetRideContextProvider {
  children: ReactNode;
}

export const PresetRideContext = React.createContext<IPresetRideContext>({} as IPresetRideContext);

export const PresetRideProvider = (props: IPresetRideContextProvider) => {
  const [name, setName] = useState("NEW_PRESETRIDE");
  const [car, setCar] = useState<ICarMW>(cars[0]);
  const [bodyKit, setBodyKit] = useState<number>(0);
  const [spoiler, setSpoiler] = useState();
  const [hood, setHood] = useState();
  const [paint, setPaint] = useState<Paint>("GLOSS_L1_COLOR01");

  useEffect(() => {
    console.log(car);
  }, []);

  return (
    <PresetRideContext.Provider
      value={{
        name,
        car: car!,
        parts: {
          bodyKit,
          spoiler,
          hood,
        },
        paint,
        update: {
          name: setName,
          car: setCar,
          parts: {
            bodyKit: setBodyKit,
            spoiler: setSpoiler,
            hood: setHood,
          },
          paint: setPaint,
        },
      }}
    >
      {props.children}
    </PresetRideContext.Provider>
  );
};
