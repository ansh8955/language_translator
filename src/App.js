import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");


  async function translate(){

    

const encodedParams = new URLSearchParams();
encodedParams.set('source_language', sourceLanguage);
encodedParams.set('target_language', targetLanguage);
encodedParams.set('text', data);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '1a6cf76080msha4c79e003c918dbp190ac1jsnbe8e47b1598e',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
  console.log(response.data.data.translatedText);
	setResult(response.data.data.translatedText);
} catch (error) {
	console.error(error);
}
  }


  return (
<div className="container">

<div>
From :
<select name='source' onChange={(e)=>{

setSourceLanguage(e.target.value);


}}

value={sourceLanguage}>
  <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="ml">Malayalam</option>
        <option value="ta">Tamil</option>
</select>


To :
<select name='target' onChange={(e)=>{

setTargetLanguage(e.target.value);


}}

value={targetLanguage}>
  <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="ml">Malayalam</option>
        <option value="ta">Tamil</option>
</select>

<div>

  <textarea 
  
  placeholder='Enter data here'
  col="40" rows="8"
  name='data'
  onChange={(e)=>{
    setData(e.target.value)
  }
  }
  ></textarea>
</div>

</div>

<button onClick={translate}>Translate</button>
<br/>

<p>{result}</p>
</div>    
  );
}

export default App;
