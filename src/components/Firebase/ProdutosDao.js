import {
    ref,
    query,
    orderByChild,
    onChildAdded,
    off,
    endAt,
    endBefore,
    equalTo,
    startAt,
    startAfter,
    onValue,
    limitToFirst,
    limitToLast,
    orderByValue
} from "firebase/database"

function getOrderByChild(order, db, callback) {
    //Exemplo
    console.log('getOrderByChild');
    console.log(order);
    const refDB = ref(db, 'produtos/');
    const consulta = query(refDB, orderByChild(order))
    console.log(consulta);
    onChildAdded(consulta, callback)
}

function getFilterByChild(filter, value, db, callback) {
    console.log(filter);
    console.log(value);

    //implement aqui
    console.log('getFilterByChild');
    console.log(filter)
    const refDB = ref(db, 'produtos/');
    const consulta = query(refDB, orderByChild(filter), equalTo(value))
    onChildAdded(consulta, callback)
}

function getMostExpensive(db, setValue, list) {
    const limit=3;
    const filtro = 'preco';
    // const produtos = [];
    // let obj = Object;
    console.log('getMostExpensive');
    // console.log(setValue);
    // console.log(list);

    // debugger
    const refDB = ref(db, 'produtos/');
    const consulta = query(refDB, orderByChild(filtro), limitToLast(limit))
    onChildAdded(consulta, snapshot => {
        console.log(snapshot.key);
        console.log(snapshot.val());
        list.push([snapshot.key, snapshot.val()])
        // obj = Object.fromEntries(produtos);

    });
    // }, setValue([...list]));
    // console.log(obj);
    console.log(list);
    
    // console.log(obj[])


    // debugger
    list.reverse();
    // obj = Object.fromEntries(produtos);

    // console.log(obj);
    console.log(list);
    setValue([...list]);
    
    return setValue([...list]);


    // setInterval(()=>{
    //     if(produtos.length===limit) {
    //         console.table(Object.fromEntries(produtos))
    //     }
    // }, 1000)
    // implement aqui
    /**
     *     Nesta função é necessário implementar o callback,
     * pois será necessário ordenar os resultados no cliente
     * pelos produtos mais caros (reverso). É necessário chamar 
     * a função setValue() e o array list passados como parametro.
     * Para repassar os resultados do client React utiliza-se a função
     * setValue() com os parametros [...list], ou seja, setValue([...list])
     * onde em list deverá estar o array de produtos ordenados pelo preco
     * mais caro. Lembrando que list é um array, use os métodos para trabalhar
     * com arrays em JavaScript! Dica: usem reverse() ou unshift().
     * 
     *  */


}

function getMostCheap(db, callback) {
    console.log('getMostCheap');
    //implemente aqui
}

function getPriceRange(value, db, callback) {//0--->limit
    console.log('getPriceRange');

    //implemente aqui
}

export { getOrderByChild, getFilterByChild, getMostExpensive, getMostCheap, getPriceRange }
