import { Header } from '../components/Header.js';
import { fetchPosts, users } from '../data.js'; // Import users array

let allPosts = [];
let currentPosts = [];
let currentPage = 1;
const postsPerPage = 10;

const renderPostList = (postsToRender) => {
    const postListContainer = document.getElementById('post-list-container');
    if (!postListContainer) return;

    if (!postsToRender || postsToRender.length === 0) {
        postListContainer.innerHTML = '<p>표시할 게시글이 없습니다.</p>';
        return;
    }

    postListContainer.innerHTML = postsToRender.map(post => {
        const author = users.find(u => u.id === post.authorId);
        const authorName = author ? `${author.name} ${author.certified ? '(인증됨 ✅)' : ''}` : '익명';
        return `
            <div class="post-list-box">
                <a href="#post/${post.id}" class="suggestion-chip-link">
                    <div class="suggestion-chip">
                        <h3 class="post-card-title">${post.title}</h3>
                        <p class="post-card-author">${authorName} | 카테고리: ${post.category}</p>
                        <span class="post-card-views">조회수 ${post.views}</span>
                    </div>
                </a>
            </div>
        `;
    }).join('');
};

const renderPagination = () => {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(currentPosts.length / postsPerPage);
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('button');
        pageLink.className = `page-link ${i === currentPage ? 'active' : ''}`;
        pageLink.textContent = i;
        pageLink.dataset.page = i;
        paginationContainer.appendChild(pageLink);
    }
};

const displayCurrentPage = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = currentPosts.slice(startIndex, endIndex);
    renderPostList(paginatedPosts);
    renderPagination();
};

export const render = async () => {
    const mainHtml = `
        ${Header()}
        <main class="all-posts-container">
            <h1>전체 게시글</h1>
            <div class="filter-controls">
                <div id="category-tabs" class="tab-navigation">
                    <button class="tab-item active" data-category="all">전체</button>
                    <button class="tab-item" data-category="visa">비자/법률</button>
                    <button class="tab-item" data-category="job">취업</button>
                    <button class="tab-item" data-category="life">생활/문화</button>
                    <button class="tab-item" data-category="health">건강/의료</button>
                    <button class="tab-item" data-category="education">교육/TOPIK</button>
                </div>
                <div id="sort-controls">
                    <select id="sort-select" class="filter-controls-select">
                        <option value="latest">최신순</option>
                        <option value="popular">인기순</option>
                    </select>
                </div>
            </div>
            <div id="post-list-container" class="post-list-container">
                <!-- Posts will be loaded here -->
                <div class="skeleton-ui"></div>
                <div class="skeleton-ui"></div>
                <div class="skeleton-ui"></div>
            </div>
            <div id="pagination" class="pagination"></div>
        </main>
    `;

    setTimeout(attachEventListeners, 0);
    return mainHtml;
};

const attachEventListeners = async () => {
    const categoryTabs = document.getElementById('category-tabs');
    const sortSelect = document.getElementById('sort-select');
    const pagination = document.getElementById('pagination');

    // Fetch initial data
    allPosts = await fetchPosts();
    currentPosts = [...allPosts].sort((a, b) => b.id.localeCompare(a.id)); // Default sort: latest
    currentPage = 1;
    displayCurrentPage();

    // Category filter logic
    categoryTabs.addEventListener('click', async (e) => {
        if (e.target.classList.contains('tab-item')) {
            const category = e.target.dataset.category;
            document.querySelector('#category-tabs .active').classList.remove('active');
            e.target.classList.add('active');
            
            const filtered = category === 'all' ? allPosts : allPosts.filter(p => p.category === category);
            currentPosts = [...filtered];
            sortPosts(); // Re-sort based on current selection
            currentPage = 1;
            displayCurrentPage();
        }
    });

    // Sort logic
    sortSelect.addEventListener('change', () => {
        sortPosts();
        currentPage = 1;
        displayCurrentPage();
    });

    // Pagination logic
    pagination.addEventListener('click', (e) => {
        if (e.target.classList.contains('page-link')) {
            currentPage = Number(e.target.dataset.page);
            displayCurrentPage();
        }
    });
};

function sortPosts() {
    const sortBy = document.getElementById('sort-select').value;
    if (sortBy === 'latest') {
        currentPosts.sort((a, b) => b.id.localeCompare(a.id));
    } else if (sortBy === 'popular') {
        currentPosts.sort((a, b) => b.views - a.views);
    }
}
