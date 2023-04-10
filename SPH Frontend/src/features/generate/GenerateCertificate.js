import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PDFFile from '../outreach/CertiGen';

const App = () => (
  <PDFViewer className='w-screen h-screen'>
    {/* <PDFFile /> */}
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;