import React from "react";

function useError(status, error) {
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  return [errorOpen, setErrorOpen, errorMessage, setErrorMessage];
}

export default useError;
