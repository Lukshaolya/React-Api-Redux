import { useState } from "react";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";

export const withErrorApi = View => {


  return props => {
      const [errorApi, setErrorApi] = useState(false);
    return (
      <>
        {errorApi ? <h2>Error</h2>
          : (
            <>
              <View
                setErrorApi={setErrorApi}
                {...props} />
            </>
          )
          }
      </>
    )
  }
}