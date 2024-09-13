// menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
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
        for(x of items){
           let itemsEl = document.createElement('li');
            itemsEl.textContent = x;
            itemsEl.setAttribute('className', 'item');
            itemsEl.addEventListener('click' , () => {
                addToOrder(itemsEl);
            })

            menuEl.appendChild(itemsEl);
        }            
        
    };
}




// Callback function for adding an item to the order
function addToOrder(itemName) {
    let orderItemsEl = document.getElementById('order-items');
    let orderTotalEl = document.getElementById('order-total');

    let addOrder = document.createElement('li');

    addOrder.textContent = itemName.textContent;
    orderItemsEl.appendChild(addOrder);

    // Calculate and update the total price

}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
