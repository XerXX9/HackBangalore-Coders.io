let productListing = document.getElementById("product-listing");
let textContainerDiv = document.querySelector("#text-container");
let searchResultsDiv = document.querySelector("#feature-img-container");

// Adding a click event listener to each feature
productListing.addEventListener("click",function(){
    console.log(productListing);

    let buttonText = productListing.innerHTML;
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
    // rendering the first header
    document.appendChild(reqHeader)

    let content1 = document.createElement("p");
    content1.setAttribute('value',"conten1");
    content1.setAttribute('id',"required-content");

    // rendering the content for the first header
    document.appendChild(content1);


    let bpHeader = document.createElement("h4");
    bpHeader.setAttribute('value',"Best Practices");
    bpHeader.setAttribute('id',"bp-header");

    // rendering the "best practices" header
    document.appendChild(bpHeader)

    let content2 = document.createElement("p");
    content2.setAttribute('value',"conten2");
    content2.setAttribute('id',"bp-content");

    // rendering the content for the "best practices" header
    document.appendChild(content2);

});

// drag and drop functionality
const draggables = document.querySelectorAll('.draggable2');
    const draggableContainer = document.querySelector('.draggable-container');
    const dropzone = document.querySelector('.dropzone');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragged');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragged');
        });
    });

    draggableContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragged');
        const afterElement = getDragAfterElement(draggableContainer, e.clientY);
        if (afterElement == null) {
            draggableContainer.appendChild(draggable);
        } else {
            draggableContainer.insertBefore(draggable, afterElement);
        }
    });

    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragged');
        const afterElement = getDragAfterElement(dropzone, e.clientY);
        if (afterElement == null) {
            dropzone.appendChild(draggable);
        } else {
            dropzone.insertBefore(draggable, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable2:not(.dragged)')];

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
        if (event.target.classList.contains('draggable2') && !event.target.parentElement.classList.contains('dropzone')) {
            document.querySelector('.draggable-container').appendChild(event.target);
        }
    });

  document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.trim().toLowerCase();
    var divs = document.querySelectorAll('.draggable2');

        divs.forEach(function(div) {
            var divText = div.textContent.toLowerCase();
            if (divText.includes(searchValue)) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    });

    document.getElementById('searchInput').addEventListener('input', function() {
        var searchValue = this.value.trim().toLowerCase();
        var divs = document.querySelectorAll('#search-container .draggable2');
        if (document.getElementById('search-container').classList.contains('draggable2')) {
                var divs = document.querySelectorAll('#search-container .draggable2');
                divs.forEach(function(div) {
                    var divText = div.textContent.toLowerCase();
                    if (divText.includes(searchValue)) {
                        div.style.display = 'block';
                    } else {
                        div.style.display = 'none';
                    }
                });
            }
        else {
            if (document.getElementById('dropzone').classList.contains('draggable2')) {
            var divs = document.querySelectorAll('#dropzone .draggable2');
                divs.forEach(function(div) {
                    var divText = div.textContent.toLowerCase();
                    if (divText.includes(searchValue)) {
                        div.style.display = 'block';
                        }
    } )
}

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})}})
