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
    });

    draggableContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(draggableContainer, e.clientY);
        if (afterElement == null) {
            draggableContainer.appendChild(draggable);
        } else {
            draggableContainer.insertBefore(draggable, afterElement);
        }
    });

    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(dropzone, e.clientY);
        if (afterElement == null) {
            dropzone.appendChild(draggable);
        } else {
            dropzone.insertBefore(draggable, afterElement);
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

    document.getElementById('searchButton').addEventListener('click', function() {
        var searchValue = document.getElementById('searchInput').value.toLowerCase();
        var divs = document.querySelectorAll('#divContainer div');
      
        divs.forEach(function(div) {
          var divText = div.textContent.toLowerCase();
          if (divText.includes(searchValue)) {
            div.style.display = 'block';
          } else {
            div.style.display = 'none';
          }
        });
      });