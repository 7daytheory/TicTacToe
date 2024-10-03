import React from 'react'

const Banner = () => {
  return (
    <div className="w-full bg-blue-600 p-6 text-white text-center space-y-6">
      <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      <p className="text-lg">
        How to play:
        <br />
        - Players take turns selecting a square.
        <br />
        - The first player to get 3 in a row (horizontal, vertical, or diagonal) wins!
        <br />
        - Use the "Restart" button to start over or go back to a previous move.
        <br />
        - Or use "History" to go back to any move of the game
      </p>
    </div>
  )
}

export default Banner