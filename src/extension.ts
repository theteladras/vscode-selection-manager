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
} from './managers';

export function activate(context: vscode.ExtensionContext) {
	console.log(
		'Congratulations, your extension "selection-manager" is now active!'
	);

	const dispoeCopyManager = vscode.commands.registerCommand(
		'selection-manager.copy',
		copyManager
	);
	const dispoeMoveManager = vscode.commands.registerCommand(
		'selection-manager.move',
		moveManager
	);
	const dispoeIsolateManager = vscode.commands.registerCommand(
		'selection-manager.isolate',
		isolateManager
	);
	const dispoeSearchManager = vscode.commands.registerCommand(
		'selection-manager.search',
		searchManager
	);
	const dispoeUrlEncodeManager = vscode.commands.registerCommand(
		'selection-manager.url-encode',
		urlEncodeManager
	);
	const dispoeBase64EncodeManager = vscode.commands.registerCommand(
		'selection-manager.base64-encode',
		base64EncodeManager
	);
	const dispoeUrlDecodeManager = vscode.commands.registerCommand(
		'selection-manager.url-decode',
		urlDecodeManager
	);
	const dispoeBase64DecodeManager = vscode.commands.registerCommand(
		'selection-manager.base64-decode',
		base64DecodeManager
	);
	const disposeLowercaseManager = vscode.commands.registerCommand(
		'selection-manager.lowercase',
		lowercaseManager
	);
	const disposeUppercaseManager = vscode.commands.registerCommand(
		'selection-manager.uppercase',
		uppercaseManager
	);
	const disposeCamelToSnakeManager = vscode.commands.registerCommand(
		'selection-manager.camel-to-snake',
		camelToSnakeManager
	);

	context.subscriptions.push(
		dispoeCopyManager,
		dispoeMoveManager,
		dispoeSearchManager,
		dispoeUrlEncodeManager,
		dispoeBase64EncodeManager,
		dispoeUrlDecodeManager,
		dispoeBase64DecodeManager,
		disposeLowercaseManager,
		disposeUppercaseManager,
		disposeCamelToSnakeManager
	);
}

export function deactivate() {}
