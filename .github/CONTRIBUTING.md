# Contributing

Looking to contribute something to wasulabenjamin.github.io? 

**Here's to how you can help.**

Please take a moment to review this document in order to make the contribution process easy and effective for everyone 
involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this 
open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and 
features.

## Using the issue tracker

The [issue tracker][issue_tracker] is the preferred channel for [bug reports][report_bug] and 
[features requests][request_feature] and submitting pull requests, but please respect the following restrictions:
* Please **do not** use the issue tracker for personal support requests.
* Please **do not** derail or troll issues. Keep the discussion on the topic and respect the opinions of others.

## Issues and labels

The bug tracker utilizes several labels to help organize and identify issues. Here's what they represent and how we use 
them:
- `bug` - Something isn't working
- `duplicate` - This issue or pull request already exists
- `enhancement` - New feature or request
- `good` - Good first issue for newcomers
- `help` - Extra attention is needed
- `invalid` - This doesn't seem right
- `question` - Further information is requested
- `wontfix` - This will not be worked on

For a complete look at our labels, see the [wasulabenjamin.github.io labels page][gh_templates_labels]

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful, 
so thanks!

Guidelines for bug reports:
* **Validate your code** &mdash; To ensure your problem isn't caused by a simple error in your own code.
* **Use the GitHub issue search** &mdash; Check if the issue has already been reported.
* **Check if the issue has been fixed** &mdash; Try to reproduce it using the latest `main` or development branch in 
the repository.

A good bug report shouldn't leave contributors needing to chase you up for more information. Please try to be as 
detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) 
experience the problem? Do other browser(s) show the bug differently? What would you expect to be the outcome? All these 
details will help fix any potential bugs.

Example:
> Describe a clear and concise description of what the bug is.
>
> Provide steps to reproduce the behavior.
>
> Provide a clear and concise description of what you expected to happen.
>
> If applicable, add screenshots to help explain your problem.
>
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of 
code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the 
project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. 
Please provide as much detail and context as possible.

## Pull requests

Good pull requests &mdash; *patches, improvements, new features* &mdash; are a fantastic help. They should remain 
focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code), 
otherwise you risk spending a lot of time working on something that the project's developers might not want to merge 
into the project.

Please adhere to the coding guidelines and use them throughout the project (indentation, accurate comments, etc.) and 
any other requirements (such as test coverage).

**Be careful when editing the main branch directly!** Significantly, always try to make pull requests and work from a 
branch.

Adhering to the following process is the best way to get your work included in the project:
1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork, and configure the remotes:

   ```bash
   # Clones your fork of the repo into the current directory
   git clone https://github.com/wasulabenjamin/wasulabenjamin.github.io.git

   # Navigates to the newly cloned directory
   cd wasulabenjamin.github.io

   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/wasulabenjamin/wasulabenjamin.github.io.git
   ```
2. If you cloned a while ago, get the latest changes from `main`:

   ```bash
   git checkout main
   git pull upstream main
   ```
3. Create a new topic branch (off the main development branch) to contain your feature, change, or fix:

   ```bash
   git switch -c <topic-branch-name>
   ```
4. Commit your changes in logical chunks. Please adhere to these [git commit message guidelines][commit_message_guides] 
or your code is unlikely be merged into the `main` branch. Use Git's [interactive rebase][interactive_rebase] feature to 
tidy up your commits before making them public.
5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull --rebase upstream main
   ```
6. Commit changes and push your topic branch up to your fork:

   ```bash
   git commit -a -m "<commit-message>"
   git push -u origin <topic-branch-name>
   ```
7. [Open a Pull Request][pull_request] with a clear title and description against the `main` branch.

## License

By contributing your code, you agree to license your contribution under the [MIT License][license_mit].


<!--
   As you might notice, I'm using markdown "reference style" links for readability.
   Reference links are enclosed in brackets [] instead of parentheses ().
   https://www.markdownguide.org/basic-syntax/
-->
[issue_tracker]: https://github.com/wasulabenjamin/wasulabenjamin.github.io/issues
[report_bug]: https://github.com/wasulabenjamin/wasulabenjamin.github.io/issues/new?template=bug_report.md
[request_feature]: https://github.com/wasulabenjamin/wasulabenjamin.github.io/issues/new?template=feature_request.md
[gh_templates_labels]: https://github.com/wasulabenjamin/wasulabenjamin.github.io/labels
[commit_message_guides]: https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
[interactive_rebase]: https://help.github.com/articles/about-git-rebase/
[pull_request]: https://help.github.com/articles/about-pull-requests/
[license_mit]: https://github.com/wasulabenjamin/wasulabenjamin.github.io/blob/main/LICENSE
