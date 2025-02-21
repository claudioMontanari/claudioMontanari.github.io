# A React Portfolio Template for GitHub

A performant, accessible, progressive React portfolio template that uses the [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest).

Add your GitHub username once and all of your info will automatically be updated. Deploy to GitHub pages in a few simple steps.

## [Live Website](https://claudioMontanari.github.io)

[Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

### Development setup

1. Make sure to have docker installed as well as VS code
2. Install the devcontainer extension for VS code
3. Open the project devcontainer. This will have already nodeJS and the required extensions.
4. Git precommit hook will run tests and build before allowing you to commit. 
5. Happy developing!

### Quick util commands

```bash
$ npm run start      # Start server on port 3000
$ npm run test       # Run testcases
$ npm run deploy     # Deploy code
```


### Updating the Projects section

![Projects](/README_images/projects.png)

1. Follow the instructions to update the filteredProjects array ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L88) lines 88-92)

   ```javascript
   /* Projects
   ************************************************************** 
     List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
   */
   export const filteredProjects = ["example-1", "example-2", "example-3"];
   ```

2. Import the projects images you want to use ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L4) lines 4-5) or the default image will be applied

   ```javascript
   // Projects Images (add your images to the images directory and import below)
   import Logo from "./images/logo.svg";
   ```

3. Follow the instructions to update the projectCardImages array ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L94) lines 94-100)

   ```javascript
   // Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
   export const projectCardImages = [
     {
       name: "example-1",
       image: Logo,
     },
   ];
   ```

### Updating the Contact section

![Projects](/README_images/contact.png)

1. The contact form uses [Formspree](https://formspree.io/), create an account and add your endpoint URL ([data.js](https://github.com/mshuber1981/github-react-portfolio-template/blob/main/src/data.js#L102) lines 102-107)

   ```javascript
   /* Contact Info
   ************************************************************** 
     Add your formspree endpoint below.
     https://formspree.io/
   */
   export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
   ```

### Deploy

A helpful guide for Create React App deployments with GitHub Pages can be found [here](https://create-react-app.dev/docs/deployment#github-pages).

1. Update the homepage value ([package.json](https://github.com/mshuber1981/github-react-portfolio-template/blob/0133fcc02ab048fefcf73825d02385ffe27c3721/package.json#L3) line 3)

   ```json
   "homepage": "https://YourUsername.github.io/your-app/",
   ```

2. Run the deploy command

   ```bash
   npm run deploy
   ```

### Customization Options

Checkout the [Wiki](https://github.com/mshuber1981/github-react-portfolio-template/wiki) for additional customization options:

- [Updating the Hero images](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Hero-images)
- [Add a custom Blog icon](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Hero-images#add-a-custom-blog-icon)
- [Updating the About Me section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-About-Me-section)
- [Updating the Skills section](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Skills-section)
- [Add a link to your resume](https://github.com/mshuber1981/github-react-portfolio-template/wiki/Updating-the-Skills-section#add-a-link-to-your-resume)

[Back to top :top:](#a-react-portfolio-template-for-github)

### License

[MIT](https://choosealicense.com/licenses/mit/)
