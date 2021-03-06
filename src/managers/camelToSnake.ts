import * as vscode from 'vscode';
import { camelToSnakeCase } from '../utils';

export async function camelToSnakeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const text = camelToSnakeCase(selectedText);

	const docText = editor.document.getText().replace(selectedText, text);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
