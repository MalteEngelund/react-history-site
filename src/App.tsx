import { BrowserRouter, Route, Routes } from 'react-router'
import './styles/main.scss'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { TodayPage } from './pages/TodayPage'
import { ByDatePage } from './pages/ByDatePage'
import { SincePage } from './pages/SincePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<TodayPage />} />
            <Route path= '/by-date' element={<ByDatePage />} />
            <Route path='/since' element={<SincePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
