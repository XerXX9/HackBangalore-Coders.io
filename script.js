const draggables = document.querySelectorAll('.draggable');
const draggableContainer = document.querySelector('.draggable-container');
const dropzone = document.querySelector('.dropzone');

let homePage = document.getElementById("home-page");
let textContainerDiv = document.querySelector("#text-container");
let searchResultsDiv = document.querySelector("#feature-img-container");

// Adding a click event listener to each feature
homePage.addEventListener("click",function(){
    console.log(homePage);

    let buttonText = homePage.innerHTML;
    // Creating an image element
    let imgElement = document.createElement('img');
    // Setting the source of the image
    imgElement.src = 'images/product_listing.png'; // Path to the default image
    // Setting alt text for the image
    imgElement.alt = buttonText;

    imgElement.setAttribute('id',"feature-img");
    
    // Clearing any previous content in the searchresults div
    searchResultsDiv.innerHTML = '';
    
    // Appending the image element to the searchresults div
    searchResultsDiv.appendChild(imgElement);

    // creating the "why it's required" header
    let reqHeader = document.createElement("h4");
    reqHeader.setAttribute('value',"Why is it required?");
    reqHeader.setAttribute('id',"required-header");
    
    document.append(reqHeader)

    let content1 = document.createElement("p");
    content1.setAttribute('value',"conten1");
    reqHeader.setAttribute('id',"required-content");


    content1.insertAfter("required-header");

    let bpHeader = document.createElement("h4");
    reqHeader.setAttribute('value',"Best Practices");
    


});

// drag and drop functionality
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
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

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})