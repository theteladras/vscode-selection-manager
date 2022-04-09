import * as vscode from 'vscode';

export async function searchManager(): Promise<void> {
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
