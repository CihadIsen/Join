loadAmount();
setTimeout(() => {
    let summarySiebar=document.getElementById('summarySiebar');
    summarySiebar.style.backgroundColor='#D2E3FF';
    summarySiebar.style.borderRadius='8px';
}, 200);
setTimeout(() => {
    getInitials();
}, 1000);

async function loadAmount() {
    try {
      
       
    

        const amount = JSON.parse(await getItem('amount'));
        const tasksToDo = document.getElementById("tasksToDo");
        const tasksInProgress = document.getElementById("tasksInProgress");
        const tasksAwaitFeedback = document.getElementById("tasksAwaitFeedback");
        const tasksDone = document.getElementById("tasksDone");
        const tasksInBoard = document.getElementById("tasksInBoard");
        
        tasksToDo.innerHTML = amount[0]['amountToDo'];
        tasksInProgress.innerHTML= amount[0]['amountInProgress'];
        tasksAwaitFeedback.innerHTML = amount[0]['amountAawaitFeedback'];
        tasksDone.innerHTML = amount[0]['amountDone'];
        tasksInBoard.innerHTML = amount[0]['totalTasks'];
        userName= (await getItem('userName'));

        const goodMorning = document.getElementById('goodMornig');
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        let greeting;

        if (currentHour >= 5 && currentHour < 12) {
            greeting = "Guten Morgen";
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = "Guten Tag";
        } else if (currentHour >= 18 && currentHour < 22) {
            greeting = "Guten Abend";
        } else {
            greeting = "Gute Nacht";
        }

        goodMorning.innerHTML = `${greeting}, <span style="color: #4589FF; font-weight: bold; font-size: 60px;">${userName}</span>`;


    } catch (e) {
        console.error('Loading error:', e);
    }
}

function goToBoard(){
    window.location.href = 'board.html';
}
