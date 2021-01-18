// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ChangeSSHDirectory } from './changeDir';
import { Connect } from './addKey';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "google-cloud-platform-ssh" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('google-cloud-platform-ssh.main', async () => {
		const options: { [key: string]: (context: vscode.ExtensionContext) => Promise<void> } = {
			Connect, ChangeSSHDirectory
		};
		const quickPick = vscode.window.createQuickPick();
		quickPick.items = Object.keys(options).map(label => ({ label }));
		quickPick.onDidChangeSelection(selection => {
			if (selection[0]) {
				options[selection[0].label](context)
					.catch(console.error);
			}
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	}));
}

// this method is called when your extension is deactivated
export function deactivate() { }
