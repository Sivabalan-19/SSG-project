import React from "react";

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).reder(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="623748812411-her0nqpmmlt4pfds92vlv5nj9el4mmft.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
)