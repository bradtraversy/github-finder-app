# Github Finder App

App to search Github users and display their info. This is part of my React Front To Back 2022 course and is the most up to date version of this project.

---

### Bug Fixes, corrections and code FAQ

The repository code here on the main branch has been updated due to bugs and issues found by students since the course was released.
If you are looking for exact code from the course then please check out the [originalcoursecode branch](https://github.com/bradtraversy/github-finder-app/tree/originalcoursecode) of this repository.

The updates here aim to be a reference and resource for common questions asked
by students in the Udemy Q&A and for those wishing to make corrections to the
project.

#### Q: How do I remove the user stats scroll bars that show on mobile devices

Code changes for this fix can be seen in [User.jsx](src/pages/User.jsx)

#### BUG: I can't see the alert text

Most likely you have the default light theme provided by DaisyUI. The theme is
set based on a `prefers-colorscheme` media query, so you may have a light theme
if you have a light browser theme or OS theme. In which case you won't see the
text in the alert show.
Code changes to fix this can be seen in [Alert.jsx](src/components/layout/Alert.jsx)
The changes here use a [ DaisyUI Alert component ](https://daisyui.com/components/alert/) so will adapt with a change in theme.
We also now conditionally set the element visibility to **'visible'** or
**'hidden'** rather than conditionally render, which prevents content shift when
the alert shows for a smoother UX.

#### Q: Why doesn't Craco work?

You don't need to use craco if you are using react-scripts version 5 or greater.

When Brad recorded the course react-scripts was at version 4 and didn't support postcss, now react-scripts is at version 5 and does support postcss.
So just check what version of react-scripts you have...

    npm list react-scripts

If it's at version 5 or greater then follow the [ Tailwind version 3 ](https://tailwindcss.com/docs/guides/create-react-app) docs to setup.

If react-scripts is at version 4 then follow the [ Tailwind version 2 ](https://v2.tailwindcss.com/docs/guides/create-react-app) docs to setup, which is what you see Brad doing in the course.

#### BUG: Linking to users websites

Some users from Github have already prefixed their websites with `http://` or
`https://` so we need to check in [User.jsx](src/pages/User.jsx) if their
website url starts with `http` before constructing the external link.
Code changes can be see in [User.jsx](src/pages/User.jsx#L48)

#### BUG: Light theme RepoItem background is too dark

The theme is set based on a `prefers-colorscheme` media query, so you may have a light theme
if you have a light browser theme or OS theme.
When the browser's preferred color scheme is light, the gray background is too dark on the RepoItem component, and the content is not visible.

Using `base-200` and `base-300` backgrounds, will make the component's background change according to the browser's preference.

> Code changes can be seen in
> [RepoItem.jsx](src/components/repos/RepoItem.jsx#L17)

---

## Usage

Rename **_.env.example_** to **_.env_**

You can use the Github API without a personal token, but if you want to use your token, add it to the .env file

Learn how to create a token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### Install Dependencies

```
npm install
```

### Run

```
npm start
```

Tailwind UI created by [Hassib Moddasser](https://twitter.com/hassibmoddasser)
