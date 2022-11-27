import './App.css';
import { GridView, LocalDataProvider } from 'realgrid'
import { columns, fields } from './realgrid-data'
import { useEffect, useState, useRef } from 'react'
import { coinSearch } from './api';
import 'realgrid/dist/realgrid-style.css'

function App() {
  const [dataProvider, setDataProvider] = useState(null)
  const [gridView, setGridView] = useState(null)
  const realgridElement = useRef(null)

  useEffect(() => {
    const container = realgridElement.current
    const dp = new LocalDataProvider(true)
    const gv = new GridView(container)

    gv.setDataSource(dp)
    dp.setFields(fields)
    gv.setColumns(columns)
    
    // setDataProvider(dp)
    // setGridView(gv)
    gv.displayOptions.fitStyle = 'even'
    gv.displayOptions.rowHeight = 40
    searchHandler(dp)
    return () => {
      dp.clearRows()
      gv.destroy()
      dp.destroy()
    }
  }, []);

  const searchHandler = async (dp) => {
    try{
      const {data} = await coinSearch();
      console.log(data);
      
      dp.fillJsonData(data, { fillMode: "set" });
    } catch {

    }
  }

  return (
    <div className='App'>
      <h2>Coin List</h2>
      <div
        style={{ height: '600px', width: '100%' }}
        ref={realgridElement}></div>
    </div>
  )
}

export default App