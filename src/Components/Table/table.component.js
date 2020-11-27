import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from "./../../colums";
import { server_data } from "./../../django_data";
import "./table.styles.css"


export const DataTable = () => {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => server_data, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <div className='table-container'>
    <table className="table table-dark table-striped table-hover " {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
    </div>
  )
}
