import * as vscode from 'vscode';
import { removeAsciiCharacters } from '../utils';

export async function nonAsciiManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const length = removeAsciiCharacters(selectedText).length;

	vscode.window.showInformationMessage(`Number of non ASCII Characters: ${length}`);
}
