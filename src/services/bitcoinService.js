import axios from 'axios'
// import { storageService } from './storage.service.js';
// import { asyncStorageService } from './async-storage.service.js';
// import { httpService } from './http.service.js';
const KEY = 'bitcoins';
const BITCOIN_URL = 'https://api.blockchain.info/'

// var gFilterBy = {txt: '', pageIdx: 0}
// var gBitcoins = _createBitcoins();

export const bitcoinService = {
    // query,
    getRate,
    getMarketPrice,
    getTradeVolume
    // remove,
    // getEmptyBitcoin,
    // save,
    // getBitcoinById,
    // setFilter,
    // nextPage
};

// function setFilter(filterBy) {
//     gFilterBy.txt = filterBy.txt
//     gFilterBy.pageIdx = 0;
// }
// function nextPage() {
//     gFilterBy.pageIdx++
// }

function getRate(coins){
    return axios.get(BITCOIN_URL + `tobtc?currency=USD&value=${coins}&cors=true`)
    .then(res => res.data)
}

function getMarketPrice(){
    return axios.get(BITCOIN_URL + `charts/market-price?timespan=5months&format=json&cors=true`)
    .then(res => res.data)
}

function getTradeVolume(){
    return axios.get(BITCOIN_URL + `charts/trade-volume?timespan=5months&format=json&cors=true`)
    .then(res => res.data)
}

// function query(filterBy) {
//     return httpService.get('bitcoin', { params: filterBy})
//     // return axios.get(BITCOIN_URL, { params: filterBy})
//     //     .then(res => res.data)
//         //  { params: gFilterBy }
//     // return asyncStorageService.query(KEY)
//     // return JSON.parse(JSON.stringify(gBitcoins));
// }

// function toggleCompleted(id, currTime) {
//     const bitcoin = gBitcoins.find((bitcoin) => bitcoin._id === id);
//     bitcoin.completedAt = currTime;
//     _saveBitcoinsToStorage(gBitcoins);
// }

// function remove(id){
//     return httpService.delete('bitcoin/' + id)
//     // return axios.delete(BITCOIN_URL + id).then(res => res.data)
//     // return asyncStorageService.remove(KEY, id)
//     // const idx = gBitcoins.find(bitcoin => bitcoin._id === id);
//     // gBitcoins.splice(idx,1);
//     // _saveBitcoinsToStorage(gBitcoins);
// }

// function save(bitcoin){
//     if (bitcoin._id) {
//         return httpService.put('bitcoin/' + bitcoin._id, bitcoin)
//         // return axios.put(BITCOIN_URL + bitcoin._id, bitcoin).then(res => res.data)
//     } else {
//         return httpService.post('bitcoin', bitcoin)
//         // return axios.post(BITCOIN_URL, bitcoin).then(res => res.data)
//     }

//     // const savedBitcoin = (bitcoin._id) ? asyncStorageService.put(KEY, bitcoin) : asyncStorageService.post(KEY, bitcoin)
//     // return savedBitcoin;
//     // if(newBitcoin._id){
//     //     const idx = gBitcoins.find(bitcoin => bitcoin._id === newBitcoin._id);
//     //     if(idx<0) return;
//     //     gBitcoins.splice(idx,1,newBitcoin);
//     // }else{ 
//     //     newBitcoin._id = utilService.makeId();
//     //     gBitcoins.unshift(newBitcoin);}
//     // _saveBitcoinsToStorage(gBitcoins);
// }

// function getEmptyBitcoin(){
//     return { 
//         name: '', 
//         price: 0,
//         type: null, 
//         createdAt: null, 
//         inStock: true
//     }
// }

// function getBitcoinById(id){
//     return httpService.get('bitcoin/' + id)
//     // return axios.get(BITCOIN_URL + id).then(res => res.data)
//     // return asyncStorageService.get(KEY, id)
//     // return gBitcoins.find(bitcoin => bitcoin._id === bitcoinId)
// }

// function _createBitcoins() {
//     var bitcoins = JSON.parse(localStorage.getItem(KEY))
//     // let bitcoins = storageService.load(TODO_KEY);
//     if (!bitcoins || !bitcoins.length) {
//         bitcoins = [
//             {
//                 "_id": utilService.makeId(),
//                 "name": "nec eget",
//                 "price": 60,
//                 "type": "Educational",
//                 "createdAt": 152347895021110,
//                 "inStock": false
//                 },
//                 {
//                 "_id": utilService.makeId(),
//                 "name": "dui ac",
//                 "price": 8,
//                 "type": "Funny",
//                 "createdAt": 152347895032643,
//                 "inStock": false
//                 },
//                 {
//                 "_id": utilService.makeId(),
//                 "name": "massa et",
//                 "price": 96,
//                 "type": "Educational",
//                 "createdAt": 152347895034643,
//                 "inStock": false
//                 },
//                 {
//                     "_id": utilService.makeId(),
//                     "name": "consequat curabitur",
//                     "price": 58,
//                     "type": "Funny",
//                     "createdAt": 152347892032643,
//                     "inStock": false
//                     },
//         ];
//         localStorage.setItem(KEY, JSON.stringify(bitcoins))

//     }
//     // _saveBitcoinsToStorage(bitcoins)
//     return bitcoins;
// }


// function _saveBitcoinsToStorage(value){
//     storageService.store(TODO_KEY, value);
// }
