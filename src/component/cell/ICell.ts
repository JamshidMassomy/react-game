export interface ICell {
  onCellClick: (rowIndex: number, columnIndex: number) => any
  isAlive: boolean
  // key: any
}
