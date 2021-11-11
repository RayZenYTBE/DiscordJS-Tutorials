# DiscordJS-Tutorials
Contains Command Handler, Separate Unique and Useful Command(s) Script, and Other Tutorial

# Start Up
To begin your Discord.JS journey, go to CmHandler file, and fork the replit link. After that, read the Markdown section, and follow every steps in it.

# Add Commands
Go to one of the available command folder/file, and copy the entire code inside that file, and add it to the command handler. How? First, go to ./commands/category/ and add the command file with .js at the end of it. Example, `command.js` and paste the code that you have copied before inside that file. I'm recommending you to add the file name exactly the same with the file in GitHub. If in GitHub, the command was written as test.js, please name the file in replit handler as test.js too.

# Add Folder
Folder in this case is command folder category. Example: Moderation Commands folder, Fun Commands folder, Music Commands folder, etc. You can not just add new folder inside ./commands/ before "registering" the folder to the handler. How to add it? Easy, go to ./handler/command.js and edit the `[  "category"  ]` to your new folder name. Example: `[  "category", "moderation, "fun", "music", "etc"  ]` Make sure the file name is the same to what you will write in the ./handler/command.js file. Without writing the folder name in it, the folder and the file inside, won't work.
