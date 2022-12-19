//selecting inputs (title, description and 'Add note' button)
const titleInput = document.querySelector('.input-note-title');
const descInput = document.querySelector('.input-note-desc');
const btnInput = document.querySelector('.add-note-btn');

//selecting main menu div
const mainMenu = document.querySelector('.main-menu');

//selecting div that is used to store created notes
const newnotesBox = document.querySelector('.new-notes-box');

btnInput.addEventListener('click', () => {
	const titleInputContent = titleInput.value;
	const descInputContent = descInput.value;

	if (!(descInputContent && titleInputContent)){
		alert('title or description is empty');
		return null;
	}

	titleInput.value = '';
	descInput.value = '';

	const newNote = document.createElement('div');
	const p1 = document.createElement('p'); //title
	const d = document.createElement('span'); //date
	const editD = document.createElement('span'); //edit date
	const p2 = document.createElement('p'); //description
	const deleteBtn = document.createElement('button'); //delete button
	const editBtn = document.createElement('button'); // edit button
	
	const dateTime = Date(); //getting time
	date = String(dateTime.slice(0,15));

	//Adding text contents to note elements
	p1.textContent = titleInputContent;
	p2.textContent = descInputContent;
	deleteBtn.textContent = 'Delete';
	d.textContent = date;
	editBtn.textContent = 'Edit';

	// Appending elements to note block 'newNote'
	newNote.appendChild(p1);
	newNote.appendChild(d);
	newNote.appendChild(p2);
	newNote.appendChild(deleteBtn);
	newNote.appendChild(editBtn);
	newNote.appendChild(editD);

	// Appending newNote node to newnotesBox
	newnotesBox.appendChild(newNote);

	//styling
	newNote.style.border = 'thin solid black';
	p1.style.fontWeight = 'bold';
	d.style.fontStyle = 'italic';


	deleteBtn.addEventListener('click', () => {
		newnotesBox.removeChild(newNote);
	});

	editBtn.addEventListener('click', () => {
		const updateBox = document.querySelector('.update-box');

		//Adding update elements
		const updateTitle = document.createElement('input');
		const updateDesc = document.createElement('input');
		const updateBtn = document.createElement('button');
		const cancelBtn = document.createElement('button');

		cancelBtn.textContent = 'X';
		updateBtn.textContent = 'Update';
		updateTitle.value = p1.textContent;
		updateDesc.value = p2.textContent;

		updateBox.appendChild(updateTitle);
		updateBox.appendChild(updateDesc);
		updateBox.appendChild(updateBtn);
		updateBox.appendChild(cancelBtn);

		//clicking X button
		cancelBtn.addEventListener('click', () => {
			updateBox.innerHTML = '';
		});

		//starting the edit
		updateTitle.focus();

		updateBtn.addEventListener('click', () => {
			if (!(updateTitle.value && updateDesc.value)){
				alert('title or description is empty');
				return null;
			}

			p1.textContent = updateTitle.value;
			p2.textContent = updateDesc.value;
			let d = Date();

			const updateDate = String(d.slice(1,15));

			try{
				newNote.removeChild(updateD);
			}catch{}

			const updateD = document.createElement('p');
			updateD.textContent = `Last edit on ${updateDate}`;

			newNote.appendChild(updateD);
			updateBox.innerHTML = '';
		});

	});
	titleInput.focus();

});