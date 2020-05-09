/**
 * Kubernetic - The Kubernetes Desktop Client
 *
 * Copyright 2018-present, Harbur Cloud Solutions, S.L.U.
 * All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { useObserver } from 'mobx-react'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { useStores } from '../../hooks/use-stores'

export default function ListMovies() {
  const { moviesStore } = useStores()
  const [movies, updateMovies] = React.useState([])

  React.useEffect(() => {
    async function fetch() {
      let response = await moviesStore.listMovies()
      updateMovies(response)
    }
    fetch()
  }, [])

  return useObserver(() => (
    <React.Fragment>
        {movies.map(movie => (
          <Button>{movie.name}</Button>
        ))}
    </React.Fragment>
  ))
}
