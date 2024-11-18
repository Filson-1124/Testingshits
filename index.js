const sidebarButton=document.getElementById('toggle-button')
const sidebar= document.getElementById('sidebar')
const links= document.querySelectorAll(".link")
const muter= document.getElementById('coachella')
const muteBut=document.getElementById('muted')
const unmuteBut=document.getElementById('unmute')
const artistCard=document.getElementById('artistCard')
const dialog= document.getElementById('schedOne')
const dialogS= document.getElementById('schedTwo')
document.querySelector('.artistsContainer').scrollLeft = 0;
muter.play;
muter.volume=0.07
dialog.close()
dialogS.close()
function showDialogFirst(){
    dialog.showModal()
}

function closeDialogFirst(){
    dialog.close()
}

function showDialogSecond(){
    dialogS.showModal()
}

function closeDialogSecond(){
   dialogS.close()
}

function toggleSideBar(){
    sidebar.classList.toggle('close')
    sidebarButton.classList.toggle('ikot')
}


function toggleCard(link){
    link.parentElement.classList.toggle('expand');
}

function toggleFAQ(link){
    link.parentElement.parentElement.classList.toggle('xpandQuestion');
}


function mute(){
    if(muter.hasAttribute("muted")){
        muter.removeAttribute("muted")
        muter.volume = 0.1
        unmuteBut.classList.add('audioButShow')
        muteBut.classList.remove('audioButShow')
    }else{
        muter.setAttribute("muted","true")
        muter.volume= 0
        unmuteBut.classList.remove('audioButShow')
        muteBut.classList.add('audioButShow')
    }
}
function openCoachellaPasses() {
    window.open("https://www.coachella.com/passes", '_blank');
}
function showMap(mapId) {
    const maps = document.querySelectorAll('.map');
    maps.forEach(map => {
        map.style.display = 'none';
    });
    const selectedMap = document.getElementById(mapId);
    if (selectedMap) {
        selectedMap.style.display = 'block';
    }
}

function showImage(imageSrc) {
    const mapHolder = document.querySelector('.map-holder');

    mapHolder.innerHTML = '';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Coachella Map';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    mapHolder.appendChild(img);
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("map-btn")) {
        const targetId = event.target.getAttribute("data-target");

        const images = document.querySelectorAll(".maps img");
        images.forEach((img) => {
            img.classList.remove("visible");
        });

        const targetImg = document.getElementById(targetId);
        if (targetImg) {
            targetImg.classList.add("visible");
        }
    }
});









