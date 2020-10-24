const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');
const optionsList = document.querySelectorAll('.option');

let tags = [];

const createTag = (label) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeBtn = document.createElement('i');
  closeBtn.setAttribute('class', 'fas fa-times');
  closeBtn.setAttribute('data-item', label);
  div.appendChild(span);
  div.appendChild(closeBtn);
  return div;
};

const reset = () => {
  document.querySelectorAll('.tag').forEach(function (tag) {
    tag.parentElement.removeChild(tag);
  });
};

const addTags = () => {
  reset();
  tags
    .slice()
    .reverse()
    .forEach(function (tag) {
      const input = createTag(tag);
      tagContainer.prepend(input);
    });
};

input.addEventListener('keyup', (e) => {
  // console.log('inputvalue', input.value.length);

  if (e.key === 'Enter') {
    tags.push(input.value);
    addTags();
    input.value = '';
  }
});

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {
    const value = e.target.getAttribute('data-item');
    const index = tags.indexOf(value);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    addTags();
  }
});

optionsList.forEach((o) => {
  o.addEventListener('click', () => {
    const textValue = o.querySelector('label').innerHTML;
    tags.push(textValue);
    addTags();
    // input.value = '';
    // optionsContainer.classList.remove('active');
  });
});
