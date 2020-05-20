import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // generates random id

export default intialShoppingList => {
  const [shoppingList, setShoppingList] = useState(intialShoppingList);
  return {
    shoppingList,
    addItem: newItem => {
      setShoppingList([...shoppingList, { id: uuidv4(), name: newItem, completed: false }]);
    },
    removeItem: itemId => {
      const updatedShoppingList = shoppingList.filter(item => item.id !== itemId);
      setShoppingList(updatedShoppingList);
    },
    toggleItem: itemId => {
      const updatedShoppingList = shoppingList.map(item => item.id === itemId ? { ...item, inCart: !item.inCart } : item);
      setShoppingList(updatedShoppingList);
    },
    editItem: (itemId, newName) => {
      const updatedShoppingList = shoppingList.map(item => item.id === itemId ? { ...item, name: newName } : item);
      setShoppingList(updatedShoppingList);
    }
  }
};
