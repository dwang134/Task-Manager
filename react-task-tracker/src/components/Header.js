// import React from 'react' used to be required but not anymore
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {

    return (
      <header className="header">
        <h1>{title}</h1>
        {/* <button className= "btn">Add</button> */}
        {/*instead make a button component makes it easier to design*/}
        <Button //be default showAddTask state is false
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
        {/* its not going to have the safe click therefore component-> prop */}
        {/* REUSABLE COMPONENT */}
      </header>
    );
}

//setting default value of props even without parameter
Header.defaultProps= {
    title: 'TaskTracker',
}
 
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'white', backgroundColor: 'blue'
// }
export default Header
