import { useState } from "react";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);
    return (
      <>
        {errorApi ? (
          <ErrorMsg />
        ) : (
          <>
            <View setErrorApi={setErrorApi} {...props} />
          </>
        )}
      </>
    );
  };
};
