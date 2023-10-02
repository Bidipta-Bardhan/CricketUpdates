async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=3cb682ea-648c-4d6a-aa4e-44aeceebc746&offset=0")
        .then(data=>data.json())
        .then(data=>{
            if(data.status!="success")
                return;
            const matchList=data.data;
            if(!matchList)
                return [];
            const relevantData=matchList.map(match=>`<span class="matchName">${match.name}: </span><span class="matchStatus">${match.status}</span>`);
            console.log(relevantData);
            document.getElementById("matchid").innerHTML=relevantData.map(match=>`<li>${match}</li>`).join('')
        })
}
getMatchData();