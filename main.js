let theInput = document.querySelector(".get-repo input");
let Button = document.querySelector(".get-repo .button");
let result_name = document.querySelector(".add-name");
let result_email = document.querySelector(".add-email");
let result_phone = document.querySelector(".add-phone");
let checkbox_name = document.getElementById("name")
let checkbox_email = document.getElementById("email")
let name_btn = document.querySelector(".check-btn span.name");
let email_btn = document.querySelector(".check-btn span.email")
let phone_btn = document.querySelector(".check-btn span.phone")

name_btn.onclick = () => {
    document.querySelector(".name-card").classList.toggle("d-none");
    name_btn.classList.toggle("active");
}
email_btn.onclick = () => {
    document.querySelector(".email-card").classList.toggle("d-none");
    email_btn.classList.toggle("active");
}
phone_btn.onclick = () => {
    document.querySelector(".phone-card").classList.toggle("d-none");
    phone_btn.classList.toggle("active");
}

Button.onclick = () => {
    getRepo();
}

function getRepo() {
    if (theInput.value !== '') {
        fetch(`${theInput.value}`)

            .then((response) => response.json())

            .then((json) => {

                json.forEach(ele => {
                    let check_name_div = document.createElement("div");
                    let text_name = document.createTextNode(ele.name);
                    check_name_div.appendChild(text_name);
                    document.querySelector(".name-card").appendChild(check_name_div)


                });
                json.forEach(ele => {
                    let check_email_div = document.createElement("div");
                    let text_email = document.createTextNode(ele.email);
                    check_email_div.appendChild(text_email);
                    document.querySelector(".email-card").appendChild(check_email_div)


                });
                json.forEach(ele => {
                    let check_phone_div = document.createElement("div");
                    let text_phone = document.createTextNode(ele.phone);
                    check_phone_div.appendChild(text_phone);
                    document.querySelector(".phone-card").appendChild(check_phone_div)
                });
            })


    } else {
        let rsesult = document.createElement("span");
        let rsesult_span_text = document.createTextNode("The Input Is Empty, Enter The Username")

    }
};

