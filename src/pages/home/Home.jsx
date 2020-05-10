import React from 'react';
import { Header } from 'semantic-ui-react';
import { useObserver } from 'mobx-react-lite';

export default function Home() {
  return useObserver(() => (
    <>
    <Header as='h3'>Home Page</Header>
    </>
  ));
}
