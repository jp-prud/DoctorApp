// import { LoginSocialGoogle, IResolveParams } from "reactjs-social-login";

// import { GoogleLoginButton } from "react-social-login-buttons";

import { Container } from "./styles";
import { useCallback, useState } from "react";

export function LoginScreen() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();

  // const onLoginStart = useCallback(() => {
  //   alert("login start");
  // }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onLogout = useCallback(() => {}, []);

  console.log({ provider, profile, onLogoutSuccess, onLogout });

  return (
    <Container>
      {/* <LoginSocialGoogle
        client_id={
          "573569308325-jifa2prthfhbqa5qjm6e4pg46l4fqqvk.apps.googleusercontent.com"
        }
        onLoginStart={onLoginStart}
        redirect_uri={"/login"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }: IResolveParams) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err: any) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle> */}
    </Container>
  );
}
