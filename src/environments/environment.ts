// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ecommerceAppApiUrl: "http://localhost:8080/api",
  cientId: '',
  issuer: 'https://dev-98473854.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/login/callback',
  scopes: ['openid', 'profile', 'email']
};

/*
* ecommerceAppApiUrl: "http://ec2-13-233-12-36.ap-south-1.compute.amazonaws.com:10555/api"
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
