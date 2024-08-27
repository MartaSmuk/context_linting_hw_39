import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './Home.tsx'
import { About } from './About.tsx'
import { Albums } from './Albums.tsx'
import { NotFound } from './NotFound.tsx'
import { SinglePage } from './SinglePage.tsx'

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/albums/:id" element={<SinglePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
