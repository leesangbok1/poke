import { Header } from '../components/Header.js';
import { getCurrentUser } from '../data.js';

// Mock function to simulate updating user certification status
const requestCertification = async (userId, file) => {
    console.log(`User ${userId} submitted ${file.name} for certification.`);
    // In a real app, you would upload the file and update the backend.
    // For now, we'll just simulate the process by updating the local data.
    const user = getCurrentUser();
    if (user) {
        user.certificationStatus = 'pending'; // Update status to pending
    }
    await new Promise(res => setTimeout(res, 1000)); // Simulate network delay
    return { success: true, newStatus: 'pending' };
};


export const render = () => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        window.location.hash = '#login'; // Redirect to login if not logged in
        return '';
    }

    const getStatusText = (status) => {
        switch (status) {
            case 'pending': return '심사 중';
            case 'verified': return '인증 완료';
            default: return '미인증';
        }
    };

    const mainHtml = `
        ${Header()}
        <main class="profile-container">
            <div class="profile-info">
                <h2><i class="fas fa-user-circle"></i> 내 프로필</h2>
                <p><strong>이름:</strong> ${currentUser.name}</p>
                <p><strong>이메일:</strong> ${currentUser.email || '이메일 정보 없음'}</p>
                <p><strong>역할:</strong> ${currentUser.role}</p>
            </div>

            <hr class="divider">

            <div class="certification-center">
                <h2><i class="fas fa-check-circle"></i> 인증 센터</h2>
                <div class="certification-status-display">
                    <p><strong>현재 상태:</strong> 
                        <span class="status-${currentUser.certificationStatus || 'unverified'}">
                            ${getStatusText(currentUser.certificationStatus)}
                        </span>
                    </p>
                </div>

                ${currentUser.certificationStatus !== 'verified' ? `
                <form id="certification-form" class="certification-form">
                    <p>전문가 인증을 통해 답변의 신뢰도를 높여보세요. 외국인등록증, 재직증명서 등 전문성을 증명할 수 있는 서류를 제출해주세요.</p>
                    <div class="file-upload-wrapper">
                        <label for="certification-file" class="file-upload-label">인증 서류 첨부:</label>
                        <input type="file" id="certification-file" class="file-upload-input" required>
                    </div>
                    <button type="submit" class="btn btn-primary">신청하기</button>
                </form>
                ` : '<p>축하합니다! 전문가 인증이 완료되었습니다.</p>'}
            </div>
        </main>
    `;

    setTimeout(attachEventListeners, 0);
    return mainHtml;
};

const attachEventListeners = () => {
    const certForm = document.getElementById('certification-form');
    if (!certForm) return;

    certForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('certification-file');
        const file = fileInput.files[0];
        const currentUser = getCurrentUser();

        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }

        const submitButton = e.submitter;
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        submitButton.textContent = '심사 요청 중...';

        try {
            const result = await requestCertification(currentUser.id, file);
            if (result.success) {
                alert('인증 신청이 성공적으로 제출되었습니다. 심사 후 결과가 통보됩니다.');
                // Re-render the page to show the updated status
                document.getElementById('app').innerHTML = render();
            }
        } catch (error) {
            alert('오류가 발생했습니다. 다시 시도해주세요.');
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            submitButton.textContent = '신청하기';
        }
    });
};
