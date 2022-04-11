import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
	wordsPerSentence: {
	  max: 16,
	  min: 3
	}
  });

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

export const kebabToCamel = (str: string): string => str.replace(/-./g, x=>x[1].toUpperCase());

export const camelToKebab = (str: string): string => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

export const kebabToSnake = (str: string): string => str.replace(/-/g, "_");

export const snakeToKebab = (str: string): string => str.replace(/_/g, "-");

export const generateLoremIpsum = (): string => lorem.generator.generateRandomSentence();
