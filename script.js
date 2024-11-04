const navbar = document
	.querySelector('.navbar.fixed-top')
	?.classList.remove('shadow');
const sectionToRemove = document.querySelector('#section-1')?.remove();
const siteNewsForum = document.querySelector('#site-news-forum')?.remove();
const supportemail = document.querySelector('.supportemail')?.remove();
const footerButton = document.querySelector('.btn-footer-popover')?.remove();

document
	.querySelectorAll('.card-footer.dashboard-card-footer')
	?.forEach((element) => {
		if (element.classList.contains('bg-white')) {
			element.classList.remove('bg-white');
		}
	});

function removeBgWhiteClasses() {}

window.addEventListener('load', () => {
	setTimeout(() => {
		const elements = document.querySelectorAll('.bg-white');
		elements.forEach((element) => element.classList.remove('bg-white'));
		const gridElement = document.querySelector('.card-grid.row');
	}, 2000);
});
