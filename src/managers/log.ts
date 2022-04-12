import * as vscode from 'vscode';
import { getRandomNumberInRange } from '../utils';

export async function logManager(): Promise<void> {
	const editor = vscode.window.activeTextEditor;

	if (!editor) return;

	const selectedText = editor.document.getText(editor.selection);

	const language = vscode.window.activeTextEditor?.document.languageId;

	if (!language) return;

	if (!['javascript'].includes(language)) {
		vscode.window.showInformationMessage(`${language} is currently not supported for this functionality`);
		return;
	}

	const cursorOnLine = editor.selection.start.line;

	const line = editor.document.lineAt(cursorOnLine);

	const indentChars = line.text.split(/\S/g)[0];

		const text = `${line.text}
${indentChars}console.log(\`-------- log start | log id: ${getRandomNumberInRange(1000000, 9999999)} | log time: \${new Date().toISOString()} --------\`);
${indentChars}console.log(${selectedText});
${indentChars}console.log("-------- log end --------");
		`;

	editor.edit(edit => edit.replace(line.range, text));
}
