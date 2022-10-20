import React, { useEffect } from "react";
import { api } from "../../../services/api";
import { TransactionsTableContainer } from "./styles";

const TransactionsTable = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <TransactionsTableContainer>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dev Web</td>
            <td className="deposit">R$300</td>
            <td>Development</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Dev Web</td>
            <td className="withdraw">-R$300</td>
            <td>Development</td>
            <td>20/02/2022</td>
          </tr>
        </tbody>
      </table>
    </TransactionsTableContainer>
  );
};

export default TransactionsTable;
