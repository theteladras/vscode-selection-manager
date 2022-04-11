import * as vscode from 'vscode';

export async function reverseManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const splitByLine = selectedText.split("\n");

	const reversedByLine = splitByLine.map(line => line.split("").reverse().join(""));

	const text = reversedByLine.join("\n");

	const docText = editor.document.getText().replace(selectedText, text);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
