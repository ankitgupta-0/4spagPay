import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import './styles/QRCodeScanner.css';

const QRCodeScanner = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="scanner-container">
      <h2>QR Code Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>Scanned Result: {result}</p>}
    </div>
  );
};

export default QRCodeScanner;



// import React from 'react';
// // import './QRCodeScanner.css';

// const QRCodeScanner = () => {
//   return (
//     <div className="qr-code-scanner">
//       <h2>QR Code Scanner</h2>
//       <p>QR code scanner will be here.</p>
//     </div>
//   );
// };

// export default QRCodeScanner;
