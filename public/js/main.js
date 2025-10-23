document.addEventListener('DOMContentLoaded', () => {
  const personUploader = document.getElementById('person-uploader');
  const productUploader = document.getElementById('product-uploader');
  const personPreview = document.getElementById('person-preview');
  const productPreview = document.getElementById('product-preview');
  const sendImageBtn = document.getElementById('send-image-btn');
  const resultImage = document.getElementById('result-image');
  const resultContainer = document.getElementById('result-container');

  let encodedPersonImage = '';
  let encodedProductImage = '';

  const handleFileChange = (event, preview, onImageEncoded) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fullDataUrl = e.target.result;
        preview.src = fullDataUrl;
        preview.style.display = 'block';
        const base64 = fullDataUrl.split(',')[1];
        onImageEncoded(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  personUploader.addEventListener('change', (e) => handleFileChange(e, personPreview, (encoded) => {
    encodedPersonImage = encoded;
  }));

  productUploader.addEventListener('change', (e) => handleFileChange(e, productPreview, (encoded) => {
    encodedProductImage = encoded;
  }));

  sendImageBtn.addEventListener('click', async () => {
    if (!encodedPersonImage || !encodedProductImage) {
      alert('Please select both a person and a product image.');
      return;
    }

    try {
      const response = await fetch('/encodedImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          encodedPersonImage,
          encodedProductImage,
        }),
      });

      const result = await response.json();

      if (result.success) {
        resultImage.src = 'data:image/png;base64,' + result.encodedImage;
        resultImage.style.display = 'block';
        resultContainer.querySelector('.preview-text').style.display = 'none';
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      alert('An error occurred while processing your request.');
    }
  });
});