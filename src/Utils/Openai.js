import React from 'react'
import OpenAI from 'openai';
import { OPEN_API_KEY } from '../Components/Constants';

const Openai = new OpenAI({
    apiKey : OPEN_API_KEY,
    dangerouslyAllowBrowser:true,
})

export default Openai