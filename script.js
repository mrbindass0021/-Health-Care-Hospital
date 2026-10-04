/* ===== 1. SITE DATA - edit your hospital content here ===== */
const DEPTS = [
  ["fa-heart-pulse", "Cardiology", "Heart care, ECG, angiography and cardiac surgery."],
  ["fa-brain", "Neurology", "Treatment for brain, spine and nerve disorders."],
  ["fa-bone", "Orthopedics", "Joint replacement, fractures and sports injuries."],
  ["fa-baby", "Pediatrics", "Gentle healthcare for infants, children and teens."],
  ["fa-spa", "Dermatology", "Skin, hair and nail care with laser treatments."],
  ["fa-venus", "Gynecology", "Women's health, maternity and fertility care."],
  ["fa-stethoscope", "General Medicine", "Everyday illness, diabetes and preventive care."],
  ["fa-tooth", "Dental Care", "Cleaning, implants, braces and cosmetic dentistry."]
];
const DOCTORS = [
  ["Dr. Rahul Sharma", "Cardiologist", "Cardiology", "15+", 5, "doctor1.jpg"],
  ["Dr. Priya Mehta", "Neurologist", "Neurology", "12+", 5, "doctor2.jpg"],
  ["Dr. Arjun Verma", "Orthopedic Specialist", "Orthopedics", "10+", 4, "doctor3.jpg"],
  ["Dr. Neha Kapoor", "Pediatrician", "Pediatrics", "9+", 5, "doctor4.jpg"]
];
const SERVICES = [
  ["fa-kit-medical", "Emergency Care", "Round-the-clock trauma and emergency team."],
  ["fa-clipboard-check", "Health Checkups", "Preventive packages for every age group."],
  ["fa-vial", "Diagnostic Tests", "In-house lab, X-ray, CT, MRI and ultrasound."],
  ["fa-pills", "Pharmacy", "24/7 pharmacy with genuine medicines."],
  ["fa-truck-medical", "Ambulance", "GPS-tracked ambulances with trained paramedics."],
  ["fa-bed-pulse", "ICU", "Advanced intensive care with constant monitoring."],
  ["fa-user-doctor", "Surgery", "Minimally invasive and robotic-assisted surgery."],
  ["fa-video", "Online Consultation", "Talk to a doctor by video from home."]
];
const FACILITIES = [
  ["fa-hospital", "Modern Operation Theaters"], ["fa-bed-pulse", "ICU & Critical Care"],
  ["fa-x-ray", "Advanced Diagnostic Center"], ["fa-door-open", "Private Rooms"],
  ["fa-prescription-bottle-medical", "Pharmacy"], ["fa-mug-hot", "Cafeteria"],
  ["fa-truck-medical", "Ambulance"], ["fa-couch", "Waiting Lounge"]
];
const TESTIMONIALS = [
  ["Anita Singh", "The staff were caring and the doctors explained everything clearly. I felt safe throughout my treatment.", 5],
  ["Vikram Joshi", "Booking was easy and there was almost no waiting. The cardiology team was outstanding.", 5],
  ["Meera Nair", "Clean, calm and well organised. My daughter was comfortable at the pediatric ward.", 4],
  ["Sanjay Gupta", "Fast diagnostics and a very helpful emergency team. Highly recommended.", 5]
];
const BLOG = [
  ["fa-heart", "Heart Health", "5 Tips for a Healthy Heart", "Simple daily habits that protect your heart for life."],
  ["fa-user-check", "Checkups", "When Should You Get a Full Body Checkup?", "Learn the right age and frequency for preventive screening."],
  ["fa-leaf", "Lifestyle", "How to Maintain a Healthy Lifestyle", "Food, sleep and movement advice from our doctors."]
];
const TIMES = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

/* ===== 2. Helpers ===== */
const $ = (s) => document.querySelector(s);
const stars = (n) => '<span class="stars" aria-label="' + n + ' out of 5 stars">' + "★".repeat(n) + "☆".repeat(5 - n) + "</span>";
const mount = (id, arr, fn) => { const el = document.getElementById(id); if (el) el.innerHTML = arr.map(fn).join(""); };
const col = (inner, cls = "col-sm-6 col-lg-3") => `<div class="${cls} reveal">${inner}</div>`;

