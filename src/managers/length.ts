import * as vscode from 'vscode';

export async function lengthManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const length = selectedText.length;

	vscode.window.showInformationMessage(`The length of the selection is: ${length}`);
}
