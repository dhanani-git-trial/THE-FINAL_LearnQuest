import { create_temp_vars } from "$lib/server/create_a_quest";

const form = document.getElementById("questForm") as HTMLFormElement;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const n = localStorage.getItem("name") || "UNKNOWN";
    const e = localStorage.getItem("email") || "UNKNOWN";
    const q = localStorage.getItem("selectedQuestType") || "UNKNOWN";
    const a = localStorage.getItem("allowRemix") || "UNKNOWN";
    let qc = 0;
    if (localStorage.getItem("questionCount") != null) {
    qc = localStorage.getItem("questionCount");
    }
    
    create_temp_vars(n, e, q, a, qc);
});
