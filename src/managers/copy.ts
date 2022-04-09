import * as vscode from 'vscode';

export async function copyManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const document = await vscode.workspace.openTextDocument({
		language: editor.document.languageId,
		content: selectedText
	});

	vscode.window.showTextDocument(document, undefined, true);
}
