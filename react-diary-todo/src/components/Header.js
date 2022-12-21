// import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
  // const location = useLocation()

  return (
    <header className='header'
      style={{
        color: 'green', 
        backgroundColor:'pink',
        border: '2px solid yellow',
        borderRadius: '5px'
        }}>
      
      <h1>{title}</h1>
      {/* {location.pathname === '/' && ( */}
        <Button 
          color={showAdd ? 'brown' : 'blue'} 
          text={showAdd ? 'Close' : 'New'} 
          onClick={onAdd}/>
          {/* )} */}
    </header>
  )
}

Header.defaultProps = {
    title: "Diary to Do's"
  }

// eslint-disable-next-line react/no-typos
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {       //dinamikus stílus CSS in JS
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
