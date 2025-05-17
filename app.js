function showTab(tab) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.remove('active'));
  document.querySelectorAll('.tabs li').forEach(li => li.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelectorAll('.tabs li')[tab === 'fin' ? 0 : 1].classList.add('active');
}

function formatTime(date) {
  return date.getHours().toString().padStart(2, '0') + 'h' + date.getMinutes().toString().padStart(2, '0');
}

document.getElementById('form-fin').addEventListener('submit', function (e) {
  e.preventDefault();
  const prog = document.getElementById('progDuration').value;
  const end = document.getElementById('desiredEnd').value;

  const [ph, pm] = prog.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);

  const now = new Date();
  const desiredEnd = new Date();
  desiredEnd.setHours(eh, em, 0, 0);

  if (desiredEnd < now) desiredEnd.setDate(desiredEnd.getDate() + 1);

  const start = new Date(desiredEnd.getTime() - (ph * 60 + pm) * 60000);
  const diff = Math.round((start - now) / 60000);

  const hoursRounded = Math.ceil(diff / 60);

  document.getElementById('finResult').innerText =
    `⏳ Réglez la fin différée sur ${hoursRounded}h

🕓 Départ du programme : ${formatTime(start)}
⏰ Fin du programme :     ${formatTime(desiredEnd)}`;
});


document.getElementById('form-depart').addEventListener('submit', function (e) {
  e.preventDefault();

  const startTime = document.getElementById('startHour').value;
  
  const [sh, sm] = startTime.split(':').map(Number);

  const now = new Date();
  const desiredStart = new Date();
  desiredStart.setHours(sh, sm, 0, 0);

  if (desiredStart < now) desiredStart.setDate(desiredStart.getDate() + 1);

  const delayMs = desiredStart - now;
  const delayMins = Math.round(delayMs / 60000);
  const delayH = Math.ceil(delayMins / 60);

  document.getElementById('departResult').innerText =
    `⏱️ Lance un départ différé de ${delayH}h`;
});

