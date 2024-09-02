# VAASI
Demo link: [DEMO](https://mayzelev.github.io/vaasi/)

Simple web application VAASI [API](https://api.exemple.com).
Design - [design](https://www.figma.com/design/yDV4HfG8e8ctpxGBbMmblc/VAASI-International-Group?node-id=263-1408&node-type=&t=wFSP002kpo7WoV3E-0).

# Technologies used

- [React 18.3.1](https://reactjs.org/)
- [Vite](https://vitejs.dev/) - build tool
- [CSS](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - CSS modules
- [React Router](https://reactrouter.com/) - routing library
- [Zustand](https://zustand-demo.pmnd.rs/) - State maneger
- [UUID](https://www.npmjs.com/package/uuid) - Generate unique identifier
- [Yup](https://www.npmjs.com/package/yup) - Validation
- [Formik](https://formik.org/) - Form
- [MUI](https://mui.com/material-ui/getting-started/) - React component library
- [i18next](https://react.i18next.com/) - Translations


# How to run

1. Clone the repository
```
https://github.com/mayzelev/vaasi.git
```

2. Install dependencies
```
npm install
```

3. Run the application
```
npm run dev
```

4. Open the application in the browser
```
http://localhost:5173
```

# Automatic deployment
The project uses GitHub workflows to deploy the application to GitHub Pages automatically. 
The deployment is triggered when a new commit is pushed to the `main` branch. 
The deployment workflow can be found in the [.github/workflows](https://github.com/mayzelev/vaasi/tree/main/.github/workflows) directory.