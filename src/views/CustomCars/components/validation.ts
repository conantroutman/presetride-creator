export function validateModel(value: string, cars: any[]) {
	if (value.length < 1) return 'You must provide a model name';

	if (cars.find((car) => car.data.model === value))
		return 'Model name must be unique';

	return null;
}

export function validateFrontend(value: string, cars: any[]) {
	if (value.length < 1) return 'You must provide a frontend name';

	if (cars.find((car) => car.data.frontend === value))
		return 'Frontend name must be unique';

	return null;
}

export function validatePvehicle(value: string, cars: any[]) {
	if (value.length < 1) return 'You must provide a Pvehicle name';

	if (cars.find((car) => car.data.pvehicle === value))
		return 'Pvehicle name must be unique';

	return null;
}
