import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({
  shoppingList,
  onRemoveItem,
  onToggleItem,
  onEditItem
}) => {
  if (!shoppingList.length) return null;
  return (
    <Paper>
      <List>
        {shoppingList.map((item, idx) => (
          <Fragment key={item.id}>
            <ShoppingItem
              onRemoveItem={onRemoveItem}
              onToggleItem={onToggleItem}
              onEditItem={onEditItem}
              {...item}
            />
            {idx < shoppingList.length - 1 && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  )
}

export default ShoppingList;