alert("🚀 Welcome to ProjectHub!");

function buyProject(projectName) {
    alert("🎉 Thank you for buying: " + projectName);
}

function watchVideo(projectName) {
    alert("▶ Video for " + projectName + " will be available soon.");
}

function searchProject() {

    let search = document.getElementById("searchBox").value.toLowerCase();

    if(search.includes("smart")){
        alert("🚗 Smart Car Found!");
    }

    else if(search.includes("volcano")){
        alert("🌋 Science Volcano Found!");
    }

    else if(search.includes("robot")){
        alert("🤖 Bluetooth Robot Found!");
    }

    else if(search.includes("drone")){
        alert("🚁 Mini Drone Found!");
    }

    else if(search.includes("wind")){
        alert("⚡ Windmill Generator Found!");
    }

    else if(search.includes("bridge")){
        alert("🌉 Bridge Model Found!");
    }

    else if(search==""){
        alert("Please type a project name.");
    }

    else{
        alert("❌ Project Not Found.");
    }

}

function uploadProject(){
    alert("✅ Project Uploaded Successfully!");
}

function login(){
    alert("👤 Login feature coming soon.");
}

function signup(){
    alert("🎉 Account Created Successfully.");
}

function subscribe(){
    alert("📧 Thank you for subscribing!");
}

console.log("ProjectHub Loaded Successfully.");