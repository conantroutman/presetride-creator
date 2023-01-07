import { useForm, UseFormReturnType } from '@mantine/form';
import React, { ReactNode } from 'react';
import useStore from '../../../store';
import { IFormValues } from './interfaces';

interface IFormContext {
	id: string;
	form: UseFormReturnType<any>;
}

export const FormContext = React.createContext({} as IFormContext);

const FormProvider = (props: { children: ReactNode; id: string }) => {
	const { children, id } = props;
	const presetRide = useStore((state) =>
		state.presetRides.find((element) => element.id === id)
	);

	const form = useForm<IFormValues>({
		initialValues: presetRide,
	});

	return (
		<FormContext.Provider
			value={{
				id,
				form,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormProvider;