/* ===== 3. Navbar, footer, modals (injected on every page) ===== */
const page = document.body.dataset.page;
const links = [["index.html", "Home", "index"], ["about.html", "About", "about"], ["departments.html", "Departments", "departments"],
  ["doctors.html", "Doctors", "doctors"], ["services.html", "Services", "services"], ["index.html#facilities", "Facilities", ""],
  ["appointment.html", "Appointment", "appointment"], ["contact.html", "Contact", "contact"]];
document.body.insertAdjacentHTML("afterbegin", `
<div id="loader"><div class="spin" role="status"><span class="visually-hidden">Loading</span></div></div>
<nav class="navbar navbar-expand-xl sticky-top"><div class="container">
  <a class="navbar-brand" href="index.html"><i class="fa-solid fa-hospital"></i>CarePlus Hospital</a>
  <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Toggle menu"><i class="fa-solid fa-bars"></i></button>
  <div class="collapse navbar-collapse" id="menu">
    <ul class="navbar-nav mx-auto">${links.map(l => `<li class="nav-item"><a class="nav-link ${l[2] === page ? "active" : ""}" href="${l[0]}">${l[1]}</a></li>`).join("")}</ul>
    <button class="btn btn-link text-dark me-2" data-bs-toggle="modal" data-bs-target="#searchModal" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
    <button class="btn btn-teal" data-book>Book Appointment</button>
  </div></div></nav>`);
document.body.insertAdjacentHTML("beforeend", `
<footer><div class="container"><div class="row g-4">
 <div class="col-6 col-lg-3"><h4>Hospital</h4><a href="about.html">About Us</a><a href="doctors.html">Doctors</a><a href="departments.html">Departments</a><a href="#">Careers</a></div>
 <div class="col-6 col-lg-3"><h4>Services</h4><a href="services.html">Emergency</a><a href="services.html">Diagnostics</a><a href="services.html">Pharmacy</a><a href="services.html">Ambulance</a></div>
 <div class="col-6 col-lg-3"><h4>Patient Resources</h4><a href="appointment.html">Book Appointment</a><a href="index.html#blog">Health Tips</a><a href="#">FAQs</a><a href="contact.html">Contact</a></div>
 <div class="col-6 col-lg-3"><h4>Contact</h4><a href="tel:+919876543210"><i class="fa-solid fa-phone me-2"></i>+91 98765 43210</a><a href="mailto:care@careplushospital.com"><i class="fa-solid fa-envelope me-2"></i>care@careplushospital.com</a><p><i class="fa-solid fa-location-dot me-2"></i>123 Healthcare Avenue, New Delhi, India</p>
 <div class="social"><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a></div></div>
</div><hr class="border-secondary mt-4"><p class="text-center mb-0 small">© 2026 CarePlus Hospital. All Rights Reserved.</p></div></footer>
<button id="toTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
<div class="toast-container position-fixed top-0 end-0 p-3" style="z-index:4000"><div id="toast" class="toast align-items-center border-0 text-white" role="alert"><div class="d-flex"><div class="toast-body" id="toastMsg"></div><button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div></div></div>
<div class="modal fade" id="apptModal" tabindex="-1" aria-labelledby="apptTitle" aria-hidden="true"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content p-3">
 <div class="modal-header border-0"><h2 class="modal-title fs-4" id="apptTitle">Book an Appointment</h2><button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" id="apptModalBody"></div></div></div></div>
<div class="modal fade" id="searchModal" tabindex="-1" aria-label="Search"><div class="modal-dialog modal-dialog-centered"><div class="modal-content p-3">
 <label for="searchInput" class="visually-hidden">Search</label><input id="searchInput" class="form-control form-control-lg" placeholder="Search doctors, departments, services...">
 <div id="searchResults" class="list-group mt-3"></div></div></div></div>`);

