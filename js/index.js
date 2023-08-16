const getSubmit = document.getElementById("submit");
const getForm = document.getElementById("github-form");

    getForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const submitInput = event.target.querySelector('input[id="search"]');
       
        const inputValue = submitInput.value
       
        fetch(`https://api.github.com/users/${inputValue}`)
        .then(response => response.json())
        .then(userData => {
    
            console.log("data",userData)
            const userList =document.getElementById("user-list");
            const userContainer = document.createElement("li");
            userList.innerHTML = ""
            userContainer.innerHTML = userData.login;
            userList.appendChild(userContainer);
            
            const userID = document.createElement("li");
            userID.innerHTML = userData.id;
            userList.appendChild(userID)

            const nodeId = document.createElement("li");
            nodeId.innerHTML = userData.node_id;
            userList.appendChild(nodeId)
            

            const avatarurlContainer = document.createElement("img");
            avatarurlContainer.src = userData.avatar_url;
            userList.appendChild(avatarurlContainer)
            
            const gravatarId = document.createElement("li");
            gravatarId.innerHTML = userData.gravatar_id;
            userList.appendChild(gravatarId);

            const urlData = document.createElement("li")
            urlData.innerHTML = userData.url;
            userList.appendChild(urlData);
             
            const htmlData = document.createElement("li")
            htmlData.innerHTML = userData.html_url;
            userList.appendChild(htmlData);

            const followersUrl = document.createElement("li");
            followersUrl.innerHTML = userData.html_url;
            userList.appendChild(followersUrl);

            const followingUrl = document.createElement("li");
            followingUrl.innerHTML = userData.following_url;
            userList.appendChild(followingUrl)

            const gistsUrl = document.createElement("li");
            gistsUrl.innerHTML = userData.gists_url;
            userList.appendChild(gistsUrl);

            const starredUrl = document.createElement("li");
            starredUrl.innerHTML = userData.starred_url;
            userList.appendChild(starredUrl);

            const subscriptionsUrl = document.createElement("li");
            subscriptionsUrl.innerHTML = userData.subscriptions_url;
            userList.appendChild(subscriptionsUrl);

            const organizationsUrl = document.createElement("li");
            organizationsUrl.innerHTML = userData. organizations_url;
            userList.appendChild(organizationsUrl);

            const reposUrl = document.createElement("li");
            reposUrl.innerHTML = userData.repos_url;
            userList.appendChild(reposUrl);

            const eventsUrl = document.createElement("li");
            eventsUrl.innerHTML = userData.events_url;
            userList.appendChild(eventsUrl);

            const receivedEventsUrl = document.createElement("li");
            receivedEventsUrl.innerHTML = userData.received_events_url;
            userList.appendChild(receivedEventsUrl);

            const type = document.createElement("li");
            type.innerHTML = userData.type
            userList.appendChild(type);

            const siteAdmin = document.createElement("li");
            siteAdmin.innerHTML = userData.site_admin;
            userList.appendChild(siteAdmin);
          
        })
        
    })



