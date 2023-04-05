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
        list.push(snapshot.val())
    });

    console.log(list);
    
    list.reverse();

    // console.log(obj);
    console.log(list);
    setValue([...list]);
}

function getMostCheap(db, callback) {
    console.log('getMostCheap');
    //implemente aqui
    const limit=3;
    const filtro = 'preco';

    // console.log(db);
    // console.log(list);

    const refDB = ref(db, 'produtos/');
    const consulta = query(refDB, orderByChild(filtro), limitToFirst(limit))
    onChildAdded(consulta, callback)
}

function getPriceRange(value, db, callback) {//0--->limit
    console.log('getPriceRange');
    //implemente aqui
    const filtro = 'preco';
    console.log(value);
    let newvalue = parseFloat(value);
    console.log(newvalue);
    console.log(filtro);

    const refDB = ref(db, 'produtos/');
    const consulta = query(refDB, orderByChild(filtro), endAt(newvalue))
    // console.log(consulta)
    onChildAdded(consulta, callback);
}

export { getOrderByChild, getFilterByChild, getMostExpensive, getMostCheap, getPriceRange }
