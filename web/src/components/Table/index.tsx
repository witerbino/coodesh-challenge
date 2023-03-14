import { formatMoney } from "../../utils";
import { useSales } from "../../hooks/useSales"; 

import './style.css';

export function Table() {
  const { sales } = useSales()

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__th">Tipo</th>
          <th className="table__th">Data</th>
          <th className="table__th">Produto</th>
          <th className="table__th">Valor</th>
          <th className="table__th">Vendendor</th>
        </tr>
      </thead>
      <tbody className="table-tbody">
        {sales && sales.map((sale) => {
          return (
            <tr className="table__tr">
              <td className="table__td">{sale.type}</td>
              <td className="table__td">{sale.date}</td>
              <td className="table__td">{sale.product}</td>
              <td className="table__td w-[150px]">
                {formatMoney(sale.value)}
              </td>
              <td className="table__td">{sale.seller}</td>
            </tr>
          )
        })}
      </tbody>
    </table>

  )
}