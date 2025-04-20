const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function renderCalendar(month, year) {
  calendar.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = `${monthNames[month]} ${year}`;

  const todayDate = new Date();
  const isCurrentMonth = month === todayDate.getMonth() && year === todayDate.getFullYear();

  // Fill in blank tiles before first day
  for (let i = 0; i < firstDay; i++) {
    const blankTile = document.createElement("div");
    blankTile.classList.add("day-tile");
    blankTile.style.visibility = "hidden";
    calendar.appendChild(blankTile);
  }

  // Render all days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayTile = document.createElement("div");
    dayTile.className = "day-tile";
    dayTile.textContent = day;

    if (isCurrentMonth && day === todayDate.getDate()) {
      dayTile.classList.add("today");
    }

    dayTile.addEventListener("click", () => {
      const event = prompt(`Add event for ${day} ${monthNames[month]} ${year}`);
      if (event) {
        const popup = document.createElement("div");
        popup.className = "event-popup";
        popup.textContent = event;
        dayTile.appendChild(popup);

        setTimeout(() => {
          popup.remove();
        }, 5000);
      }
    });

    calendar.appendChild(dayTile);
  }
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
}

renderCalendar(currentMonth, currentYear);
