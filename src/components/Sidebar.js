import React from 'react'
import { Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import ListMovies from '../pages/movies/ListMovies'

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
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <ListMovies/>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarExampleVisible
