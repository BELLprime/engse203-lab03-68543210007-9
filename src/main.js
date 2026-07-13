const form = document.querySelector('#request-form');

// TODO 1: query preview/status/list elements
const preview = {
  previewName: document.querySelector('#preview-name'),
  previewType: document.querySelector('#preview-type'),
  previewDetails: document.querySelector('#preview-details'),
}; 
const statusElement = document.querySelector('#form-status');
const requestList = document.querySelector('#request-list');
const detailsCount = document.querySelector('#details-count');

// TODO 2: readForm()
function readForm() {
    return Object.fromEntries(new FormData(form).entries());
}
// TODO 3: renderPreview(data)

// TODO 4: validate(data)

// TODO 5: renderErrors(errors)

// TODO 6: input and submit listeners


console.log('LAB 3 starter ready', form);