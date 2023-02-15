# Github Finder App

App to search Github users and display their info. This is part of my React Front To Back 2022 course and is the most up to date version of this project.

This branch of the repository has been refactored to use [ Netlify serverless functions
](https://docs.netlify.com/functions/configure-and-deploy/)
to be able to _proxy_ requests to the Github API, this allows you to keep your Github access token secret.

Any env variable you set in a React app prefixed **REACT_APP** is exposed to the
client in the build. So anyone inspecting the Network Requests for your app will
be able to see your token and use potentially use it.

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
