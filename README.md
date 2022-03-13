# Github Finder App

App to search Github users and display their info. This is part of my React Front To Back 2022 course and is the most up to date version of this project.

This branch of the repository has been refactored to use [ Netlify serverless functions
](https://docs.netlify.com/functions/configure-and-deploy/)
to be able to _proxy_ requests to the Github API, this allows you to keep you Github access token secret.

Any env variable you set in a React app prefixed **REACT_APP** is exposed to the
client in the build. So anyone inspecing the Network Requests for you app will
be able to see your token and use it.

Netlify functions run server side so are not exposed to the client. We can
make our client side requests to our **/api/<function_name>** end point and then in
our function make the request to the Github API and send the response we get
back from the Github API to our client React app.

To run the functions in development you will need the [Netlify CLI](https://www.npmjs.com/package/netlify-cli) installed globally on your system.

```bash
npm i -g netlify-cli
```

Then run the project using the Netlify CLI

```bash
netlify dev
```

> **Code Changes** for this branch can be seen in [src/context/github/GithubActions.js](src/context/github/GithubActions.js) and in the [functions](functions) directory.
>
> Configuration for Netlify can be seen in [netlify.toml](netlify.toml)

For running in production then deploy from git in Netlify and link to your
Github repository, make sure to add a GITHUB_TOKEN env variable in Netlify.

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

---

## Usage

Rename **_.env.example_** to **_.env_**

You can use the Github API without a personal token, but if you want to use your token, add it to the .env file

Learn how to create a token [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### Install Netlify cli

```bash
npm i -g netlify-cli
```

### Install Dependencies

```bash
npm install
```

### Run

```bash
netlify dev
```

Tailwind UI created by [Hassib Moddasser](https://twitter.com/hassibmoddasser)
