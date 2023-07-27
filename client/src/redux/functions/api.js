import axios from 'axios'

export const fetchFeaturedProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=4')
        const data = await response.data
        console.log(data)
        return data
    } catch (error) {
        
    }
}

