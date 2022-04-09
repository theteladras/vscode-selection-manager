import * as vscode from 'vscode';
import { range } from "../utils";

export async function moveManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const selectionStartIndex = editor.selection.start.line;
	const selectionEndIndex = editor.selection.end.line;

	editor.edit(edit => {
		range(selectionStartIndex, selectionEndIndex).forEach(index => {
			const line = editor.document.lineAt(index);
			edit.delete(line.rangeIncludingLineBreak);
		});
	});

	const document = await vscode.workspace.openTextDocument({
		language: editor.document.languageId,
		content: selectedText
	});

	vscode.window.showTextDocument(document, undefined, true);
}
