import logo from './images/logo.svg';
import './App.scss';

function App() {
  return (
    <article className='coming-soon'>
      <section className='coming-soon-logo'>
        <img src={logo} alt=''/>
      </section>
      <section className='coming-soon-hero'>
      </section>
      <section className='coming-soon-msg'>
        <h1><span>We're</span> coming soon</h1>
        <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        <section className='cs-email-input'>
          <input type="email" id="email" name="email" placeholder=' Email Address'></input>
          <button> &#62;</button>
        </section>
      </section>
    </article>
     
  );
}

export default App;
