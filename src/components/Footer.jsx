import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters';
import './Footer.css'

//en lugar de pasarselo por props
export function Footer () {
  const { filters } = useFilters();
  const { cart } = useCart();//ahora pasamos cart en el JSON.stringify

  return (
    <footer className='footer'>
      
    <h4> <span>Alex Martinez</span>    </h4>
    <h5> Martinez shop</h5>
   

    </footer>
  )
}



