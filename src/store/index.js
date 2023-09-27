import { createStore } from 'vuex';
import getRandomInt from '@/helpers/getRandomInt';

export default createStore({

    state: {
        count: 1,
        lastmutations: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment(state) {
            state.count++
            state.lastmutations = 'increment'
        },
        incrementBy(state, val){
            state.count += val  
            state.lastmutations='incrementBy' + val
            state.lastRandomInt = val
        }
    },
    actions :{
       async incrementRandomInt(context){
        const randomInt = await getRandomInt()

        context.commit('incrementBy', randomInt)
        }
    }


});