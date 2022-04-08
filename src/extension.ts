import * as vscode from 'vscode';
import { range } from './utils';

async function copyManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const document = await vscode.workspace.openTextDocument({
		language: editor.document.languageId,
		content: selectedText
	});

	vscode.window.showTextDocument(document, undefined, true);
}

async function moveManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const selectionStartIndex = editor.selection.start.line;
	const selectionEndIndex = editor.selection.end.line;

	editor.edit(edit => {
		range(selectionStartIndex, selectionEndIndex).forEach(index => {
			const line = editor.document.lineAt(index);
			edit.delete(line.rangeIncludingLineBreak);
		});
	});

	const document = await vscode.workspace.openTextDocument({
		language: editor.document.languageId,
		content: selectedText
	});

	vscode.window.showTextDocument(document, undefined, true);
}

async function searchManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const uri = vscode.Uri.from({
		path: 'search',
		query: `q=${selectedText}`,
		authority: 'google.com',
		scheme: 'https'
	});

	vscode.env.openExternal(uri);
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "selection-manager" is now active!');

	let dispoeCopyManager = vscode.commands.registerCommand('selection-manager.copy', copyManager);
	let dispoeMoveManager = vscode.commands.registerCommand('selection-manager.move', moveManager);
	let dispoeSearchManager = vscode.commands.registerCommand('selection-manager.search', searchManager);

	context.subscriptions.push(dispoeCopyManager, dispoeMoveManager, dispoeSearchManager);
}

export function deactivate() {}
