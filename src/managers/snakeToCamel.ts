import * as vscode from 'vscode';
import { toCamelCase } from '../utils';

export async function snakeToCamelManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const camelText = toCamelCase(selectedText);

	const docText = editor.document.getText().replace(selectedText, camelText);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
