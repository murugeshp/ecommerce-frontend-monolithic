import { environment } from 'src/environments/environment';
export default {

    oidc: {
        clientId: environment.cientId,
        issuer: environment.issuer,
        redirectUri: environment.redirectUri,
        scopes: environment.scopes
    }

}
