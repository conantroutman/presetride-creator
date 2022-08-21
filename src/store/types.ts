import { ICarMW } from '../games/mostwanted/cars';

export interface IDecalSlot {
	name: string | null;
	color: 'BLACK' | 'WHITE';
}

export interface IPresetRide {
	id: string;
	name: string;
	car: ICarMW;
	bodyKit: string;
	hood: {
		name: string;
		cf: boolean;
	};
	roofScoop: string;
	roofScoopCF: boolean;
	roofScoopStyle: string;
	spoiler: string;
	spoilerCF: boolean;
	rims: string;
	rimSize: number;
	paint: string;
	rimPaint: string;
	windshieldTint: string;
	decals: {
		windshieldFront: IDecalSlot;
		windshieldRear: IDecalSlot;
		doorL: IDecalSlot[];
		doorR: IDecalSlot[];
		quarterPanelL: IDecalSlot;
		quarterPanelR: IDecalSlot;
	};
	vinyl: string;
	vinylColors: string[];
	user: {
		firstName: string;
		lastName: string;
	};
}
