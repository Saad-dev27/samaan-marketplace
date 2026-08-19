import {createContext,useContext,useEffect,useMemo,useState} from 'react'
import {fallbackProducts} from '../data/fallbackProducts'
const StoreContext=createContext(null)
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
export function StoreProvider({children}){const[products,setProducts]=useState(fallbackProducts),[loading,setLoading]=useState(true),[apiError,setApiError]=useState(false),[cart,setCart]=useState(()=>read('Saamaan-cart',[])),[wishlist,setWishlist]=useState(()=>read('saamaan-wishlist',[])),[dark,setDark]=useState(()=>read('saamaan-theme',false)),[toasts,setToasts]=useState([])
useEffect(()=>{const c=new AbortController();fetch('https://dummyjson.com/products?limit=100',{signal:c.signal}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>setProducts(d.products.map(p=>({...p,brand:p.brand||'Independent studio'})))).catch(e=>{if(e.name!=='AbortError')setApiError(true)}).finally(()=>setLoading(false));return()=>c.abort()},[])
useEffect(()=>localStorage.setItem('saamaan-cart',JSON.stringify(cart)),[cart]);useEffect(()=>localStorage.setItem('saamaan-wishlist',JSON.stringify(wishlist)),[wishlist]);useEffect(()=>{localStorage.setItem('saamaan-theme',JSON.stringify(dark));document.documentElement.dataset.theme=dark?'dark':'light'},[dark])
const toast=message=>{const id=Date.now();setToasts(t=>[...t,{id,message}]);setTimeout(()=>setToasts(t=>t.filter(x=>x.id!==id)),2800)}
const addCart=(product,qty=1)=>{setCart(items=>{const f=items.find(x=>x.id===product.id);return f?items.map(x=>x.id===product.id?{...x,qty:x.qty+qty}:x):[...items,{...product,qty}]});toast(`${product.title} added to bag`)}
const updateQty=(id,qty)=>setCart(items=>qty<1?items.filter(x=>x.id!==id):items.map(x=>x.id===id?{...x,qty}:x));const toggleWish=product=>{const on=wishlist.some(x=>x.id===product.id);setWishlist(on?wishlist.filter(x=>x.id!==product.id):[...wishlist,product]);toast(on?'Removed from saved':'Saved for later')}
const value=useMemo(()=>({products,loading,apiError,cart,wishlist,dark,toasts,addCart,updateQty,toggleWish,setDark,setCart,toast}),[products,loading,apiError,cart,wishlist,dark,toasts]);return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>}
export const useStore=()=>useContext(StoreContext)
