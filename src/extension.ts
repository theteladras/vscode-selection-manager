import * as vscode from 'vscode';
import { copyManager, moveManager, searchManager, urlEncodeManager } from './managers';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "selection-manager" is now active!');

	let dispoeCopyManager = vscode.commands.registerCommand('selection-manager.copy', copyManager);
	let dispoeMoveManager = vscode.commands.registerCommand('selection-manager.move', moveManager);
	let dispoeSearchManager = vscode.commands.registerCommand('selection-manager.search', searchManager);
	let dispoeUrlEncodeManager = vscode.commands.registerCommand('selection-manager.url-encode', urlEncodeManager);

	context.subscriptions.push(
		dispoeCopyManager,
		dispoeMoveManager,
		dispoeSearchManager,
		dispoeUrlEncodeManager
	);
}

export function deactivate() {}
