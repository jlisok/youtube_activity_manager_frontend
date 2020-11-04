import * as jwt from "jsonwebtoken";
import moment from "moment";
import {JwtClaimsNames} from "./JwtClaimsNames";
import {handleAuthentication} from "../authentication/handleAuthentication";

export function JwtDecodingAndAuthentication(token) {
    const decodedJwt = jwt.decode(token, {complete: true});
    const jwtExpirationTime = moment.unix(decodedJwt.payload[JwtClaimsNames.EXPIRATION]);
    const ifEverAuthorized = decodedJwt.payload[JwtClaimsNames.IF_EVER_AUTHORIZED];
    handleAuthentication(token, jwtExpirationTime, true, ifEverAuthorized);
}