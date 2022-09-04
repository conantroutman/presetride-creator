import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
	cars: any[];
	addCar: any;
	removeCar: any;
};

const useCustomCarsStore = create<Store>(
	persist((set) => ({
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
