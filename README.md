# Google Cloud Platform - SSH

Visual Studio Code extension for connecting to GCP virtual machine instances via Remote SSH.

## Features

- Lightweight, automated connection to GCP instances with `Connect` action
- Directly compatible with the Remote SSH extension

## Requirements

- Linux/macOS system with `ssh-keygen` configured
- Git
- Python
- [Google Cloud Platform SDK](https://cloud.google.com/sdk) with `gcloud` command
- [Remote SSH extension](https://code.visualstudio.com/docs/remote/ssh)

## Use

1. Ensure your current GCP project is set with `gcloud config set project [PROJECTNAME]`
2. Open the command pallete (`Cmd+Shift+P`) and select `Google Cloud Platform - Connect via Remote SSH`
3. Select `Connect` to create an SSH connection with a GCP instance, enter
    - the GCP project name configured in `1.`
    - a SSH key username
    - the IP address of the VM instance you are connecting to (Console->Resources->VM instances on GCP)
    - the name of your SSH keyfile (project name by default)
4. Enter a password for the SSH key-pair as prompted in the VS Code integrated terminal
5. Connect to the newly added host via `Remote SSH` extension (name is IP address)

Change the location of your SSH directory with `ChangeSSHDirectory` action.

## How it works
The extension launches `script.sh` from [this repo](https://github.com/andrewdircks/gcp-vscode-ssh) in the integrated terminal. This creates a SSH key-pair via `ssh-keygen`, adds it to your GCP project globally with `gcloud compute project-info add-metadata`, and configures with Remote SSH manually by editing to the `~/.ssh/config` file used by the extension.

## Known Issues
- Won't work with Windows
- Make sure the location of your SSH keys is set before connecting (most commonly `~/.ssh`)