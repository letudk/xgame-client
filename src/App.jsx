import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation, OtherHouses } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return ( <>
    <ModeToggle/> <hr></hr>
    <h1>Hello</h1>
    <Button variant='contained'>Hello world</Button>
    <Button variant='outlined'>OutLine</Button>
    <Typography variant='body' >TEST TYPOGRAPHY</Typography>
    <AccessAlarm/>
    <ThreeDRotation />
    <OtherHouses />
  </>
  )
}

export default App
