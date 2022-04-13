## On Hold
* Interact with markdown file (ctrl+click) mark checkboxes, etc. (requires a language server) 


### Planned

* Use snippets for inline templates
* Connection to Office 365 to sync tasks 
* Rework the whole syntax highlighting (it's a mess)
* More code actions and code lenses (e.g. to pull all open tasks to the current journal entry)

## 1.0.0

* Switching to version 1.0, since it I am using it daily for 5 years now and it seems production ready. 
* Support for scopes has been tested over the last year and is working as intended. See [this explanation](./docs/scopes.md) for details. 
* Added code actions to work with the tasks. You can now complete tasks or copy (shift) them other journal entries.
* [Issue #103](https://github.com/pajoma/vscode-journal/issues/103) Added support for weekly entries 
* [Issue #104](https://github.com/pajoma/vscode-journal/issues/104) Added guidelines to contribute 
* [Issue #102](https://github.com/pajoma/vscode-journal/issues/102), [Issue #101](https://github.com/pajoma/vscode-journal/issues/101) Removed markdown extension for formatting tables
* [Issue #100](https://github.com/pajoma/vscode-journal/issues/100), [Issue #97](https://github.com/pajoma/vscode-journal/issues/97) fixed various issues while syncing notes
* [Issue #91](https://github.com/pajoma/vscode-journal/issues/91) Support for multilines in the settings
* [Issue #77](https://github.com/pajoma/vscode-journal/issues/77) Injecting tasks and memos refactored

## 0.11.2
* [Issue #67](https://github.com/pajoma/vscode-journal/issues/67) Quickfix for typo, which caused configurations to be ignored

## 0.11.0
* Updated dependencies to fix the security vulnerabilities
* Refactured scanning for notes and entries for QuickPickItems. It's now possible to search within all your notes. 
* [Issue #57](https://github.com/pajoma/vscode-journal/issues/57) Label for notes are now denormalized, which makes it easier to search in your notes   
* [Issue #55](https://github.com/pajoma/vscode-journal/issues/55) Whenever we insert a string after a headline, we make sure there is an empty line (to stay markdown compliant)
* [Issue #54](https://github.com/pajoma/vscode-journal/issues/54) Tested the new note dialog
* [Issue #52](https://github.com/pajoma/vscode-journal/issues/52) Fixed two bugs when using date formats in injected strings for tasks and memos
* [Issue #56](https://github.com/pajoma/vscode-journal/issues/56) Removed check for character length for memos


## 0.10.0 
* Updated dependencies to fix the security vulnerabilities
* [Issue #47](https://github.com/pajoma/vscode-journal/issues/47) Changed configuration of shortcuts for printing duration between selected timestamps and the sum of selected numbers, since they interfered with the shortcut for toggling the panel. The shortcuts are now only active when you are in a markdown file and have a multiple selection. Removed the shortcut for printing the time (since it doesn't work with the mentioned workaround). If you need it, find the command 'Journal:Print Time' in your shortcuts settings to enable it again. 
* [Issue #7](https://github.com/pajoma/vscode-journal/issues/7) - Picklist with display of open tasks
* [Issue #8](https://github.com/pajoma/vscode-journal/issues/8) - Picklist with display of recent notes
* [Issue #49](https://github.com/pajoma/vscode-journal/issues/49) - Add warning to settings regarding linebreaks
----

## 0.9.1
* Added support to custom path and filename patterns, see [description of settings](./docs/settings.md) for a description. Completes [issue 18](https://github.com/pajoma/vscode-journal/issues/18) and [issue 20](https://github.com/pajoma/vscode-journal/issues/20)
* Fix for [issue 40](https://github.com/pajoma/vscode-journal/issues/40) (Override of user styles)
* Support for user variables in config settings. This includes a reference to the user's home directory in the base path (see [issue 38](https://github.com/pajoma/vscode-journal/issues/38)) 
* Minor improvements and bug fixes

*Attention*: Don't update the path and file patterns, if you use the vscode-journal-view extension (for now). 

## 0.9
* Added the new command `Print Time` to enter timestamps at cursor position. Shortcut: `Ctrl+J Ctrl+T`. This functionality was originally submitted by @ianmurrays, but didn't make in into the last release. 
* Added the new command `Print elapased hours`, which computes the duration between two seleced timestamps (same format as what "Insert time" prints). Shortcut: `Ctrl+J Ctrl+D`
* Added the new command `Print sum of selected numbers`, which summarizes all selected numbers (I use to see the total time). Shortcut: `Ctrl+J Ctrl+s`
* Added the snippets "task" and "track" (using the table format)
* Activated the markdown extensios for tasks and tables
* [Issue #34](https://github.com/pajoma/vscode-journal/issues/34) Fixed some issues with the syntax highlighting 
* [Issue #32](https://github.com/pajoma/vscode-journal/issues/32) Greatly enhanced the logging (Enable Dev Mode in settings and check Output -> Journal to see what's happening)
* Fixed minor issues with the syntax highlighting
----

## 0.6
* Major refactoring of the codebase to accommodate for the planned scope and flexible paths feature (see [Issue #22](https://github.com/pajoma/vscode-journal/issues/22),  [Issue #18](https://github.com/pajoma/vscode-journal/issues/18),  [Issue #19](https://github.com/pajoma/vscode-journal/issues/19) and  [Issue #20](https://github.com/pajoma/vscode-journal/issues/20)) 
* Syntax highlighting for tasks, keywords and tags (see [Issue #18](https://github.com/pajoma/vscode-journal/issues/18)) 
* New setting to control if pages are open in columns or not (see [Issue #23](https://github.com/pajoma/vscode-journal/issues/23))
* Cursor will now be placed to the end of the opened file to start typing right away (see [Issue #30](https://github.com/pajoma/vscode-journal/issues/30))
* Github user @Gruntfuggly has [created a view for vscode-journal](https://github.com/Gruntfuggly/vscode-journal-view), thanks a lot for this (see [Issue #18](https://github.com/pajoma/vscode-journal/issues/18)). Here's the [extension](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.vscode-journal-view). 

----

### 0.5.0
* Interact with markdown file (ctrl+click) to follow internal links (standard feature of vscode)
* [Issue #6](https://github.com/pajoma/vscode-journal/issues/6) - Linking journal pages with notes
* Fixed smaller bugs
* New configuration options for controlling where memos, tasks, etc. are injected


----

### 0.4.3 (Hotfix)
* Fixed a bug in path resolution  
[Attention]: This bug has been in the released version between 2016-12-29 and 2017-01-04. The last bit of the path was ignored. If your base directory has been "/users/a/b/c", new files have been created in "/users/a/b/2017/01", not in "/users/a/b/c/2017/01". Move your files into the correct folder, otherwise you have to merge by hand. 


### 0.4.2

#### Fixes
* Updated code due to changes in extension API
* Adressed [Issue #10](https://github.com/pajoma/vscode-journal/issues/10) 
* Adding license information  

### 0.4.1

####Fixes
* Refactored code to ease detection of [Issue #9](https://github.com/pajoma/vscode-journal/issues/9) 


### 0.4
#### Enhancements  
* [Issue #4](https://github.com/pajoma/vscode-journal/issues/4) - New command `journal:open`
* Cleaned up code
* [Issue #3](https://github.com/pajoma/vscode-journal/issues/3) - Enhanced memo command, supporting tasks now

#### Fixes
* [Issue #5](https://github.com/pajoma/vscode-journal/issues/5)


----

## 0.3

### Enhancements
- [Issue #1](https://github.com/pajoma/vscode-journal/issues/1) - New command `journal:day` to open a specific day (see Readme)
- Keybindings `ctrl+shift+j` to call this command
- [Issue #2](https://github.com/pajoma/vscode-journal/issues/2) - Update setting tpl, removing the whitespace 
