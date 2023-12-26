import { useState } from 'react'
import { DataItem } from '../../models/data'
import { List } from './List'

interface Props {
  item: DataItem
  key: string
}

export function ListItem(props: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { item } = props
  const hasChildren = !!item.children?.length
  return (
    <li
      key={item.id}
      className={hasChildren && isOpen ? 'open' : hasChildren ? 'closed' : ''}
    >
      {hasChildren && (
        <button onClick={() => setIsOpen(!isOpen)}>{item.name}</button>
      )}
      {!hasChildren && <span>{item.name}</span>}
      {item.children?.length && <List itemsArr={item.children} />}
    </li>
  )
}
