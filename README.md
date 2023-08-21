# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



 <a href={resume} download="Dev-Resume-Doc.pdf"> Download Here </a>
          import resume from './doc/Dev-Resume-Doc.pdf';


          .header-nav{
    height:89px;
    width: 100%;
    padding:0 2rem;
    background-color: var(--maingold);
    color:var(--mainWhite);
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
  
  nav a{
    margin: 0 2rem;
   color: var(--mainWhite);
   text-decoration: none;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 1.3rem;
  }
   .nav-btn{
    padding: 5px;
    cursor:pointer;
    background-color: transparent;
    color:var(--mainWhite);
    border:none;
    outline:none;
    visibility: hidden;
    opacity:0;
    font-size:1.8rem;
  }
  /*  FOR NARBAR */
  @media only screen and (max-width:780px) {
    .nav-btn{
        visibility: visible;
        opacity:2;
      }
     .header-nav nav{
        position:fixed;
        top:0;
        left:0;
        height:100%;
        width:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:20px;
        background-color: var(--maingold);
        transition:1s;
        transform:translateY(-100vh);
      }
      .responsive_nav{
        transform:none;
        
      }
      .nav-link .nav-close-btn{
        position:absolute;
        top:1rem;
        right:0.4rem;
      }
  }

 
