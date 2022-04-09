import * as vscode from 'vscode';
import { copyManager, moveManager, searchManager, base64EncodeManager, urlEncodeManager } from './managers';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "selection-manager" is now active!');

	const dispoeCopyManager = vscode.commands.registerCommand('selection-manager.copy', copyManager);
	const dispoeMoveManager = vscode.commands.registerCommand('selection-manager.move', moveManager);
	const dispoeSearchManager = vscode.commands.registerCommand('selection-manager.search', searchManager);
	const dispoeUrlEncodeManager = vscode.commands.registerCommand('selection-manager.url-encode', urlEncodeManager);
	const dispoeBase64EncodeManager = vscode.commands.registerCommand('selection-manager.base64-encode', base64EncodeManager);

	context.subscriptions.push(
		dispoeCopyManager,
		dispoeMoveManager,
		dispoeSearchManager,
		dispoeUrlEncodeManager,
		dispoeBase64EncodeManager
	);
}

export function deactivate() {}
