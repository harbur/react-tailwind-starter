import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Home from '../pages/home/Home'
import CreateMovie from '../pages/movies/CreateMovie'
import ListMovies from '../pages/movies/ListMovies'
import ViewMovie from '../pages/movies/ViewMovie'
import EditMovie from '../pages/movies/EditMovie'

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment} basic>
    <Sidebar
      as={Menu}
      animation='overlay'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as={NavLink} exact to={'/'}>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to={'/movies'}>
        <Icon name='film' />
        Movies
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher style={{ marginLeft: '150px' }}>
      <Segment basic>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={ListMovies} />
          <Route exact path="/movies/:id" component={ViewMovie} />
          <Route exact path="/create/movie" component={CreateMovie} />
          <Route exact path="/edit/movie/:id" component={EditMovie} />
        </Switch>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarExampleVisible
