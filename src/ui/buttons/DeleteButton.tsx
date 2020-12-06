import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

interface Props { title: string, onClick(): void }
function DeleteButton({ title, onClick }: Props) {
  return (
    <Button className="square" icon labelPosition='right' onClick={onClick}>
      {title}
      <Icon name='trash alternate outline' />
    </Button>
  );
}

export default DeleteButton 