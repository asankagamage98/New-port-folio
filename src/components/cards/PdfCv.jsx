import React, { useState } from 'react';
import myCv from '../../assets/pdf/Asanka Gamage.pdf'


export default function PdfCv() {
  

    return (
    <div className="">
      <iframe
       src={myCv}
        title="testPdf"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
       
          marginRight: '-10px',
          marginBottom: '-10px',
        }}
      />
    </div>
    );
}
