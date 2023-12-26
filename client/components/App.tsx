import { useEffect, useState } from 'react'
import { fetchData } from '../data'
import { DataItem } from '../../models/data'
import { List } from './List'

function App() {
  const [dataArray, setDataArray] = useState([] as DataItem[])
  useEffect(() => {
    async function getData() {
      const data = await fetchData()
      setDataArray(data)
    }
    getData()
  }, [])

  return (
    <div className="app">
      <List itemsArr={dataArray} />
    </div>
  )
}

export default App
