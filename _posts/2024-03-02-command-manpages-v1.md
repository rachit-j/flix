---
title: RIFT CSA Command Manpage V1.0_CSA
description: The command manual for RIFt's Command-line Interface (CSA)
toc: True
layout: post
---

# RIFT CSA Command Manual

This manual goes over the commands for the RIFT Commands and Command Line Interface (CLI) -- Released for CSA. (CSP Release Coming Soon)

## rift Command

Synopsis `rift` (no args)

This command opens up the RIFT Command Line from anywhere and can be used anywhere. The command sequence is as follows:

```
Initialization checks passed
 ____  __  ____  ____ 
(  _ \(  )(  __)(_  _)
 )   / )(  ) _)   )(  
(__\_)(__)(__)   (__) 
RIFT - Options
1. Deploy new server
2. Update existing server
3. Edit server configuration (NANO)
4. Debug Menu
5. Quit
```

Choose an option by typing the corresponding number and pressing Enter. Don't add a space after the number. If the initialization checks fail, please let Rachit know. The options are listed below:

### 1 - Deploy a New Server

Use this option to deploy a new server on the ec2 instance. You will be prompted with a series of questions that will help you configure your server and take you through all the steps of deployment

### 2 - Update an Existing Server

Use this option to update a pre-existing server on the ec2 instance. This will pull down the latest version of your server and update it. Follow the prompts.

### 3 - Edit Server Configuration

Use this option to edit your nginx file provided you know the name of your nginx file. There's not much this program can do if you don't know it.

### 4 - Debug Menu

This option prints out the working docker containers, the processes on the system, and the status of the nginx server.

## Build Command

This command **must** be run in the project directory /deployments/[server-name] and is used to build your server image. There is no docker-compose down associated with this command, that will be featured in the next update with the rebuild command. However, this command
checks if the used docker port is already taken, avoiding server conflicts.


