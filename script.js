let qrCodeDataURL = "";

    function generateQRCode() {
      const url = document.getElementById('url-input').value;

      if (!url) {
        alert('Please enter a valid URL!');
        return;
      }

      const qrContainer = document.getElementById('qr-container');
      qrContainer.innerHTML = '';

      QRCode.toDataURL(url, { width: 200 }, (err, urlData) => {
        if (err) {
          console.error('Error generating QR code:', err);
          return;
        }

        qrCodeDataURL = urlData;

        const img = document.createElement('img');
        img.src = urlData;
        qrContainer.appendChild(img);

        const downloadBtn = document.getElementById('download-btn');
        downloadBtn.style.display = 'inline-block';
      });
    }

    function downloadQRCode() {
      if (!qrCodeDataURL) return;

      const link = document.createElement('a');
      link.href = qrCodeDataURL;
      link.download = 'qr-code.png';
      link.click();
    }

    document.getElementById('url-input').addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        generateQRCode();
      }
    });