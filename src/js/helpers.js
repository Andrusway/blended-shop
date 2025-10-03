export function clearClasses () {
    document.querySelectorAll('.categories__btn').forEach(btn => {
    btn.classList.remove('categories__btn--active')
    })
}