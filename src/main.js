// Suggestion: For better maintainability, group all page modules under /pages, all UI components under /components, and all API/auth/data logic under /api. This keeps the project modular and scalable.
import { render as renderHome } from './pages/HomePage.js';
import { render as renderPostDetail } from './pages/PostDetailPage.js';
import { render as renderAllPosts } from './pages/AllPostsPage.js';
import { render as renderProfile } from './pages/ProfilePage.js';

const app = document.getElementById('app');

const routes = {
    '#home': renderHome,
    '#post': renderPostDetail,
    '#all-posts': renderAllPosts,
    '#profile': renderProfile,
};

export const router = async () => {
    const hash = window.location.hash || '#home';
    const [path, id] = hash.split('/'); // #post/p1 -> ['#post', 'p1']

    const render = routes[path] || (() => '<h1>404 Not Found</h1>');
    
    // Handle both sync and async render functions
    try {
        const content = await Promise.resolve(render(id));
        app.innerHTML = content;
    } catch (error) {
        console.error('Error rendering page:', error);
        app.innerHTML = '<h1>페이지를 로드하는 중 오류가 발생했습니다.</h1>';
    }
};

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    // Set a default layout variant for A/B testing if not set
    if (!localStorage.getItem('postLayoutVariant')) {
        localStorage.setItem('postLayoutVariant', Math.random() < 0.5 ? 'tab' : 'filter');
    }
    router();
});