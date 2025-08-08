import { currentUser } from '../data.js';

export const Header = () => {
  return `
    <header class="header">
      <div class="header__logo-container">
        <div class="header__logo">
          <a href="#home">Viet K-Connect</a>
        </div>
      </div>
      <div class="header__actions">
        ${currentUser ? `
          <a href="#profile" class="header__user-info">
            <span>${currentUser.name}님</span>
            <span class="certification-status status-${getCertificationStatusClass(currentUser.certificationStatus)}">
                ${currentUser.certificationStatus}
            </span>
          </a>
        ` : `
          <button id="login-button" class="btn-login">로그인</button>
        `}
      </div>
    </header>
  `;
};

const getCertificationStatusClass = (status) => {
    switch (status) {
        case '인증 완료': return 'verified';
        case '심사 중': return 'pending';
        case '미인증':
        default: return 'unverified';
    }
};