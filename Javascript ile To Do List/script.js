// Elementleri seçme
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const toastLive = document.getElementById('liveToast');

// Toast bildirimi fonksiyonu
function showToast() {
    const toast = new bootstrap.Toast(toastLive);
    toast.show();
}

// Görev ekleme fonksiyonu
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Boş görev ekleyemezsiniz!");
    } else {
        // Listeye yeni bir öğe ekleme
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `${taskValue} <button class="btn btn-danger btn-sm delete-btn">Sil</button>`;

        taskList.appendChild(li);
        showToast(); // Toast bildirimi göster

        // Görev silme fonksiyonunu tetikleme
        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteTask);

        // Input alanını temizleme
        taskInput.value = "";
    }
}

// Görev silme fonksiyonu
function deleteTask(e) {
    e.target.parentElement.remove();
}

// Ekle butonuna tıklayınca görev ekleme
addTaskBtn.addEventListener("click", addTask);

// Enter tuşuna basıldığında da görev ekle
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
