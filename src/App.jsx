import * as React from 'react'
import {Button, FormControl, InputLabel, MenuItem} from '@mui/material'
import Select from '@mui/material/Select'
import { AccessAlarm, ThreeDRotation, OtherHouses } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

function SelectMode() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectModeValue = event.target.value
    setMode(selectModeValue)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-small-label">Mode</InputLabel>
      <Select
        labelId="select-small-label"
        id="select-small"
        value={mode}
        label="Mode"
        onChange={handleChange} >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value= "system">System</MenuItem>
      </Select>
    </FormControl>
  )
}

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
    <SelectMode/>
    <hr></hr>
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
