
let cityNames=[
    {
        arabicName:'القاهرة',
        englishName:'Caior',
        code:'EG'
    },
    {
        arabicName:'دمياط',
        englishName:'Dumyāţ',
        code:'EG'
    },
    {
        arabicName:'الرياض',
        englishName:'Ar Riyāḑ',
        code:'SA'
    },
    {
        arabicName:'القصيم',
        englishName:'Al Qaşīm',
        code:'SA'
    }
]

function setThePage(){
    let selections=document.getElementById('selections');
    for(names of cityNames)
    {
        selections.innerHTML+=`
        <option>${names.arabicName}</option>
        `
    }
    document.getElementById('heading').innerText=cityNames[0].arabicName;
    setTheTimes(cityNames[0].arabicName);
}

function setTheTimes(value){
    let selectedCiyt= cityNames.find((obj)=>{return obj.arabicName === value});
    document.getElementById('heading').innerText=selectedCiyt.arabicName;
    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${selectedCiyt.englishName}&country=${selectedCiyt.code}`)
    .then((response)=>{
        console.log(response);
        document.getElementById('date').innerText=response.data.data.date.hijri.weekday.ar+" - "+response.data.data.date.readable
        document.getElementById('1').innerText=response.data.data.timings.Fajr;
        document.getElementById('2').innerText=response.data.data.timings.Sunrise;
        document.getElementById('3').innerText=response.data.data.timings.Dhuhr;
        document.getElementById('4').innerText=response.data.data.timings.Asr;
        document.getElementById('5').innerText=response.data.data.timings.Maghrib;
        document.getElementById('6').innerText=response.data.data.timings.Isha;
    })
}

setThePage();