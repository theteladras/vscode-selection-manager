export const range = (start: number, end: number): number[] => {
	return Array(end - start + 1).fill(null).map((_, idx) => start + idx);
};

export const snakeToCamelCase = (str: string): string => str.toLowerCase().replace(/([-_][a-z])/g, group =>
	group
		.toUpperCase()
		.replace('-', '')
		.replace('_', '')
	);

export const camelToSnakeCase = (str: string): string => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const kebabToCamel = (str: string) => str.replace(/-./g, x=>x[1].toUpperCase());
