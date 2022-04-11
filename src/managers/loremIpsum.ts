import * as vscode from 'vscode';
import { generateLoremIpsum } from '../utils';

export async function loremIpsumManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const text = generateLoremIpsum();

	const selectedText = editor.document.getText(editor.selection);

	if (!selectedText) {
		const cursorOnLine = editor.selection.start.line;

		const line = editor.document.lineAt(cursorOnLine);

		editor.edit(edit => edit.replace(line.range, text));

		return;
	}

	const docText = editor.document.getText().replace(selectedText, text);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
