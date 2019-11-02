import { registerWorker } from './js/ServiceWorkerRegister';
import { getRandomQuote } from './js/QuoteFetcher';
import './styles/main.scss';

registerWorker('service-worker.js');
getRandomQuote();