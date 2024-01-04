import { useState } from 'react'
import { DataItem } from '../../models/data'
import { List } from './List'
import { OpenContext } from '../openContext'

interface Props {
  item: DataItem
  key: string
  canFocus: boolean
}

export function ListItem(props: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { item, canFocus } = props
  const hasChildren = !!item.children?.length
  return (
    <OpenContext.Consumer>
      {allOpen => {
        const calculatedOpen = isOpen || allOpen
        return (
          <li
            key={item.id}
            className={hasChildren && calculatedOpen ? 'open' : hasChildren ? 'closed' : ''}
          >
            {hasChildren && (
              <button
                tabIndex={canFocus ? undefined : -1}
                onClick={() => setIsOpen(!isOpen)}
              >
                {item.name}
              </button>
            )}
            {!hasChildren && <span>{item.name}</span>}
            {item.children?.length && (
              <List itemsArr={item.children} isOpen={calculatedOpen} />
            )}
          </li>
        )}
      }
    </OpenContext.Consumer>
  )
}
