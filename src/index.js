import ReactDOM from 'react-dom';
import './style.css';
import WebContent from './app';

ReactDOM.render(<WebContent/>, document.getElementById('root'));

const toggle = document.querySelector('.hover-show');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

let Icons = document.querySelectorAll('.navigation .icon');

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeActive();

    icon.classList.add('active-nav');
  });
});

function changeActive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav');
  });
}
