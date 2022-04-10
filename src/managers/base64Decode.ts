import * as vscode from 'vscode';

export async function base64DecodeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const base64DecodedText = Buffer.from(selectedText, 'base64').toString('utf8');

	const docText = editor.document.getText().replace(selectedText, base64DecodedText);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
