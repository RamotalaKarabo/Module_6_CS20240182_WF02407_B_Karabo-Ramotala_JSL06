// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// HINT: Function to display menu items by category
function displayMenuItems(menu) {
    // HINT: Get a reference to the menu container in your HTML
    const menuEl = document.getElementById('menu');
    
    // HINT: Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // HINT: Create an h3 element for the category
        let categoryEl = document.createElement('h3');
        categoryEl.textContent = category;
        
        // HINT: Append the category heading to the menu container
        menuEl.appendChild(categoryEl)
        
        // HINT: Create a list element for the items in the category

        let itemsEl ;

        for(x of items){
            itemsEl = document.createElement('li');
            itemsEl.innerHTML = x;

            menuEl.appendChild(itemsEl);
        }            
            // HINT: Attach a click event listener to the list item to add it to the order

        itemsEl.addEventListener('click' , addToOrder(itemsEl)); 
            
            // HINT: Append the list item to the category's list
        
        };
    }




// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    let orderItemsEl = document.getElementById('order-items');
    let orderTotalEl = document.getElementById('order-total');
    // Create a list item for the order
    let addOrder = document.createElement('li');

    // Set the text content of the list item to the item name
    addOrder.textContent = itemName;

    // Append the list item to the order items list
    orderItemsEl.appendChild(addOrder);

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
