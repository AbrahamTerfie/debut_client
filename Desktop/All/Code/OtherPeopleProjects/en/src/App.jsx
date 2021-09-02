import './styles/global.css'
import styles from './styles/App.module.css'
import HomePage from './Pages/HomePage'

import { Button } from './components/Button'
import { Note } from './components/Note'
import { Form } from './components/Form'

import { NoteProvider } from './contexts/NoteContext'

function App() {
  return (
    <HomePage/> 
  )
}

export default App
