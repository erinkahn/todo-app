import React from 'react';

const Header = () => { //es6 arrow function same as function Header() {

  const headerStyle= {
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "gray",
          textTransform: "lowercase",
          textAlign: "center"
        }}>
          Todos: 
      </h1>
    </header>
  )
}

export default Header