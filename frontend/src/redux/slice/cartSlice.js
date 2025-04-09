import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[],
    tempItems:[],
    totalPrice:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            // alert('Hello');
            const existingItem  = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.items.push({...action.payload, quantity:1});
            }

            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum,item)=>sum+item.price* item.quantity,0)
        },
        removeItemFromCart(state,action){
            state.items = state.items.filter(item => item.id !== action.payload);
            state.tempItems  = [...state.items]; 
        },

        updateItemQuantity(state, action) {
            const { id, operation } = action.payload;

            const tempItem = state.tempItems.find(item => item.id===action.payload.id);
            
            if(tempItem){
                if(operation=='increase'){
                    tempItem.quantity += 1;
                }
                if(operation=='decrease'){
                    tempItem.quantity -= 1;
                }
            }
        
            const updatedItems = state.items.map(item => {
                if (item.id === id) {
                  // Update the item quantity
                  return { ...item, quantity: tempItem ? tempItem.quantity : item.quantity };
                }
                return item;
              });
        
              // Update both items and tempItems
              state.items = updatedItems;
              state.tempItems = [...updatedItems];
        
              // Recalculate the total price
              state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
              console.log(state.totalPrice);
            
          },
    }
    
})

export const{addToCart,removeItemFromCart,updateItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;