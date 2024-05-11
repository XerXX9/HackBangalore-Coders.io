const draggables = document.querySelectorAll('.draggable');
const draggableContainer = document.querySelector('.draggable-container');
const dropzone = document.querySelector('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });

    // Adding a click event listener to each draggable element
    draggable.addEventListener('click', function() {
        // Getting the text content of the clicked draggable element
        var buttonText = this.textContent.trim();
        
        // Creating an image element
        var imgElement = document.createElement('img');
        // Setting the source of the image
        imgElement.src = 'images/card_image.jpg'; // Path to the default image
        // Setting alt text for the image
        imgElement.alt = buttonText;
        
        // Selecting the searchresults div
        var searchResultsDiv = document.querySelector('.searchresults');
        
        // Clearing any previous content in the searchresults div
        searchResultsDiv.innerHTML = '';
        
        // Appending the image element to the searchresults div
        searchResultsDiv.appendChild(imgElement);
    });
});

draggableContainer.addEventListener('dragover', e => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(draggableContainer, e.clientY);
    
    // Check if afterElement is a child of draggableContainer before inserting
    if (afterElement && afterElement.parentNode === draggableContainer) {
        draggableContainer.insertBefore(draggable, afterElement.nextSibling);
    } else {
        draggableContainer.appendChild(draggable);
    }
});

dropzone.addEventListener('dragover', e => {
    e.preventDefault();
    const draggable = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(dropzone, e.clientY);
    
    // Check if afterElement is a child of dropzone before inserting
    if (afterElement && afterElement.parentNode === dropzone) {
        dropzone.insertBefore(draggable, afterElement.nextSibling);
    } else {
        dropzone.appendChild(draggable);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Reset position if dragged outside the dropzone
document.addEventListener('dragend', function(event) {
    if (event.target.classList.contains('draggable') && !event.target.parentElement.classList.contains('dropzone')) {
        document.querySelector('.draggable-container').appendChild(event.target);
    }
});

document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.trim().toLowerCase();
    var divs = document.querySelectorAll('.draggable');
  
    divs.forEach(function(div) {
        var divText = div.textContent.toLowerCase();
        if (divText.includes(searchValue)) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
});
