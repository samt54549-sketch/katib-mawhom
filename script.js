const $ = (selector) => document.querySelector(selector);

$("#year").textContent = new Date().getFullYear();

// Mobile navigation
const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Book search and category filter
const bookCards = [...document.querySelectorAll(".book-card")];
function filterBooks() {
  const query = $("#bookSearch").value.trim().toLocaleLowerCase("ar");
  const category = $("#categoryFilter").value;
  let visible = 0;
  bookCards.forEach(card => {
    const text = `${card.dataset.title} ${card.dataset.author} ${card.dataset.category}`.toLocaleLowerCase("ar");
    const matches = text.includes(query) && (category === "all" || card.dataset.category === category);
    card.hidden = !matches;
    if (matches) visible++;
  });
  $("#emptyBooks").hidden = visible !== 0;
}
$("#bookSearch").addEventListener("input", filterBooks);
$("#categoryFilter").addEventListener("change", filterBooks);

// Sample book descriptions
const descriptions = {
  "حين يختار القلب أن ينام": "حكاية تجريبية عن الذاكرة والخذلان ومحاولة البدء من جديد. استبدل هذه النبذة بملخص كتابك الحقيقي.",
  "رسائل لم تصل": "مجموعة خواطر عن الكلمات التي بقيت في القلب ولم تجد طريقها إلى أصحابها.",
  "ما وراء الصمت": "تأملات قصيرة في فهم الذات واكتشاف المعنى خلف لحظات الصمت."
};
const bookDialog = $("#bookDialog");
document.querySelectorAll(".read-sample").forEach(button => {
  button.addEventListener("click", () => {
    $("#bookDialogTitle").textContent = button.dataset.book;
    $("#bookDialogText").textContent = descriptions[button.dataset.book] || "أضف نبذة هذا العمل هنا.";
    bookDialog.showModal();
  });
});
$("#bookDialogClose").addEventListener("click", () => bookDialog.close());

// Demo login: no credentials are sent or stored
const loginDialog = $("#loginDialog");
$("#loginOpen").addEventListener("click", () => loginDialog.showModal());
$("#demoLogin").addEventListener("click", () => {
  const email = $("#demoEmail").value.trim();
  $("#loginMessage").textContent = email
    ? "نجحت تجربة الواجهة فقط. لم يتم إنشاء حساب أو إرسال بيانات."
    : "اكتب بريدًا تجريبيًا لعرض رسالة الواجهة.";
});

// Demo comments are stored only in this browser. Use a backend for public comments.
const commentStorageKey = "katib-mawhom-demo-comments-v1";
function loadComments() {
  try {
    const items = JSON.parse(localStorage.getItem(commentStorageKey) || "[]");
    $("#commentList").replaceChildren();
    items.slice(-20).reverse().forEach(item => {
      const article = document.createElement("article");
      article.className = "comment-item";
      const name = document.createElement("strong");
      name.textContent = item.name;
      const body = document.createElement("p");
      body.textContent = item.text;
      article.append(name, body);
      $("#commentList").append(article);
    });
  } catch {
    $("#commentList").textContent = "تعذر تحميل التعليقات التجريبية في هذا المتصفح.";
  }
}
$("#commentForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#commentName").value.trim();
  const text = $("#commentText").value.trim();
  if (!name || !text) return;
  let items = [];
  try { items = JSON.parse(localStorage.getItem(commentStorageKey) || "[]"); } catch {}
  items.push({ name: name.slice(0, 40), text: text.slice(0, 500) });
  try {
    localStorage.setItem(commentStorageKey, JSON.stringify(items.slice(-50)));
    $("#commentText").value = "";
    loadComments();
  } catch {
    alert("المتصفح لم يسمح بحفظ التعليق. جرّب مساحة تخزين متاحة.");
  }
});
loadComments();