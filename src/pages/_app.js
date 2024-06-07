import '@/styles/top2.css'
import '@/styles/globals.css'
import '@/styles/hannbaga.css'
import '@/styles/buyer.css'
import '@/styles/List.css'
import '@/styles/allveg.css'
import '@/styles/kiyaku.css'
import '@/styles/company.css'
import '@/styles/otoiawase.css'
import '@/styles/akusesu.css'
import '@/styles/question.css'
import '@/styles/selljudge.css'
import '@/styles/detail.css'
import '@/styles/cart.css'


import Header from'./header'
import Info from'./info'

export default function App({ Component, pageProps }) {
  return (
  <>  
    <Header/>
    <Component {...pageProps} />
    <Info/>
  </>
  )
}
