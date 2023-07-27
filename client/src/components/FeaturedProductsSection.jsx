import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { featuredProducts } from '../redux/features/fetchDataSlice'
import ProductCard from './ProductCard'

const FeaturedProductsSection = () => {
    const dispatch = useDispatch()
    const {data, loading, error} = useSelector((state) => state.featuredSlice)

    useEffect(() => {
        dispatch(featuredProducts())
    }, [dispatch])

  return (
   <div>
         <div style={{
        fontWeight: 600,
        fontSize: "16px",
        textAlign: "center"
        }}>Featured Products</div>

        {
            loading ? <div>loading</div> : 
            error ? <div>Error: {error}</div>:
            data?
            <div style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center"
            }}>
                {data.map(item => (
                    <ProductCard key={item.id} product={item}/>
                ))}
            </div>: null
        }

   </div>
  )
}

export default FeaturedProductsSection