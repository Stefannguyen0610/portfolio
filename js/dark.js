const chk = document.getElementById('chk');
const theme = localStorage.getItem('theme');
if(theme && theme == "dark") {
    document.body.classList.add('dark')
    chk.checked = true
} 

chk.addEventListener('change', (e) => {
    console.log(e.target.checked)
	document.body.classList.toggle('dark');
    localStorage.setItem('theme', e.target.checked ? "dark" : "light");
});

