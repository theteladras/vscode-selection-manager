import * as vscode from 'vscode';
import { kebabToSnake } from '../utils';

export async function kebabToSnakeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const camelText = kebabToSnake(selectedText);

	const docText = editor.document.getText().replace(selectedText, camelText);

	editor.edit(edit => {
		edit.replace(new vscode.Range(0, 0, editor.document.lineCount, 0), docText);
	});
}
