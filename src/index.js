// console.log("Your life is NOTHING!");
// // let body = document.querySelector("body");
// let h5 = document.createElement("h5");
// // h5.textContent = "your life is EVERYTHING!";
// // body.appendChild(h5);


// let test = document.getElementById("test");

// console.log(test.textContent);


// document.body.appendChild(h5)




// let content = document.getElementById("content");
// let h2 = document.createElement("h2");
// h2.textContent = "Welcome to One of the Restaurants of All Time!!!!!";
// content.appendChild(h2);

// let h3 = document.createElement("h3");
// h3.textContent = "10/10 Would eat at again.";
// content.appendChild(h3);

// let h6 = document.createElement("h6");
// h6.textContent = "- Gordon Ramsey";
// content.appendChild(h6);



// function renderNav()
// {
//     let menuNav = document.getElementById("menu-button");
//     menuNav.addEventListener("click", (e) =>
//     {

//     })
// }




const renderWebsite = (function() {
    // console.log("we're stuck on a different planet!");
    // let content = document.getElementById("content");
    // let h2 = document.createElement("h2");
    // h2.textContent = "Welcome to One of the Restaurants of All Time!!!!!";
    // content.appendChild(h2);

    // let h3 = document.createElement("h3");
    // h3.textContent = "10/10 Would eat at again.";
    // content.appendChild(h3);

    // let h6 = document.createElement("h6");
    // h6.textContent = "- Gordon Ramsey";
    // content.appendChild(h6);
    // let menuNav = document.getElementById("menu-button");
    // menuNav.addEventListener("click", (e) =>
    //     {
    //         content.innerHTML = "";
    //         console.log("I need a bigger gun!");

    //     })

    function renderHome() {
        console.log("we're stuck on a different planet!");
        let content = document.getElementById("content");
        let h2 = document.createElement("h2");
        h2.textContent = "Welcome to One of the Restaurants of All Time!!!!!";
        content.appendChild(h2);

        let h3 = document.createElement("h3");
        h3.textContent = "10/10 Would eat at again.";
        content.appendChild(h3);

        let h6 = document.createElement("h6");
        h6.textContent = "- Gordon Ramsey";
        content.appendChild(h6);
        let menuNav = document.getElementById("menu-button");
    }


    function renderMenu()
    {
        console.log("innnout menu");
        let menuList = document.createElement("ul");
        let menuItems = ["Double Double", "Cheeseburger", "French Fries", "Milkshake"]
        for (let i = 0; i < menuItems.length; i++)
        {
            let listItem = document.createElement("li");
            listItem.textContent = menuItems[i];
            menuList.appendChild(listItem);
        }
        content.appendChild(menuList);
    }

    function renderContact()
    {
        console.log("Contact Gaming");
        let header = document.createElement("h1");
        header.textContent = "Contact US!";
        let contactNumber = document.createElement("h3");
        contactNumber.textContent = "(420) 069-6969";
        content.appendChild(header);
        content.appendChild(contactNumber);
    }


    let homeNav = document.getElementById("home-button");
    homeNav.addEventListener("click", (e) =>
    {
        content.innerHTML = "";
        renderHome();
    })

    let menuNav = document.getElementById("menu-button")
    menuNav.addEventListener("click", (e) =>
    {
        content.innerHTML = "";
        renderMenu();
    })

    let contactNav = document.getElementById("contact-button")
    contactNav.addEventListener("click", (e) =>
    {
        content.innerHTML = "";
        renderContact();
    })

    // renderHome();


});







renderWebsite()