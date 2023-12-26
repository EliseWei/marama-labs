import { ListItem } from './ListItem'
import { DataItem } from '../../models/data'

interface Props {
  itemsArr: DataItem[]
  isOpen: boolean
}
export function List(props: Props) {
  const { itemsArr, isOpen } = props
  return (
    <ul aria-hidden={!isOpen}>
      {itemsArr &&
        itemsArr.map((item) => {
          return <ListItem key={item.id} item={item} canFocus={isOpen} />
        })}
    </ul>
  )
}
