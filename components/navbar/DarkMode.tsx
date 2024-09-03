import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import { GoMoon, GoSun } from 'react-icons/go'

function DarkMode() {
    const { changeTheme, theme } = useContext(ThemeContext)

  return (
    <button className='btn btn-ghost btn-sm' onClick={() => {
        changeTheme(theme === 'retro' ? 'dim' : 'retro')
    }}>{theme=== 'garden'? <GoMoon className='w-6 h-6 text-inherit'/> : <GoSun className='h-6 w-6 text-inherit'/>}</button>
  )
}

export default DarkMode