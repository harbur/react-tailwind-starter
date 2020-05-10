import { useObserver } from 'mobx-react';
import React from 'react';
import { Header } from 'semantic-ui-react';

export default function Home() {
  return useObserver(() => (
    <>
    <Header as='h3'>Home Page</Header>
    </>
  ));
}
