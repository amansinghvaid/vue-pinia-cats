import { defineStore } from 'pinia'
import axios from 'axios'
export const useCatStore = defineStore({
    id: 'cat',
    state: () => ({
        cats: []
    }),
    getters: {
        catsList: state => state.cats
    },
    actions: {
        async getCats() {
            const {data} = await axios.get('https://cat-fact.herokuapp.com/facts')
            this.cats = data;
        }
    }
})