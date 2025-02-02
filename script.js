document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".dataList a");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();

            const dropdown = toggle.nextElementSibling; // القائمة المنسدلة التابعة له

            if (!dropdown) return; // لو مش موجود مفيش حاجة تتغير

            dropdown.classList.toggle("show");

            // إغلاق أي قائمة أخرى مفتوحة
            document.querySelectorAll(".mobile-menu .show").forEach(menu => {
                if (menu !== dropdown) {
                    menu.classList.remove("show");
                }
            });
        });
    });

    const menuIcon = document.querySelector(".menu");
    const menuList = document.querySelector(".mobile-menu");

    menuIcon.addEventListener("click", (e) => {
        e.preventDefault();
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
        menuList.classList.toggle("show");
    });
});
