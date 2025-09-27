const chooseBtn = document.getElementById('chooseBtn');
const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');
const uploadText = document.getElementById('uploadText');
const deleteBtn = document.getElementById('deleteBtn');
const uploadBox = document.getElementById('uploadBox');
const previewBox = document.getElementById('previewBox');

// Choose image button click
chooseBtn.addEventListener('click', () => fileInput.click());

// File input change event
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      previewImage.src = event.target.result;
      previewImage.classList.remove('hidden');
      uploadText.classList.add('hidden');
      deleteBtn.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
});

// Delete image
deleteBtn.addEventListener('click', () => {
  fileInput.value = '';
  previewImage.src = '';
  previewImage.classList.add('hidden');
  uploadText.classList.remove('hidden');
  deleteBtn.classList.add('hidden');
});

// Handle style selection
const styleCards = document.querySelectorAll('.style-card');
styleCards.forEach(card => {
  card.addEventListener('click', () => {
    styleCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// Generate preview
document.querySelector('.generate').addEventListener('click', () => {
  previewBox.textContent = 'Generating preview...';
  setTimeout(() => {
    previewBox.textContent = 'Preview generated (placeholder).';
  }, 2000);
});