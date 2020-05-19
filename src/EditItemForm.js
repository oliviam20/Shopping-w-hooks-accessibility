import React from 'react';
import useInputState from './hooks/useInputState'; // custom hook for generic input state change
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const EditItemForm = ({
  id,
  onEditItem,
  name,
  toggleEditingForm
}) => {
  const [value, handleChange, reset] = useInputState(name);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onEditItem(id, value);
        reset();
        toggleEditingForm();
      }}
      style={{ marginLeft: '1.6rem', width: '100%' }}
    >
      <ListItem>
        <>
          <TextField
            margin='normal'
            value={value}
            onChange={handleChange}
            autoFocus
            style={{ width: '94%' }}
          />
          <ListItemSecondaryAction style={{ right: '0' }}>
            <IconButton
              aria-label='Close'
              onClick={toggleEditingForm}
            >
              <CloseIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      </ListItem>
    </form>
  )
};

export default EditItemForm;
