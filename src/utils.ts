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

export const camelToKebab = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

export const kebabToSnake = (str: string) => str.replace(/-/g, "_");

export const snakeToKebab = (str: string) => str.replace(/_/g, "-");
