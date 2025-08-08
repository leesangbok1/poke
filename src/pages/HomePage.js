import { Header } from '../components/Header.js';
import { exampleQuestions, posts, searchPostsByKeyword } from '../data.js';
import { NewPostModal } from '../components/NewPostModal.js';

// Helper function to get random posts
const getRandomPosts = (count) => {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Renders the entire home page
export const render = () => {
    const mainHtml = `
        ${Header()}
        <main id="chat-main" class="chat-main">
            <div id="chat-container" class="chat-container">
                <!-- Messages will be dynamically inserted here -->
            </div>
        </main>
        <div id="chat-input-bar" class="chat-input-bar">
            <button class="icon-button" id="attach-file-button"><i class="fas fa-paperclip"></i></button>
            <textarea id="message-input" placeholder="게시글을 작성해보세요." style="min-height: 80px;"></textarea>
            <button class="icon-button" id="send-button"><i class="fas fa-arrow-right"></i></button>
        </div>
    `;

    // Use a timeout to ensure the DOM is updated before attaching listeners
    setTimeout(attachEventListeners, 0);
    return mainHtml;
};

// Adds a message to the chat container
const addMessage = (content, type, isHtml = false) => {
    const chatContainer = document.getElementById('chat-container');
    if (!chatContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    if (isHtml) {
        contentDiv.innerHTML = content;
    } else {
        // Create a <p> tag for simple text to ensure consistent styling
        const p = document.createElement('p');
        p.textContent = content;
        contentDiv.appendChild(p);
    }

    messageDiv.appendChild(contentDiv);
    chatContainer.appendChild(messageDiv);
    // Scroll to the latest message
    chatContainer.scrollTop = chatContainer.scrollHeight;
};

// Adds a special message containing a list of posts as clickable chips
const addPostListMessage = (title, postsToShow, isQuestion = false) => {
    const postChipsHtml = postsToShow.map(post => `
        <a href="#${isQuestion ? 'all-posts' : `post/${post.id}`}" class="suggestion-chip-link">
            <div class="suggestion-chip">
                ${post.title}
            </div>
        </a>
    `).join('');

    const messageHtml = `
        <div class="post-list-box">
            <p class="post-list-title">${title}</p>
            <div class="suggestion-chip-group">
                ${postChipsHtml}
            </div>
            <a href="#all-posts" class="more-options-button">더보기</a>
        </div>
    `;
    addMessage(messageHtml, 'bot', true);
};

// Attaches all necessary event listeners for the page
const attachEventListeners = () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatContainer = document.getElementById('chat-container');

    // Auto-resize textarea height
    messageInput.style.height = '80px'; // 초기 높이를 2배로 설정
    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        // Set a max-height to prevent infinite growth
        const maxHeight = 200; 
        messageInput.style.height = `${Math.min(messageInput.scrollHeight, maxHeight)}px`;
    });

    // Function to handle sending a message (now opens NewPostModal)
    const handleSendMessage = () => {
        NewPostModal(); // Open the new post modal
    };

    // Attach send handlers
    sendButton.addEventListener('click', handleSendMessage);
    messageInput.addEventListener('focus', handleSendMessage); // Open modal on focus
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });

    // --- Initial Bot Messages ---
    // Clear container before adding initial messages to prevent duplication on re-renders
    chatContainer.innerHTML = ''; 
    
    // First message with random posts
    addPostListMessage("많은 사람들이 궁금해하는 게시글을 바로 확인해보세요", getRandomPosts(5));

    // Second message with example questions
    setTimeout(() => {
        const questionPosts = exampleQuestions.slice(0, 5).map((q, index) => ({ id: `q${index}`, title: `${q}?` }));
        addPostListMessage("질문에 대한 답변도 함께 해보세요!", questionPosts, true);
    }, 1000); // Delay the second message for a better UX
};
