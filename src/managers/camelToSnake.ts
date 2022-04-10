import * as vscode from 'vscode';

export async function camelToSnakeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const snakeText = selectedText.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

	const docText = editor.document.getText().replace(selectedText, snakeText);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
