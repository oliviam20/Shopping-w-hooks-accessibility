import React from 'react';
import useToggleState from './hooks/useToggleState'; // custom hook - generic toggle useState
import EditItemForm from './EditItemForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const ShoppingItem = ({
  id,
  name,
  inCart,
  onRemoveItem,
  onToggleItem,
  onEditItem
}) => {

  const [isEditing, toggleEditing] = useToggleState(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ?
        (
          <EditItemForm
            onEditItem={onEditItem}
            id={id}
            name={name}
            toggleEditingForm={toggleEditing}
          />
        ) : (
          <>
            <Checkbox
              tabIndex={0} // to enable keyboard focus
              checked={inCart}
              onClick={() => onToggleItem(id)} 
            />
            <ListItemText style={{ textDecoration: inCart ? 'line-through' : 'none' }}>{name}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label='Delete'
                onClick={() => onRemoveItem(id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label='Edit'
                onClick={toggleEditing}
              >
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )
      }
    </ListItem>
  )
}

export default ShoppingItem;
