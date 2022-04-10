import * as vscode from 'vscode';

export async function urlDecodeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const decodeText = decodeURIComponent(selectedText);

	const docText = editor.document.getText().replace(selectedText, decodeText);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
