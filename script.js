/* Live preview update - minimal JavaScript for real-time refresh */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value.trim() || "-";
}

function update() {
  // Basic info
  setText("pName", document.getElementById("fName").value);
  setText("pJob", document.getElementById("fJob").value);
  setText("pEmail", document.getElementById("fEmail").value);
  setText("pPhone", document.getElementById("fPhone").value);
  setText("pLoc", document.getElementById("fLoc").value);
  setText("pWeb", document.getElementById("fWeb").value);

  // Objective
  setText("pObjective", document.getElementById("fObjective").value);

  // Education
  setText("pDegree", document.getElementById("fDegree").value);
  setText("pCollege", document.getElementById("fCollege").value);
  setText("pYear", document.getElementById("fYear").value);
  setText("pScore", document.getElementById("fScore").value);

  // Experience
  setText("pRole", document.getElementById("fRole").value);
  setText("pCompany", document.getElementById("fCompany").value);
  setText("pDuration", document.getElementById("fDuration").value);
  setText("pWork", document.getElementById("fWork").value);

  // Projects
  setText("pProj", document.getElementById("fProj").value);
  setText("pProjDesc", document.getElementById("fProjDesc").value);

  // Skills -> chips
  const skills = document.getElementById("fSkills").value
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  const box = document.getElementById("pSkills");
  box.innerHTML = "";
  if (skills.length === 0) {
    box.innerHTML = "<span>-</span>";
  } else {
    skills.forEach(skill => {
      const chip = document.createElement("span");
      chip.textContent = skill;
      box.appendChild(chip);
    });
  }
}

// Initial load
update();
