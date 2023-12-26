import { ListItem } from './ListItem'
import { DataItem } from '../../models/data'

interface Props {
  itemsArr: DataItem[]
}
export function List(props: Props) {
  return (
    <ul>
      {props.itemsArr &&
        props.itemsArr.map((item) => {
          return <ListItem key={item.id} item={item} />
        })}
    </ul>
  )
}