/* ===== 4. Render sections from data ===== */
mount("deptGrid", DEPTS, d => col(`<div class="cardx dept" data-name="${d[1].toLowerCase()}"><div class="icon-box"><i class="fa-solid ${d[0]}"></i></div><h3 class="fs-5">${d[1]}</h3><p class="text-muted small">${d[2]}</p><a href="doctors.html" class="btn btn-blue-outline btn-sm">Learn More</a></div>`));
mount("svcGrid", SERVICES, s => col(`<div class="cardx"><div class="icon-box"><i class="fa-solid ${s[0]}"></i></div><h3 class="fs-5">${s[1]}</h3><p class="text-muted small mb-0">${s[2]}</p></div>`));
mount("facGrid", FACILITIES, f => col(`<div class="fac"><i class="fa-solid ${f[0]}"></i><h3>${f[1]}</h3></div>`));
mount("testGrid", TESTIMONIALS, t => col(`<div class="cardx"><div class="d-flex align-items-center gap-3 mb-3"><div class="avatar">${t[0][0]}</div><div><b>${t[0]}</b><br>${stars(t[2])}</div></div><p class="text-muted small mb-0">“${t[1]}”</p></div>`, "col-md-6 col-lg-3"));
mount("blogGrid", BLOG, b => col(`<article class="cardx blog"><div class="thumb"><i class="fa-solid ${b[0]}"></i></div><span class="badge badge-cat">${b[1]}</span><h3 class="fs-5 mt-2">${b[2]}</h3><p class="text-muted small">${b[3]}</p><a href="#" class="btn btn-blue-outline btn-sm">Read More</a></article>`, "col-md-4"));

// Doctors + department filter chips
function renderDoctors(filter = "All") {
  mount("docGrid", DOCTORS.filter(d => filter === "All" || d[2] === filter), (d) => col(`<div class="cardx doc"><img src="images/doctors/${d[5]}" alt="${d[0]}" loading="lazy"><h3 class="fs-5 mb-0">${d[0]}</h3><p class="text-primary mb-1">${d[1]}</p><p class="small text-muted mb-1">${d[3]} Years Experience</p><p class="mb-3">${stars(d[4])}</p>
   <button class="btn btn-blue-outline btn-sm" data-profile="${d[0]}">View Profile</button> <button class="btn btn-teal btn-sm" data-book data-doctor="${d[0]}">Book Appointment</button></div>`));
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("show"));
}
const chips = $("#docChips");
if (chips) {
  chips.innerHTML = ["All", ...DOCTORS.map(d => d[2])].map((n, i) => `<button class="btn btn-outline-primary btn-sm ${i ? "" : "active"}">${n}</button>`).join("");
  chips.onclick = e => { if (e.target.tagName !== "BUTTON") return; chips.querySelectorAll("button").forEach(b => b.classList.remove("active")); e.target.classList.add("active"); renderDoctors(e.target.textContent); };
  renderDoctors();
}
// Department text filter
const df = $("#deptFilter");
if (df) df.oninput = () => document.querySelectorAll(".dept").forEach(c => c.parentElement.style.display = c.dataset.name.includes(df.value.toLowerCase().trim()) ? "" : "none");

