import React, { useContext } from 'react';
import { PresetRideContext } from '../contexts/PresetRideProvider';
import { ICarMW } from '../games/mostwanted/cars';
import { IFormValues } from '../views/PresetRide/Form/interfaces';

export const useDownloadFile = () => {
	const downloadFile = (formValues: IFormValues) => {
		const element = document.createElement('a');
		element.setAttribute(
			'href',
			'data:text/plain;charset=utf-8,' + encodeURIComponent(endFile(formValues))
		);
		element.setAttribute('download', `${formValues.name}.end`);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	};

	const getSpoiler = (id: string, cf: boolean, car: ICarMW) => {
		if (id === '0') return `${car.data.model}_SPOILER`;

		const style = `SPOILER_STYLE${id.length === 1 ? '0' : ''}${id}`;
		const carbon = cf ? '_CF' : '';
		const type = car.data.spoilerType ? '_' + car.data.spoilerType : '';

		return `${style}${type}${carbon}`;
	};

	const getHood = (hood: any) => {
		if (hood.name === '0') return 'KIT00_HOOD';

		const carbon = hood.cf ? '_CF' : '';

		return `STYLE${hood.name.length === 1 ? '0' : ''}${
			hood.name
		}_HOOD${carbon}`;
	};

	const getRoofScoop = (id: string, cf: boolean, style: string) => {
		if (id === '0') return 'ROOF_STYLE00';

		const carbon = cf ? '_CF' : '';
		const scoopStyle = style !== 'STOCK' ? `_${style}` : '';

		return `ROOF_STYLE${id.length > 1 ? id : '0' + id}${scoopStyle}${carbon}`;
	};

	const getRims = (rims: string, size: number, car: ICarMW) => {
		if (rims === '0') return `${car.data.model}_WHEEL`;

		return `${rims}_${size}_25`;
	};

	const getDecalName = (decal: any) => {
		if (decal?.name === '0') return `""`;

		return `${decal?.name}_${decal?.color}_DECAL`;
	};

	const getVinyl = (vinyl: string) => {
		if (vinyl === 'none') return `""`;
		return vinyl;
	};

	const endFile = (formValues: IFormValues) => {
		const presetRideName = formValues.name;
		const carModel = formValues.car.data.model;
		const pVehicle = formValues.car.data.pvehicle;
		const bodyKit = `KIT0${formValues.bodyKit}`;
		const spoiler = getSpoiler(
			formValues.spoiler,
			formValues.spoilerCF,
			formValues.car
		);
		const hood = getHood(formValues.hood);
		const roofScoop = getRoofScoop(
			formValues.roofScoop,
			formValues.roofScoopCF,
			formValues.roofScoopStyle
		);
		const rims = getRims(formValues.rims, formValues.rimSize, formValues.car);
		const paint = formValues.paint;
		const rimPaint = formValues.rimPaint;
		const windshieldTint = formValues.windshieldTint;
		const vinyl = formValues.vinyl ?? `""`;
		const decals = formValues.decals;
		const vinylColors = formValues.vinylColors;

		const file = `\
[VERSN2]

add_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName}

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Frontend vehicles
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} MODEL ${carModel}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Pvehicle ${pVehicle}

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} AftermarketBodykit ${carModel}_BODY_${bodyKit}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Base ${carModel}_BASE
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Driver ${carModel}_DRIVER
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} FrontBrake ${carModel}_FRONT_BRAKE
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} FrontLeftWindow ${carModel}_FRONT_LEFT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} FrontRightWindow ${carModel}_FRONT_RIGHT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} FrontWheel ${rims}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} FrontWindow ${carModel}_FRONT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Hood ${carModel}_${hood}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Interior ${carModel}_INTERIOR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} LeftBrakelight ${carModel}_LEFT_BRAKELIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} LeftBrakelightGlass ${carModel}_LEFT_BRAKELIGHT_GLASS
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} LeftHeadlight ${carModel}_LEFT_HEADLIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} LeftHeadlightGlass ${carModel}_LEFT_HEADLIGHT_GLASS
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} LeftSideMirror ${carModel}_LEFT_SIDE_MIRROR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} LicensePlate LICENSE_PLATE_STYLE01
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RearBrake ${carModel}_REAR_BRAKE
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RearLeftWindow ${carModel}_REAR_LEFT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RearRightWindow ${carModel}_REAR_RIGHT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RearWindow ${carModel}_REAR_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RightBrakelight ${carModel}_RIGHT_BRAKELIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RightBrakelightGlass ${carModel}_RIGHT_BRAKELIGHT_GLASS
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RightHeadlight ${carModel}_RIGHT_HEADLIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RightHeadlightGlass ${carModel}_RIGHT_HEADLIGHT_GLASS
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RightSideMirror ${carModel}_RIGHT_SIDE_MIRROR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} RoofScoop ${roofScoop}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Spoiler ${spoiler}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} UniversalSpoilerBase ${carModel}_UNIVERSAL_SPOILER_BASE
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} WindshieldTint ${windshieldTint}

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageBody ${carModel}_DAMAGE_0_BODY
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageBushguard ${carModel}_DAMAGE_0_BUSHGUARD
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageCopLights ${carModel}_DAMAGE_0_COP_LIGHTS
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageCopSpoiler ${carModel}_DAMAGE_0_COP_SPOILER
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageFrontBumper ${carModel}_DAMAGE_0_FRONT_BUMPER
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageFrontLeftWindow ${carModel}_DAMAGE_0_FRONT_LEFT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageFrontRightWindow ${carModel}_DAMAGE_0_FRONT_RIGHT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageFrontWheel ${carModel}_DAMAGE_0_FRONT_WHEEL
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageFrontWindow ${carModel}_DAMAGE_0_FRONT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageHood ${carModel}_DAMAGE_0_HOOD
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageLeftBrakelight ${carModel}_DAMAGE_0_LEFT_BRAKELIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageLeftDoor ${carModel}_DAMAGE_0_LEFT_DOOR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageLeftHeadlight ${carModel}_DAMAGE_0_LEFT_HEADLIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageLeftRearDoor ${carModel}_DAMAGE_0_REAR_DOOR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageRearBumper ${carModel}_DAMAGE_0_REAR_BUMPER
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageRearLeftWindow ${carModel}_DAMAGE_0_REAR_LEFT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageRearRightWindow ${carModel}_DAMAGE_0_REAR_RIGHT_WINDOW
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageRightBrakelight ${carModel}_DAMAGE_0_RIGHT_BRAKELIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageRightDoor ${carModel}_DAMAGE_0_RIGHT_DOOR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageRightHeadlight ${carModel}_DAMAGE_0_RIGHT_HEADLIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageRightRearDoor ${carModel}_DAMAGE_0_RIGHT_REAR_DOOR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit KIT_DAMAGES DamageTrunk ${carModel}_DAMAGE_0_TRUNK

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ZERO_DAMAGES ZeroDamageFront ${carModel}_${bodyKit}_DAMAGE0_FRONT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ZERO_DAMAGES ZeroDamageFrontLeft ${carModel}_${bodyKit}_DAMAGE0_FRONTLEFT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ZERO_DAMAGES ZeroDamageFrontRight ${carModel}_${bodyKit}_DAMAGE0_FRONTRIGHT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ZERO_DAMAGES ZeroDamageRear ${carModel}_${bodyKit}_DAMAGE0_REAR
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ZERO_DAMAGES ZeroDamageRearLeft ${carModel}_${bodyKit}_DAMAGE0_REARLEFT
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ZERO_DAMAGES ZeroDamageRearRight ${carModel}_${bodyKit}_DAMAGE0_REARRIGHT

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment0 ${carModel}_ATTACHMENT0
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment1 ${carModel}_ATTACHMENT1
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment2 ${carModel}_ATTACHMENT2
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment3 ${carModel}_ATTACHMENT3
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment4 ${carModel}_ATTACHMENT4
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment5 ${carModel}_ATTACHMENT5
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment6 ${carModel}_ATTACHMENT6
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment7 ${carModel}_ATTACHMENT7
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment8 ${carModel}_ATTACHMENT8
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit ATTACHMENTS Attachment9 ${carModel}_ATTACHMENT9

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit DECAL_SIZES DecalFrontWindow ${carModel}_DECAL_FRONT_WINDOW_WIDE_MEDIUM
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit DECAL_SIZES DecalLeftDoor ${carModel}_${bodyKit}_DECAL_LEFT_DOOR_RECT_MEDIUM
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit DECAL_SIZES DecalLeftQuarter ${carModel}_${bodyKit}_DECAL_LEFT_QUARTER_RECT_MEDIUM
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit DECAL_SIZES DecalRearWindow ${carModel}_DECAL_REAR_WINDOW_WIDE_MEDIUM
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit DECAL_SIZES DecalRightDoor ${carModel}_${bodyKit}_DECAL_RIGHT_DOOR_RECT_MEDIUM
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} BaseKit DECAL_SIZES DecalRightQuarter ${carModel}_${bodyKit}_DECAL_RIGHT_QUARTER_RECT_MEDIUM

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_FRONT_WINDOW DecalSlot0 ${getDecalName(
			decals.windshieldFront
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_REAR_WINDOW DecalSlot0 ${getDecalName(
			decals.windshieldRear
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_LEFT_DOOR DecalSlot0 ${getDecalName(
			decals.doorL[0]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_LEFT_DOOR DecalSlot1 ${getDecalName(
			decals.doorL[1]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_LEFT_DOOR DecalSlot2 ${getDecalName(
			decals.doorL[2]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_LEFT_DOOR DecalSlot3 ${getDecalName(
			decals.doorL[3]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_LEFT_DOOR DecalSlot4 ${getDecalName(
			decals.doorL[4]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_RIGHT_DOOR DecalSlot0 ${getDecalName(
			decals.doorR[0]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_RIGHT_DOOR DecalSlot1 ${getDecalName(
			decals.doorR[1]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_RIGHT_DOOR DecalSlot2 ${getDecalName(
			decals.doorR[2]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_RIGHT_DOOR DecalSlot3 ${getDecalName(
			decals.doorR[3]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_RIGHT_DOOR DecalSlot4 ${getDecalName(
			decals.doorR[4]
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_LEFT_QUARTER DecalSlot0 ${getDecalName(
			decals.quarterPanelL
		)}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Decals DECALS_RIGHT_QUARTER DecalSlot0 ${getDecalName(
			decals.quarterPanelR
		)}

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals VISUAL_SETS BasePaintType ${paint}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals VISUAL_SETS RimsPaintType ${rimPaint}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals VISUAL_SETS VinylColor0 ${
			vinylColors[0]
		}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals VISUAL_SETS VinylColor1 ${
			vinylColors[1]
		}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals VISUAL_SETS VinylColor3 ${
			vinylColors[2]
		}
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals VISUAL_SETS VinylLayer ${vinyl}

update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals HUD CustomHUD STOCK
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals HUD HUDBackingColor ORANGE
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals HUD HUDCharacterColor WHITE
update_collection GLOBAL\\GLOBALB.LZC PresetRides ${presetRideName} Visuals HUD HUDNeedleColor ORANGE\
`;

		return file;
	};

	return {
		downloadFile,
	};
};
