# DiscordJS-Tutorials
Contains Command Handler, Separate Unique and Useful Command(s) Script, and Other Tutorial

# Start Up
To begin your Discord.JS journey, go to CmHandler file, and fork the replit link. After that, read the Markdown section, and follow every steps in it.

# Episode
1. Bug Report Command
2. Translate Command
3. Invite Command
4. Trivia Command
5. Multiple Sources Search Commands
6. TicTacToe
7. j
8. Make your bot running 24/7
9. Custom Discord Bot Status

# Warnings
1. This commands code might only effective on this Discord.JS command handler type only. If you want to use it with your own C Handler, please use your own `module.exports` function, and copy paste **ONLY** the code below ```run: async(client, message, args) => {```. Not the entire code with the module.exports things.
2. If there are any errors, please join the [support server](https://discord.gg/6XSjbKBbJT) to get some help. Or, you can search for helps on [Google](https://google.com), [YouTube](https://youtube.com), other [GitHub](https://github.com) repo, or [StackOverflow](https://stackoverflow.com/).
3. Please give a credit, just a simple credit about us if you're using our codes. Just a simple one, like `by AtMostFear`. Or, if you want to support us more, you can give the link => https://bit.ly/amfdsite

# Add Commands
Go to one of the available command folder/file, and copy the entire code inside that file, and add it to the command handler. How? First, go to ./commands/category/ and add the command file with .js at the end of it. Example, `command.js` and paste the code that you have copied before inside that file. I'm recommending you to add the file name exactly the same with the file in GitHub. If in GitHub, the command was written as test.js, please name the file in replit handler as test.js too.

# Add Folder
Folder in this case is command folder category. Example: Moderation Commands folder, Fun Commands folder, Music Commands folder, etc. You can not just add new folder inside ./commands/ before "registering" the folder to the handler. How to add it? Easy, go to ./handler/command.js and edit the `[  "category"  ]` to your new folder name. Example: `[  "category", "moderation, "fun", "music", "etc"  ]` Make sure the file name is the same to what you will write in the ./handler/command.js file. Without writing the folder name in it, the folder and the file inside, won't work.
