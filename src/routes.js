import HomeComponent from './components/homeComponent.vue';
import SearchComponent from './components/searchComponent.vue';
import AboutComponent from './components/aboutComponent.vue';

export default [
    {path:'/', component: HomeComponent},
    {path: '/search', component: SearchComponent},
    {path: '/about', component: AboutComponent}
]