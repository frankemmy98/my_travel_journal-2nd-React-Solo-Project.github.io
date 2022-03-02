import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Section from './components/Section';
import data from './data';

function App() {
    const journalItems = data.map(journal => 
      <Section key={journal.id}
               journal={journal}
      />
      )

  return (
    <div className='container'>
      <Navbar />
      <section className='journal-lists'>
      {journalItems}
      </section>
    </div>
  )
}

export default App;
