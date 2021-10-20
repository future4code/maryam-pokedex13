import React from "react";
import { useHistory } from "react-router-dom";
import { goBack } from "../../routes/coordinator";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <>
      <p>Erro 404 - Essa página não existe!</p>
      <button onClick={() => goBack(history)}>Voltar</button>
    </>
  );
};

export default ErrorPage;