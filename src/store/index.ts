import create from 'zustand';
import produce from 'immer';
import { persist } from 'zustand/middleware';
import { cars } from '../games/mostwanted/cars';
import { IPresetRide } from './types';

function createPresetRide(id: string): IPresetRide {
	const car = cars[0];
	return {
		id,
		name: 'PRESETRIDE',
		car,
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
	};
}

type Store = {
	presetRides: IPresetRide[];
	addPresetRide: (payload: string) => void;
	removePresetRide: (payload: string) => void;
	patchPresetRide: (payload: IPresetRide) => void;
};

const useStore = create<Store>((set) => ({
	presetRides: [],
	addPresetRide: (payload) =>
		set(
			produce((draft) => {
				draft.presetRides.push(createPresetRide(payload));
			})
		),
	removePresetRide: (payload) =>
		set(
			produce((draft: Store) => {
				const index = draft.presetRides.findIndex((el) => el.id === payload);
				draft.presetRides.splice(index, 1);
			})
		),
	patchPresetRide: (payload) =>
		set(
			produce((draft: Store) => {
				const index = draft.presetRides.findIndex((el) => el.id === payload.id);
				draft.presetRides.splice(index, 1, payload);
			})
		),
}));

export default useStore;
