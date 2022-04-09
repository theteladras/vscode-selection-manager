import * as vscode from 'vscode';
import { range } from "../utils";

export async function urlEncodeManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const encodedText = encodeURIComponent(selectedText);

	const selectionStartIndex = editor.selection.start.line;
	const selectionEndIndex = editor.selection.end.line;

	editor.edit(edit => {
		edit.replace
		range(selectionStartIndex, selectionEndIndex).forEach((index, i) => {
			const line = editor.document.lineAt(index);
			if (i === 0) return edit.replace(line.range, encodedText);
			edit.delete(line.rangeIncludingLineBreak);
		});
	});
}
