// const { default: axios } = require("axios");

const btnFetch=document.querySelector('.transaction-btn');
const transactionRow=document.querySelector('.transactionRow');
const transactionTbl=document.querySelector('.transactionTbl');
const searchInput=document.getElementById('search-transaction');
const inputSearch=document.querySelector('.input-search');
const dateSort=document.querySelector('.date-sort');
const priceSort=document.querySelector('.price-sort');


// ----------------------------------------
const path='http://localhost:3000/transactions';
let allTransactions=[];

const options={year:'numeric',
month:'numeric',
day:'numeric',
hour:'2-digit',
minute:'2-digit'}

btnFetch.addEventListener('click',fetchTransactions);
searchInput.addEventListener('input',inputSearchQuery);
priceSort.addEventListener('click',sortPrice)
dateSort.addEventListener('click',sortDate);


function inputSearchQuery(e){

    let searchQuery=e.target.value.toLowerCase().toString();
    axios
    .get(`http://localhost:3000/transactions?refId_like=${searchQuery}`)
    .then(({data})=>{
        transactionRow.innerHTML="";
        let transaction=data;
        let result='';
        for(let item of transaction){
            
            result+=`
            <tr>
<td>${item.id}</td>
<td class=${item.type==='افزایش اعتبار' ? 'green':'red'}>${item.type}</td>
<td>${item.price}</td>
<td>${item.refId}</td>
<td>${new Date(item.date).toLocaleString('fa-IR',options)}</td>
</tr>`
 transactionRow.innerHTML=result;

 
        }

    })
    .catch((error)=>{console.log(error)});

}

function sortPrice(){
    priceSort.classList.toggle('rotated');
if(priceSort.classList.contains('rotated')){
    axios
    .get(`http://localhost:3000/transactions?_sort=price&_order=desc`)
    .then(({data})=>{
        transactionRow.innerHTML="";
        let transaction=data;
        let result='';
        for(let item of transaction){
            result+=`
            <tr>
<td>${item.id}</td>
<td class=${item.type==='افزایش اعتبار' ? 'green':'red'}>${item.type}</td>
<td>${item.price}</td>
<td>${item.refId}</td>
<td>${new Date(item.date).toLocaleString('fa-IR',options)}</td>
</tr>`
 transactionRow.innerHTML=result;

 
        }

    })
    .catch((error)=>{console.log(error)});
}else{
    axios
    .get(`http://localhost:3000/transactions?_sort=price&_order=asc`)
    .then(({data})=>{
        transactionRow.innerHTML="";
        let transaction=data;
        let result='';
        for(let item of transaction){
            result+=`
            <tr>
<td>${item.id}</td>
<td class=${item.type==='افزایش اعتبار' ? 'green':'red'}>${item.type}</td>
<td>${item.price}</td>
<td>${item.refId}</td>
<td>${new Date(item.date).toLocaleString('fa-IR',options)}</td>
</tr>`
 transactionRow.innerHTML=result;

 
        }

    })
    .catch((error)=>{console.log(error)});
}
}

function sortDate(){

    dateSort.classList.toggle('rotated');
    if(dateSort.classList.contains('rotated')){
        
        axios
        .get(`http://localhost:3000/transactions?_sort=date&_order=desc`)
        .then(({data})=>{
            transactionRow.innerHTML="";
            let transaction=data;
            let result='';
            for(let item of transaction){
                result+=`
                <tr>
    <td>${item.id}</td>
    <td class=${item.type==='افزایش اعتبار' ? 'green':'red'}>${item.type}</td>
    <td>${item.price}</td>
    <td>${item.refId}</td>
    <td>${new Date(item.date).toLocaleString('fa-IR',options)}</td>
    </tr>`
     transactionRow.innerHTML=result;
    
     
            }
    
        })
        .catch((error)=>{console.log(error)});
    }else{
        axios
        .get(`http://localhost:3000/transactions?_sort=date&_order=asc`)
        .then(({data})=>{
            transactionRow.innerHTML="";
            let transaction=data;
            let result='';
            for(let item of transaction){
                result+=`
                <tr>
    <td>${item.id}</td>
    <td class=${item.type==='افزایش اعتبار' ? 'green':'red'}>${item.type}</td>
    <td>${item.price}</td>
    <td>${item.refId}</td>
    <td>${new Date(item.date).toLocaleString('fa-IR',options)}</td>
    </tr>`
     transactionRow.innerHTML=result;
    
     
            }
    
        })
        .catch((error)=>{console.log(error)});
    }
}

function fetchTransactions(){

transactionTbl.classList.remove("hidden");
btnFetch.classList.add('hidden');
inputSearch.classList.remove('hidden');

    axios.get(path).then(({data})=>{
        allTransactions=data;
        
        let result='';
        for(let item of allTransactions){
            
            result+=`
            <tr>
<td>${item.id}</td>
<td class=${item.type==='افزایش اعتبار' ? 'green':'red'} >${item.type}</td>
<td>${item.price}</td>
<td>${item.refId}</td>
<td>${new Date(item.date).toLocaleString('fa-IR',options)}</td>
</tr>`

 transactionRow.innerHTML=result;
 

}}).catch((err)=> console.log(err.response.data));
}









