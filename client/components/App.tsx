import { getData } from '../apis/data'
import { List } from './List'
import { useQuery } from '@tanstack/react-query'
import { ToggleButton } from './ToggleButton'
import { useState } from 'react'
import { OpenContext } from '../openContext'

function App() {
  const {
    data: dataArray,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['dataList'], queryFn: getData })
  const [allOpen, setAllOpen] = useState(false)

  if (!dataArray && isLoading) return <p>Loading...</p>

  if (isError) return <p>Oops! Something went wrong.</p>

  return (
    <div className="app">
      <ToggleButton setAllOpen={setAllOpen} allOpen={allOpen} />
      <OpenContext.Provider value={allOpen}>
        <List itemsArr={dataArray} isOpen={true} />
      </OpenContext.Provider>
    </div>
  )
}

export default App
