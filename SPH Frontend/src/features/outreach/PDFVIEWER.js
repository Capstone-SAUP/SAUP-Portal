import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PDFFile from './CertiGen';

const App = () => (
  <PDFViewer>
    {/* <PDFFile /> */}
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));