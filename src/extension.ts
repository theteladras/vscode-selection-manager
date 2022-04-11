import * as vscode from 'vscode';
import {
	copyManager,
	moveManager,
	searchManager,
	base64EncodeManager,
	urlEncodeManager,
	urlDecodeManager,
	base64DecodeManager,
	isolateManager,
	lowercaseManager,
	uppercaseManager,
	camelToSnakeManager,
	snakeToCamelManager,
	lengthManager,
	kebabToCamelManager,
	camelToKebabManager,
	kebabToSnakeManager,
	loremIpsumManager,
} from './managers';
import { snakeToKebabManager } from './managers/snakeToKebab';

export function activate(context: vscode.ExtensionContext) {
	console.log(
		'Congratulations, your extension "selection-manager" is now active!'
	);

	const dispose: [string, () => Promise<void>][] = [
		['selection-manager.copy', copyManager],
		['selection-manager.move', moveManager],
		['selection-manager.isolate', isolateManager],
		['selection-manager.search', searchManager],
		['selection-manager.url-encode', urlEncodeManager],
		['selection-manager.base64-encode', base64EncodeManager],
		['selection-manager.url-decode', urlDecodeManager],
		['selection-manager.base64-decode', base64DecodeManager],
		['selection-manager.lowercase', lowercaseManager],
		['selection-manager.uppercase', uppercaseManager],
		['selection-manager.camel-to-snake', camelToSnakeManager],
		['selection-manager.snake-to-camel', snakeToCamelManager],
		['selection-manager.kebab-to-camel', kebabToCamelManager],
		['selection-manager.camel-to-kebab', camelToKebabManager],
		['selection-manager.kebab-to-snake', kebabToSnakeManager],
		['selection-manager.snake-to-kebab', snakeToKebabManager],
		['selection-manager.length', lengthManager],
		['selection-manager.loremIpsum', loremIpsumManager],
	];

	dispose.forEach(([key, manager]) => context.subscriptions.push(vscode.commands.registerCommand(key, manager)));
}

export function deactivate() { }
