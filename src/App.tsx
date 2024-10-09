
import './App.css'
import QueryContext from './context/QueryContext'
import AppRoutes from './routes'
function App() {
  return (
    <QueryContext>
      <AppRoutes />
    </QueryContext>
  )
}


export default App;
