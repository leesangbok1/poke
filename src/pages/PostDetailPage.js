import { fetchPostById, getCurrentUser, addAnswer } from '../data.js';
import { Header } from '../components/Header.js';
import { showModal } from '../components/Modal.js';

export const render = async (postId) => {
    const postData = await fetchPostById(postId);

    if (!postData) {
        return `
            ${Header()}
            <main class="container">
                <h1>게시글을 찾을 수 없습니다.</h1>
                <p><a href="#">홈으로 돌아가기</a></p>
            </main>
        `;
    }

    const { title, author, views, content, answers } = postData;
    const currentUser = getCurrentUser();

    const mainHtml = `
        ${Header()}
        <main class="container post-detail-container">
            <div class="post-detail">
                <h1 class="post-detail-title">${title}</h1>
                <div class="post-meta">
                    <span>작성자: ${author.name} ${author.certified ? '(인증됨 ✅)' : ''}</span>
                    <span>조회수: ${views}</span>
                </div>
                <div class="post-content">${content}</div>
            </div>
            
            <hr class="divider">

            <div class="answers-section">
                <h2>답변 ${answers.length}개</h2>
                <div id="answers-list">
                    ${answers.map(answer => {
                        const answerAuthor = answer.author;
                        return `
                            <div class="answer-card ${answer.accepted ? 'accepted-answer' : ''}">
                                <p class="answer-author">${answerAuthor.name} (${answerAuthor.role}) ${answerAuthor.certified ? '✅' : ''}</p>
                                <div class="answer-content"><p>${answer.content}</p></div>
                            </div>
                        `;
                    }).join('') || '<p>아직 답변이 없습니다. 첫 번째 답변을 남겨보세요!</p>'}
                </div>
            </div>

            <form id="answer-form" class="answer-form">
                <textarea id="answer-input" placeholder="답변을 작성해주세요..." required></textarea>
                <button type="submit" id="submit-answer-btn" class="btn btn-primary">답변 등록</button>
            </form>
        </main>
    `;

    setTimeout(() => attachEventListeners(postId), 0);

    return mainHtml;
};

const attachEventListeners = (postId) => {
    const answerForm = document.getElementById('answer-form');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-answer-btn');
    const currentUser = getCurrentUser();

    if (!answerForm || !answerInput || !submitButton) {
        return; // Elements not found, do nothing.
    }

    const showLoginModal = () => {
        showModal('로그인 필요', '<p>답변을 작성하려면 로그인이 필요합니다.</p>', [
            {
                text: '로그인',
                className: 'btn-primary',
                onClick: () => {
                    window.location.hash = '#login';
                    const existingModal = document.getElementById('app-modal');
                    if (existingModal) existingModal.remove();
                }
            },
            {
                text: '닫기',
                className: 'btn-secondary',
                onClick: () => {
                    const existingModal = document.getElementById('app-modal');
                    if (existingModal) existingModal.remove();
                }
            }
        ]);
    };

    if (!currentUser) {
        answerInput.addEventListener('focus', (e) => {
            e.preventDefault();
            answerInput.blur();
            showLoginModal();
        });
        answerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showLoginModal();
        });
        return;
    }

    // User is logged in, attach the main submit logic
    answerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const content = answerInput.value.trim();
        if (!content) return;

        submitButton.disabled = true;
        submitButton.classList.add('loading');

        if (!currentUser.certified) {
            // The modal is now shown *after* the answer is submitted.
            // First, post the answer.
            await postAnswer(postId, content, submitButton);
            // Then, show the modal.
            showModal(
                '답변의 신뢰도를 높여보세요!',
                '<p>답변이 성공적으로 등록되었습니다. 답변의 신뢰도를 높이고 더 많은 사용자에게 도움을 주기 위해 <strong>전문가 인증</strong>을 받아보세요. 인증된 사용자의 답변은 더 높은 신뢰를 얻습니다.</p>',
                [
                    {
                        text: '인증하러 가기',
                        className: 'btn-primary',
                        onClick: () => {
                            window.location.hash = '#profile';
                            const existingModal = document.getElementById('app-modal');
                            if (existingModal) existingModal.remove();
                        }
                    },
                    {
                        text: '나중에 하기',
                        className: 'btn-secondary',
                        onClick: () => {
                            const existingModal = document.getElementById('app-modal');
                            if (existingModal) existingModal.remove();
                        }
                    }
                ]
            );
        } else {
            await postAnswer(postId, content, submitButton);
        }
    });
};

// Helper function to actually post the answer and refresh the UI
async function postAnswer(postId, content, buttonElement) {
    try {
        await addAnswer(postId, content);
        // Re-render the page to show the new answer
        const newHtml = await render(postId);
        document.getElementById('app').innerHTML = newHtml;
    } catch (error) {
        console.error("Failed to add answer:", error);
        alert("답변 등록에 실패했습니다.");
    } finally {
        if (buttonElement) {
            buttonElement.disabled = false;
            buttonElement.classList.remove('loading');
        }
    }
}
