export const range = (start: number, end: number): number[] => {
	return Array(end - start + 1).fill(null).map((_, idx) => start + idx);
};

export const toCamelCase = (str: string): string => str.toLowerCase().replace(/([-_][a-z])/g, group =>
	group
		.toUpperCase()
		.replace('-', '')
		.replace('_', '')
	);

export const toSnakeCase = (str: string): string => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
