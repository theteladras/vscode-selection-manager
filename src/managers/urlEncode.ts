import * as vscode from 'vscode';

export async function urlEncodeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const encodedText = encodeURIComponent(selectedText);

	const docText = editor.document.getText().replace(selectedText, encodedText);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
