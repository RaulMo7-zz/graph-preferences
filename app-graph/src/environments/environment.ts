// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  googleSearchUrl: 'https://www.googleapis.com/customsearch/v1',
  firebaseConfig : {
    apiKey: "AIzaSyDVLRwGg64oTKNZAfjB8TbxvFioML3jyWU",
    authDomain: "alkanza-project.firebaseapp.com",
    databaseURL: "https://alkanza-project.firebaseio.com",
    projectId: "alkanza-project",
    storageBucket: "alkanza-project.appspot.com",
    messagingSenderId: "204670033764"
  }
};
