let titles = [];
let names = [];
let posts = [];

//add new Message
function addpost() {
    let title = document.getElementById("title").value;
    let name = document.getElementById("name").value;
    let post = document.getElementById("textarea").value;
    titles.push(title);
    names.push(name);
    posts.push(post);

    myposts = document.getElementById("myposts");
    myposts.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        myposts.innerHTML += `
            
                <div class="post bg1">
                <b>  ${names[i]} </b> <br>
                <h5>  ${titles[i]} </h5>
                    ${posts[i]}
                </div>

                `;
    }
    document.getElementById("title").value = "";
    document.getElementById("name").value = "";
    document.getElementById("textarea").value = "";

    setArray("name", names);
    setArray("title", titles);
    setArray("textarea", posts);
    getArray("name");
    getArray("title");
    getArray("textarea");
}

// local Storage

function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}