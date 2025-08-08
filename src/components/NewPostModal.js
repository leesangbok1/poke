import { createPost } from '../data.js';
import { showModal, hideModal } from './Modal.js';

export const NewPostModal = () => {
    const modalContent = `
        <div id="new-post-modal-content">
            <h2>새 게시글 작성</h2>
            <form id="new-post-form">
                <input type="text" id="new-post-title" placeholder="제목을 입력하세요" required>
                <textarea id="new-post-content" placeholder="내용을 입력하세요" required></textarea>
                <div class="modal-actions">
                    <button type="button" class="btn btn-secondary" id="cancel-post-btn">취소</button>
                    <button type="submit" class="btn btn-primary">등록</button>
                </div>
            </form>
        </div>
    `;

    showModal(modalContent);

    document.getElementById('cancel-post-btn').addEventListener('click', hideModal);

    document.getElementById('new-post-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('new-post-title').value;
        const content = document.getElementById('new-post-content').value;
        
        if (title.trim() === '' || content.trim() === '') {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }

        try {
            await createPost(title, content);
            hideModal();
            // Optional: Navigate to the new post or refresh the list
            window.location.hash = '#all-posts'; // Redirect to all posts page
        } catch (error) {
            alert('게시글 등록에 실패했습니다. 로그인 후 다시 시도해주세요.');
        }
    });
};
