export interface DataItem {
  id: string
  name: string
  children?: DataItem[]
}

export interface DataItemDb {
  id: string
  name: string
  parentId?: string
}
