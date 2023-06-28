import axios from 'axios'

const TOKEN = 'ci8jtphr01qnrgm37610ci8jtphr01qnrgm3761g'

export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token:TOKEN
    }
})