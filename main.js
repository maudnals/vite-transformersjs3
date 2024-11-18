import './style.css';
import { pipeline } from '@huggingface/transformers';
const classifier = await pipeline('sentiment-analysis');
const result = await classifier('I love transformers!');
// [{'label': 'POSITIVE', 'score': 0.9998}]
window.alert(`Transformers.js classifier output: ${JSON.stringify(result)}`);
