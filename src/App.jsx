import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Pokemon, Header, Footer, Moves, BasicInfo } from './components'
import { getPokemonById } from './api'

/**
 * Primary App
 *
 * @returns {function} react component
 */
export const App = () => {
  const [initialSearch, setInitialSearch] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState({})

  // const { abilities, height, heldItems, sprites, stats } = currentPokemon
  const { moves, name, id, types } = currentPokemon

  /**
   * Updates the currentPokemon state
   *
   * @param {object} newPokemon - Object containing pokemon info
   */
  const updateCurrentPokemon = (newPokemon) => {
    setCurrentPokemon(newPokemon)
  }

  /**
   * Gets data for a pokemon chosen at random
   */
  const getRandomPokemon = async () => {
    const randomPokemonNumber = Math.floor(Math.random() * 898 + 1)
    const newPokemon = await getPokemonById(randomPokemonNumber)

    setCurrentPokemon(newPokemon)
    setInitialSearch(true)
  }

  useEffect(() => {
    if (!initialSearch) {
      getRandomPokemon()
    }
  }, [initialSearch])

  return (
    <div className="relative">
      <Header submitCallback={updateCurrentPokemon} />
      <Switch>
        <Route exact path="/info">
          <BasicInfo name={name} id={id} types={types} />
        </Route>
        <Route exact path="/moves">
          <Moves moves={moves} />
        </Route>
        <Route exact path="/">
          <Pokemon pokemon={currentPokemon} />
        </Route>
        <Route exact path="/locations">
          <Pokemon pokemon={currentPokemon} />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
