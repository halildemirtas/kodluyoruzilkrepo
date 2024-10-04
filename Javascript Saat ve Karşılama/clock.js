function showTime() {
  const name = prompt("Adınızı giriniz:");
  document.getElementById('myName').innerText = name;

  function updateTime() {
    const now = new Date();
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const day = days[now.getDay()];
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('myClock').innerText = `${hour}:${minute}:${second} ${day}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

showTime();
