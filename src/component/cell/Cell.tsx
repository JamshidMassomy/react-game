/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from 'react'
import './CellStyle.scss'
import { ICell } from './ICell'

const MemorizedCell: React.FC<ICell> = ({ onCellClick, isAlive }) => {
  return (
    <div
      className={`cell ${isAlive ? 'alive' : 'dead'}`}
      onClick={onCellClick as any}
    />
  )
}

export default React.memo(MemorizedCell)
