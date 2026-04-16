const statusBox = document.getElementById('status')
const checkBtn = document.getElementById('check-btn')

const forgottenVar = 'цю змінну забули видалити'  // ESLint це знайде

function getStatus() {
  const now = new Date()
  const timeString = now.toLocaleTimeString('uk-UA')
  statusBox.textContent = `✅ Все працює. Перевірено о ${timeString}`
}

checkBtn.addEventListener('click', getStatus)
getStatus()