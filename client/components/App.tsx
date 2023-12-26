import { getData } from '../apis/data'
import { List } from './List'
import { useQuery } from '@tanstack/react-query'

function App() {
  const {
    data: dataArray,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['dataList'], queryFn: getData })

  if (!dataArray && isLoading) return <p>Loading...</p>

  if (isError) return <p>Oops! Something went wrong.</p>

  return (
    <div className="app">
      <List itemsArr={dataArray} />
    </div>
  )
}

export default App
