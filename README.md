# Selection Manager

This extension will allow you to manage selected text.<br>
The aim of this extension is to increase productivity by unifying set of actions over an text selection.<br>

## Usage

Select a text of a file and open the *editor commands* _(ctrl+shift+P / cmd+shift+P)_ and search for one of the next commands:

#### >Copy Selection
copy the selection in a new file.

---
#### >Move Selection
Move the selection in a new file, results in having the original text deleated.

---
#### >Isolate Selection
Isolate the selection, results in having the content of the document replaced with just the selected text.

---
#### >Search Selection
Search for the selection on *google*.

---
#### >URL Encode Selection
It will replace the selected text with a URL encoded version of it.

---
#### >Base64 Encode Selection
It will replace the selected text with a Base64 encoded version of it.

---
#### >URL Decode Selection
It will replace the selected text with a URL decoded version of it.

---
#### >Base64 Decode Selection
It will replace the selected text with a Base64 decoded version of it.

---
#### >Lowercase Selection
Turns the selected text to lowercase.

---
#### >Uppercase Selection
Turns the selected text to uppercase.

---
#### >Camel to Snake case Selection
The selected camel case text will be turned to snake case _(eg. callAsync -> call\_async)_.

---
#### >Snake to Camel case Selection
The selected snake case text will be turned to camel case _(eg. call\_async -> callAsync)_.

---
#### >Kebab to Camel case Selection
The selected kebab case text will be turned to camel case _(eg. call-async -> callAsync)_.

---
#### >Camel to Kebab case Selection
The selected camel case text will be turned to kebab case _(eg. callAsync -> call-async)_.

---
#### >Kebab to Snake case Selection
The selected kebab case text will be turned to snake case _(eg. call-sync -> call\_async)_.

---
#### >Snake to Kebab case Selection
The selected snake case text will be turned to kebab case _(eg. call\_sync -> call-async)_.

---
#### >Length of Selection
Pops an alert, in the bottom right corner, with the information of the length of the selected text.

---
#### >Number of non ASCII Characters in Selection
Pops an alert, in the bottom right corner, with the information of the number of non ascii characters in the selected text.

---
#### >Reverse Selection
It will reverse the selection, line by line.

---
#### >Log Selection
Puts the selection in a log call, just after the line of the selection. The log will include an log ID. _**Currently only works for JavaScript._

---
#### >Lorem Ipsum on Selection
Replaces the selection with *lorem ipsum*, if nothing is selected will replace the whole line where the cursor is placed.
