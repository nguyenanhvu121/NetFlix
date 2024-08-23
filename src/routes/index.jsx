import Home from '../Page/Home'
import FilmTH from '../Page/FilmTH'
import Film from '../Page/Film'
import FilmNew from '../Page/FilmNew'
import Title1 from '../TitlePage/Title1'
import Title2 from '../TitlePage/Title2'
import Title3 from '../TitlePage/Title3'
import Title4 from '../TitlePage/Title4'
import Title5 from '../TitlePage/Title5'
import Title6 from '../TitlePage/Title6'
import Title7 from '../TitlePage/Title7'
import Title8 from '../TitlePage/Title8'
import Title9 from '../TitlePage/Title9'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/PhimTruyenHinh', component: FilmTH},      
    { path: '/Phim', component: Film},    
    { path: '/Moi&Phobien', component: FilmNew},    
    { path: '/title/001', component: Title1},         
    { path: '/title/002', component: Title2},         
    { path: '/title/003', component: Title3},          
    { path: '/title/004', component: Title4},          
    { path: '/title/005', component: Title5},          
    { path: '/title/006', component: Title6},                      
    { path: '/title/007', component: Title7},                      
    { path: '/title/008', component: Title8},                      
    { path: '/title/009', component: Title9},                      
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}