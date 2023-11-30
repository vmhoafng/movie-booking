type UnknownArrayOrObject = unknown[] | Record<string, unknown>;
export const dirtyValue = (
	dirtyFields: any,
	allValues: any
): UnknownArrayOrObject => {
	if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues;
	return Object.fromEntries(
		Object.keys(dirtyFields).map((key: any) => [
			key,
			dirtyValue(dirtyFields[key], allValues[key]),
		])
	);
};

export function addDays(date: string | number, days: number): Date {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}
