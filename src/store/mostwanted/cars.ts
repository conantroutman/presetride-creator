import produce from 'immer';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CustomCar = {
	brand: string;
	model: string;
	data: {
		model: string;
		frontend: string;
		pvehicle: string;
		spoilerType: string;
		bodyKits: number;
	};
};

type Store = {
	cars: CustomCar[];
	addCar: (car: CustomCar) => void;
	removeCar: (model: string) => void;
};

const useCustomCarsStore = create<Store>()(
	devtools((set) => ({
		cars: [],
		addCar: (payload) =>
			set(
				produce((draft) => {
					draft.cars.push(payload);
				})
			),
		removeCar: (payload) =>
			set(
				produce((draft: Store) => {
					const index = draft.cars.findIndex((el) => el.data.model === payload);
					draft.cars.splice(index, 1);
				})
			),
	}))
);

export default useCustomCarsStore;
