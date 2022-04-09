import * as vscode from 'vscode';

export async function base64EncodeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const base64Text = Buffer.from(selectedText).toString('base64');

	const docText = editor.document.getText().replace(selectedText, base64Text);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
