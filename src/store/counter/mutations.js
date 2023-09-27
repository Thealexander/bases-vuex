export const increment = (state)=> {
    state.count++
    state.lastmutations = 'increment'
} 
export const incrementBy= (state, val)=> {
    state.count += val  
    state.lastmutations='incrementBy' + val
    state.lastRandomInt = val
}

export const setLoading=(state, val)=>{
    state.isLoading = val
    state.lastmutations = 'setLoading' + val
}