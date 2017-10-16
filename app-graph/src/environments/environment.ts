// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  googleSearch: {
    url: 'https://www.googleapis.com/customsearch/v1',
    cx: '005213914420887915706:exkdhdndles',
    apiKey: 'AIzaSyC9fUiSMVnk7tAFIa1WQZ3V_tl8Jlts6iQ'
  },
  qwantUrl:'https://api.qwant.com/api/search/images',
  firebaseConfig : {
    apiKey: "AIzaSyDVLRwGg64oTKNZAfjB8TbxvFioML3jyWU",
    authDomain: "alkanza-project.firebaseapp.com",
    databaseURL: "https://alkanza-project.firebaseio.com",
    projectId: "alkanza-project",
    storageBucket: "alkanza-project.appspot.com",
    messagingSenderId: "204670033764"
  }
};
