import html from './app.html';
import './app.css';
import Template from '../Template';
import Search from '../search/Search';
import NewsList from '../news/News-list';
import HeadLines from '../headline/HeadLines';
import Api from '../../services/newsApi';

const template = new Template(html);

export default class App {

  handleSearch(searchTerm) {
    this.loading.classList.remove('hidden');

    Api.searchNews(searchTerm)
      .then(data => {
        const news = data.articles;
        const newsSection = this.newsSection;

        while(newsSection.hasChildNodes()) {
          newsSection.removeChild(newsSection.lastChild);
        }

        const newsList = new NewsList(news);
        newsSection.appendChild(newsList.render());
      });

    this.loading.classList.add('hidden');
  }

  render() {
    const dom = template.render();

    this.loading = dom.getElementById('loading');
    this.newsSection = dom.getElementById('news');
   
    this.headlineSection = dom.getElementById('headlines');
    const headline = new HeadLines();
    this.headlineSection.appendChild(headline.render());

    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());

    return dom;
  }
}