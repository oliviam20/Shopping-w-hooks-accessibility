import React, { useState, useEffect } from 'react';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid'; // generates random id

const ShoppingApp = () => {
  const intialShoppingList = JSON.parse(window.localStorage.getItem('shoppingList') || '[]');

  const [shoppingList, setShoppingList] = useState(intialShoppingList);

  useEffect(() => {
    window.localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addItem = (newItem) => {
    setShoppingList([...shoppingList, { id: uuidv4(), name: newItem, completed: false }]);
  };

  const removeItem = itemId => {
    const updatedShoppingList = shoppingList.filter(item => item.id !== itemId);
    setShoppingList(updatedShoppingList);
  };

  const toggleItem = itemId => {
    const updatedShoppingList = shoppingList.map(item => item.id === itemId ? {...item, inCart: !item.inCart} : item);
    setShoppingList(updatedShoppingList);
  }

  const editItem = (itemId, newName) => {
    const updatedShoppingList = shoppingList.map(item => item.id === itemId ? { ...item, name: newName } : item);
    setShoppingList(updatedShoppingList);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <ToolBar>
          <Typography color='inherit'>Shopping List with HOOKS</Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <ShoppingForm addItem={addItem} />
          <ShoppingList
            shoppingList={shoppingList}
            onRemoveItem={removeItem}
            onToggleItem={toggleItem}
            onEditItem={editItem}
          />
        </Grid>
      </Grid>
    </Paper>
  )
};

export default ShoppingApp;
