document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit-btn");
    const dateInput = document.getElementById("date-input");
    const resultDiv = document.getElementById("result");

    submitBtn.addEventListener("click", () => {
        const date = dateInput.value;
        fetch(`/api/${encodeURIComponent(date)}`)
            .then((response) => response.json())
            .then((data) => {
                resultDiv.textContent = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                console.error(error);
            });
    });
});
