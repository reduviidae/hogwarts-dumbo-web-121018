import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownSort = props => {
  return(
    <Dropdown onChange={props.filterHogs} placeholder='Sort Hogs' fluid selection options={[{text: 'weight', value: 'weight'}, {text: 'name', value: 'name'}]} />
  )
}

export default DropdownSort
