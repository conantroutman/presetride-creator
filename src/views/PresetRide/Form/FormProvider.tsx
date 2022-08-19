import { useForm, UseFormReturnType } from '@mantine/form';
import React, { ReactNode } from 'react';
import { IFormValues } from './interfaces';

interface IFormContext {
  form: UseFormReturnType<any>;
}

export const FormContext = React.createContext({} as IFormContext);

const FormProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  const form = useForm<IFormValues>({
    initialValues: {
      name: 'PRESETRIDE',
      bodyKit: '0',
      hood: {
        name: '0',
        cf: false,
      },
      roofScoop: '0',
      roofScoopCF: false,
      roofScoopStyle: 'STOCK',
      spoiler: '0',
      spoilerCF: false,
      rims: '0',
      rimSize: 20,
      paint: 'GLOSS_L1_COLOR01',
      rimPaint: `""`,
      windshieldTint: 'WINDOW_TINT_STOCK',
      decals: {
        windshieldFront: {
          name: '0',
          color: 'BLACK',
        },
        windshieldRear: {
          name: '0',
          color: 'BLACK',
        },
        doorL: [
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
        ],
        doorR: [
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
          {
            name: '0',
            color: 'BLACK',
          },
        ],
        quarterPanelL: {
          name: '0',
          color: 'BLACK',
        },
        quarterPanelR: {
          name: '0',
          color: 'BLACK',
        },
      },
      vinyl: '',
      vinylColors: ['VINYL_L1_COLOR01', 'VINYL_L1_COLOR03', 'VINYL_L1_COLOR01'],
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <FormContext.Provider
      value={{
        form,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
