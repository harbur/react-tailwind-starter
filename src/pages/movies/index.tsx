import CreateMovie from 'pages/movies/CreateMovie';
import EditMovie from 'pages/movies/EditMovie';
import ListMovies from 'pages/movies/ListMovies';
import ViewMovie from 'pages/movies/ViewMovie';
import React, { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { useQueryCache } from 'react-query';
import { Route } from "react-router-dom";
import { Button } from 'semantic-ui-react';

function Movies() {
  const cache = useQueryCache();

  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }: any) => (
          <div>
            There was an error!{" "}
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
            <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
          </div>
        )}
        onReset={() => cache.resetErrorBoundaries()}
      >
        <Suspense fallback={<div >Loading...</div>}>
          <Route exact path="/movies" component={ListMovies} />
          <Route strict exact path="/movies/new" component={CreateMovie} />
          <Route exact path="/movies/view/:id" component={ViewMovie} />
          <Route exact path="/movies/view/:id/edit" component={EditMovie} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default Movies;
