const createStore = () => {
    //the store should have four parts
    // 1.state  (manage the state)
    // 2.getstate (through api's)
    //3.listen chahnges in state 
    //4.updating the state
    let state;
    let listeners=[];



    const getState = () => state
    const subscribe = (listener) => {
        listeners.push(listener)
        return ()=> {listeners = listeners.filter ((l) => l !== listener)
    }

    return {
        getState,
        subscribe
    }

}

//Actions records change in state
// All should must have type property

/* {
type:"ADD_GOALS",
//The goal property should passed along with add goals
goals:{
    id:0,
    name:"become millonier insha ALLAH"

}


}*/

/*{
   
    type :"REMOVE_GOALS",
   id :0

}*/

// listen changes in state
// 1.getStore.

const store = createStore()
store.subscribe(()=>{console.log("The new state is:" ,store.getState() )})
// if the user subscibe again
 const unsubscribe = store.subscribe(()=>{console.log("The stored is changed.")})

unsubscribe();
