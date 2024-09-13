// menu data
const menu = {
    Starters: [{food:"Garlic Bread",price:6,}, {food:"Bruschetta",price:6}],
    MainCourses: [{food:"Margherita Pizza",price:17}, {food:"Spaghetti Carbonara",price:10}],
    Desserts: [{food:"Tiramisu",price:10}, {food:"Cheesecake",price:12}]
};

//  Function to display menu items by category
function displayMenuItems(menu) {
   const menuEl = document.getElementById('menu');
    
//  Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        
//      Create an element for the category
       let categoryEl = document.createElement('h3');
       categoryEl.textContent = category;
       menuEl.appendChild(categoryEl)
        
//      Create a list element for the items in the category
        for(let x of items){
           
            let itemsEl = document.createElement('li');
            itemsEl.textContent = x.food + "  $" + x.price;
            itemsEl.setAttribute('className', 'item');
            itemsEl.addEventListener('click' , () => {
                addToOrder(itemsEl , x.price);
            })
            menuEl.appendChild(itemsEl);
        }             
    };
}



let totalPrice = 0;
// Callback function for adding an item to the order
function addToOrder(itemName,itemPrice) {
    let orderItemsEl = document.getElementById('order-items');
    let orderTotalEl = document.getElementById('order-total');
    
    let addOrder = document.createElement('li');

    addOrder.textContent = itemName.textContent;
    orderItemsEl.appendChild(addOrder);

    totalPrice+=itemPrice;
    orderTotalEl.textContent = totalPrice;
    
    // Calculate and update the total price

}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

