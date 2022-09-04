export default function sortCarsAlphabetically(a: any, b: any) {
	const nameA = `${a.brand.toUpperCase()} ${a.model.toUpperCase()}`;
	const nameB = `${b.brand.toUpperCase()} ${b.model.toUpperCase()}`;
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0;
}
