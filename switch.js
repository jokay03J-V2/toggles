export function setupSwitchs() {
  let switchs = document.getElementsByTagName("input")
  for (let i = 0; i < switchs.length; i++) {
    switchs[i].addEventListener("change", changeCheckbox)
  }

  function changeCheckbox(ev) {
    let el1 = document.getElementById("1")
    let el2 = document.getElementById("2")
    let el3 = document.getElementById("3")
    let el4 = document.getElementById("4")
    let el5 = document.getElementById("5")
    switch (ev.target.id) {
      case "1":
        el1.checked = el1.checked        
        el2.checked = !el2.checked
        el4.checked = !el4.checked
      break;
      case "2":
        el3.checked = !el3.checked
        break;
      case "3":
        el3.checked = el3.checked
        break;
      case "4":
        el2.checked = !el2.checked
        break;
      case "5":
        el1.checked = !el1.checked
        el2.checked = !el2.checked
        el3.checked = !el3.checked
        el4.checked = !el4.checked
        break;
    }
  }
}