/* ===== 5. Appointment form (used in the page and in the modal) ===== */
const opt = (arr, fn) => arr.map(fn).join("");
const field = (p, id, label, input, err) => `<div class="col-md-6"><label class="form-label" for="${p}${id}">${label}</label>${input}<div class="invalid-feedback">${err}</div></div>`;
function formHTML(p) {
  return `<form id="${p}form" class="row g-3" novalidate>
  ${field(p, "name", "Patient Name", `<input class="form-control" id="${p}name" required minlength="3">`, "Please enter your full name.")}
  ${field(p, "email", "Email", `<input type="email" class="form-control" id="${p}email" required>`, "Enter a valid email address.")}
  ${field(p, "phone", "Phone Number", `<input type="tel" class="form-control" id="${p}phone" required>`, "Enter a 10-digit phone number.")}
  ${field(p, "dept", "Department", `<select class="form-select" id="${p}dept" required><option value="">Select department</option>${opt(DEPTS, d => `<option>${d[1]}</option>`)}</select>`, "Please choose a department.")}
  ${field(p, "doctor", "Doctor", `<select class="form-select" id="${p}doctor" required><option value="">Select doctor</option>${opt(DOCTORS, d => `<option>${d[0]}</option>`)}</select>`, "Please choose a doctor.")}
  ${field(p, "date", "Appointment Date", `<input type="date" class="form-control" id="${p}date" required>`, "Choose today or a future date.")}
  ${field(p, "time", "Appointment Time", `<select class="form-select" id="${p}time" required><option value="">Select time</option>${opt(TIMES, t => `<option>${t}</option>`)}</select>`, "Please choose a time.")}
  <div class="col-12"><label class="form-label" for="${p}msg">Message</label><textarea class="form-control" id="${p}msg" rows="3"></textarea></div>
  <div class="col-12"><button class="btn btn-teal btn-lg w-100" type="submit">Book Appointment</button></div></form>`;
}
function setupForm(p) {
  const f = document.getElementById(p + "form"), g = id => document.getElementById(p + id);
  g("date").min = new Date().toISOString().split("T")[0];
  g("dept").onchange = () => { // show only doctors of the chosen department
    const list = DOCTORS.filter(d => !g("dept").value || d[2] === g("dept").value);
    g("doctor").innerHTML = '<option value="">Select doctor</option>' + opt(list, d => `<option>${d[0]}</option>`);
  };
  f.onsubmit = e => {
    e.preventDefault();
    const rules = {
      name: v => v.trim().length >= 3, email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      phone: v => /^\d{10}$/.test(v.replace(/[\s+-]|^91/g, "")), dept: v => v, doctor: v => v,
      date: v => v && v >= g("date").min, time: v => v
    };
    let ok = true;
    for (const k in rules) { const good = !!rules[k](g(k).value); g(k).classList.toggle("is-invalid", !good); ok = ok && good; }
    if (!ok) return notify("Please fix the highlighted fields.", "danger");
    f.reset(); bootstrap.Modal.getInstance($("#apptModal"))?.hide();
    notify("Your appointment request has been submitted successfully.", "success");
  };
}
const host = $("#apptHost"); if (host) { host.innerHTML = formHTML("pg-"); setupForm("pg-"); }
$("#apptModalBody").innerHTML = formHTML("md-"); setupForm("md-");

/* ===== 6. Notifications, search, buttons ===== */
function notify(msg, type = "success") {
  const t = $("#toast"); t.className = "toast align-items-center border-0 text-white bg-" + type;
  $("#toastMsg").textContent = msg; bootstrap.Toast.getOrCreateInstance(t, { delay: 4500 }).show();
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-book]");
  if (b) { // open the modal instead of navigating
    e.preventDefault();
    const doc = b.dataset.doctor, sel = $("#md-doctor");
    if (doc) { sel.value = doc; $("#md-dept").value = DOCTORS.find(d => d[0] === doc)[2]; }
    bootstrap.Modal.getOrCreateInstance($("#apptModal")).show();
  }
  const pr = e.target.closest("[data-profile]");
  if (pr) notify(pr.dataset.profile + "'s full profile page is coming soon.", "primary");
});
$("#searchInput").oninput = e => {
  const q = e.target.value.toLowerCase().trim(), out = [];
  if (q) {
    DOCTORS.forEach(d => (d[0] + d[1]).toLowerCase().includes(q) && out.push(["doctors.html", "Doctor: " + d[0] + " (" + d[1] + ")"]));
    DEPTS.forEach(d => d[1].toLowerCase().includes(q) && out.push(["departments.html", "Department: " + d[1]]));
    SERVICES.forEach(s => s[1].toLowerCase().includes(q) && out.push(["services.html", "Service: " + s[1]]));
  }
  $("#searchResults").innerHTML = out.length ? out.map(r => `<a class="list-group-item list-group-item-action" href="${r[0]}">${r[1]}</a>`).join("") : (q ? '<p class="text-muted px-2">No results found.</p>' : "");
};

/* ===== 7. Scroll reveal, back-to-top, loader ===== */
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("show"); io.unobserve(x.target); } }), { threshold: .1 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
const toTop = $("#toTop");
window.addEventListener("scroll", () => toTop.style.display = scrollY > 400 ? "block" : "none");
toTop.onclick = () => scrollTo({ top: 0 });
window.addEventListener("load", () => setTimeout(() => $("#loader").classList.add("hide"), 300));
