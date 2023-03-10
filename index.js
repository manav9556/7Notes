const addbtn = document.querySelector('#add');
const updateLSData = () => {
  const textareadata = document.querySelectorAll('textarea');
  const notes = [];
  textareadata.forEach((note) => {
    notes.push(note.value);
  });
  console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes));
};

const newnote = (text = '') => {
  // create new div
  const note = document.createElement('div');
  note.classList.add('note');

  const htmldata = `<div class="operation">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '' : 'hidden'}">${text}</div>
    <textarea class="${text ? 'hidden' : ''}" style="width: 234px; height: 183px">${text}</textarea>
  `;
  note.insertAdjacentHTML('afterbegin', htmldata);
  document.querySelector('.main2').appendChild(note);

  const editbtn = note.querySelector('.edit');
  const deletebtn = note.querySelector('.delete');
  const mdiv = note.querySelector('.main');
  const textarea = note.querySelector('textarea');

  deletebtn.addEventListener('click', () => {
    note.remove();
    updateLSData();
  });

  editbtn.addEventListener('click', () => {
    mdiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });

  textarea.addEventListener('change', (event) => {
    const value = event.target.value;
    mdiv.innerHTML = value;
    updateLSData();
  });
};

const notes = JSON.parse(localStorage.getItem('notes'));
console.log(notes);
if (notes) {
  notes.forEach((note) => newnote(note));
}
addbtn.addEventListener('click', () => newnote());
