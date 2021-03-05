import "./Yukimi.scss"
import React, { useState, useEffect } from 'react'
import Reader from "./components/Reader"
import { Route, Switch } from "react-router-dom"
import Shelf from "./components/Shelf"

const Yukimi = () => {

  return (
    <div className="yukimi">
      <Switch>
        <Route exact path="/">
          <Shelf />
        </Route>
        <Route>
          <Reader />
        </Route>
      </Switch>
    </div>
  )
}

export default Yukimi
