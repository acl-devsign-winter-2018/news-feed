import './reset.css';
import './main.css';
import App from './component/app/App';

const root = document.getElementById('root');
const app = new App();

root.appendChild(app.render());