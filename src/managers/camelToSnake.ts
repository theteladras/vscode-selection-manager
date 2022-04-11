import * as vscode from 'vscode';
import { camelToSnakeCase } from '../utils';

export async function camelToSnakeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const snakeText = camelToSnakeCase(selectedText);

	const docText = editor.document.getText().replace(selectedText, snakeText);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
