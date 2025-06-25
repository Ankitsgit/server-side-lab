
```js
•
Versioning is Important: Understanding versioning is a very important topic from a security point of view. It can potentially compromise your server if you are not cautious.
•
Version Number Structure: Version numbers typically have three parts: FIRST.SECOND.THIRD (e.g., 4.18.2).
◦
Third Part (PATCH): This is the last part. It signifies minor fixes. Updates to this part are typically optional and involve very small changes or minor bug fixes that don't significantly affect functionality. If you see only this number change (e.g., 4.18.2 to 4.18.3), it's a minor fix.
◦
Second Part (MINOR): This part indicates recommended bug fixes or security fixes. It can also include small new features. When this number changes (e.g., 4.18.x to 4.19.x), it signifies a critical bug fix or a recommended update you should ideally perform.
◦
First Part (MAJOR): This is the most important part. It represents a major release and a breaking update. Updating to a new major version (e.g., 4.x.x to 5.x.x) means the code written for the previous major version may not run or will likely break your existing code.
•
Major Updates (First Part): These updates should be done very cautiously. You should not update the major version in an existing application built on an older major version, as it will likely break. It's recommended mainly for building a completely new application. Before updating, you must review the documentation for the new major version to understand the breaking changes.
•
Version Specifiers in package.json:
◦
Caret Symbol (^): This symbol (e.g., ^4.18.2) means "compatible with version". It tells npm to lock the major version (the first number) but automatically update to the latest recommended (minor) and minor fix (patch) versions. It will update 4.18.2 to 4.19.x or 4.18.x but will not update to 5.0.0 or higher. This automatically updates recommended and minor fixes.
◦
Tilde Symbol (~): This symbol (e.g., ~4.18.2) is described as "approximately equivalent to version". It typically allows npm to only update the last part (patch), locking the major and minor versions. It will update 4.18.2 to 4.18.3 but not to 4.19.1 or higher. It only automatically updates minor fixes.
◦
Exact Version: If no symbol is present (e.g., 4.18.2), the dependency is locked to that exact version. It will not automatically update, even for minor or recommended fixes.
◦
Ranges: You can specify version ranges (e.g., > 1.0, 1.0.0 - 2.999.999, >=1.0.0 <2.1.2). Using ranges across major versions (like 4.0 to 5.1) is risky as it allows major updates which can break code. It's better practice to potentially lock to a range within a major version (like 4.0 to 4.9.9).
◦
latest: NEVER use latest. If you specify latest, npm will always pull the very newest version, including major releases. This is not a good thing as it can cause your code to suddenly stop working when a new major version is released.
•
Installing Specific Versions: You can install a specific version using npm install package-name@version-number (e.g., npm install express@4.17.2).
•
Checking for Updates/Issues: Before updating versions, especially major or recommended ones, check the changelog (history) of the package to see what changes were made. Also, check for known issues with the latest version.
•
Careful Updates: Be very careful when updating versions, particularly the major version. Always review what changes have been made and whether they could break your existing code.