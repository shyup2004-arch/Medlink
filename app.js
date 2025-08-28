document.addEventListener('DOMContentLoaded', function() {
    // --- App Version ---
    const APP_VERSION = "v1.6";

    // --- DOM Elements ---
    const archiveList = document.getElementById('archive-list');
    const chapterSelect = document.getElementById('chapter-select');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('quiz-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const chapterOptions = document.getElementById('chapter-selection');
    const mockOptions = document.getElementById('quiz-options');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const views = document.querySelectorAll('.view');

    // --- Core Functions ---
    function toggleContent(element) {
        const content = element.nextElementSibling;
        if (content) {
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        }
    }

    function renderArchive(filter = '') {
        archiveList.innerHTML = '';
        const query = filter.toLowerCase();
        
        const matchingLectures = lectureData.filter(l => l.title.toLowerCase().includes(query) || l.professor.toLowerCase().includes(query));
        
        if (!query) { // 초기 화면: 강의 목록만 표시
            matchingLectures.forEach(lecture => {
                const item = document.createElement('div');
                item.className = 'lecture-item';
                item.innerHTML = `<div class="lecture-title"><span>${lecture.title}</span><span class="professor-tag">${lecture.professor}</span></div><div class="content"><p><i>- 향후 강의자료 요약 내용으로 채워집니다. -</i></p></div>`;
                archiveList.appendChild(item);
            });
            if (matchingLectures.length === 0) {
                 archiveList.innerHTML = '<p>강의 자료가 없습니다.</p>';
            }
            return;
        }

        // 검색 화면: 강의와 문제 함께 표시
        if (matchingLectures.length > 0) {
             archiveList.innerHTML += '<h3>관련 강의</h3>';
             matchingLectures.forEach(lecture => {
                const item = document.createElement('div');
                item.className = 'lecture-item';
                item.innerHTML = `<div class="lecture-title"><span>${lecture.title}</span><span class="professor-tag">${lecture.professor}</span></div><div class="content"><p><i>- 향후 강의자료 요약 내용으로 채워집니다. -</i></p></div>`;
                archiveList.appendChild(item);
            });
        }

        const matchingQuestions = questionData.filter(q => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query) || q.professor.toLowerCase().includes(query));
        if (matchingQuestions.length > 0) {
            archiveList.innerHTML += '<h3>관련 문제</h3>';
            matchingQuestions.forEach(q => {
                const item = document.createElement('div');
                item.className = 'question-item';
                item.innerHTML = `<div class="question-title"><span>${q.question}</span><span class="professor-tag">${q.professor} (${q.exam})</span></div><div class="content"><pre>${q.answer}</pre></div>`;
                archiveList.appendChild(item);
            });
        }
        
        if (matchingLectures.length === 0 && matchingQuestions.length === 0) {
            archiveList.innerHTML = '<p>검색 결과가 없습니다.</p>';
        }
    }

    function populateChapterSelect() {
        chapterSelect.innerHTML = '<option value="all">전체 단원</option>';
        lectureData.forEach(lecture => {
            const option = document.createElement('option');
            option.value = lecture.id;
            option.textContent = lecture.title;
            chapterSelect.appendChild(option);
        });
    }

    function hideAllToolOptions() {
        mockOptions.style.display = 'none';
        chapterOptions.style.display = 'none';
    }

    function displayQuestionsInModal(questions, title) {
        modalTitle.textContent = title;
        modalBody.innerHTML = '';
        const isMyQuiz = (title === '나만의 문제집');
        document.getElementById('save-questions-btn').style.display = isMyQuiz ? 'none' : 'block';

        if (questions.length === 0) {
            modalBody.innerHTML = '<p>표시할 문제가 없습니다.</p>';
            if (isMyQuiz) setTimeout(() => modal.style.display = 'none', 1000);
        } else {
            questions.forEach((q, index) => {
                const item = document.createElement('div');
                item.className = 'question-item';
                item.dataset.id = q.id;
                item.innerHTML = `
                    <div class="question-title">
                        <label style="display: flex; align-items: center; width: 100%; font-weight: normal; cursor: pointer;">
                           <input type="checkbox" class="save-checkbox" style="${isMyQuiz ? 'display:none;' : ''}">
                           <span style="margin-left: ${isMyQuiz ? '0' : '10px'};">${index + 1}. ${q.question}</span>
                        </label>
                        <div style="display:flex; align-items:center; flex-shrink: 0;">
                            ${isMyQuiz ? `<button class="remove-btn">삭제</button>` : ''}
                            <span class="professor-tag">${q.professor} (${q.exam})</span>
                        </div>
                    </div>
                    <div class="content"><pre>${q.answer}</pre></div>`;
                modalBody.appendChild(item);
            });
        }
        modal.style.display = 'block';
    }
    
    function removeQuestionFromMyQuiz(questionId) {
        let savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        savedIds = savedIds.filter(id => id !== questionId);
        localStorage.setItem('myQuizIds', JSON.stringify(savedIds));
        
        const savedQuestions = questionData.filter(q => savedIds.includes(q.id));
        displayQuestionsInModal(savedQuestions, '나만의 문제집');
    }

    // --- Sidebar and Navigation Logic ---
    function toggleSidebar(forceOpen) {
        if (typeof forceOpen === 'boolean') {
            sidebar.classList.toggle('open', forceOpen);
        } else {
            sidebar.classList.toggle('open');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;

            views.forEach(view => view.classList.remove('active-view'));
            document.getElementById(targetId).classList.add('active-view');
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            if (window.innerWidth < 768) {
                toggleSidebar(false);
            }
        });
    });

    // --- Event Delegation ---
    archiveList.addEventListener('click', function(e) {
        const title = e.target.closest('.lecture-title, .question-title');
        if (title) {
            toggleContent(title);
        }
    });

    modalBody.addEventListener('click', function(e) {
        const title = e.target.closest('.question-title');
        const removeBtn = e.target.closest('.remove-btn');
        
        if (removeBtn) {
            e.stopPropagation();
            const questionId = parseInt(e.target.closest('.question-item').dataset.id);
            removeQuestionFromMyQuiz(questionId);
        } else if (title && e.target.type !== 'checkbox') {
            toggleContent(title);
        }
    });

    // --- Other Event Listeners ---
    document.getElementById('sidebar-open-btn').addEventListener('click', () => toggleSidebar(true));
    document.getElementById('sidebar-close-btn').addEventListener('click', () => toggleSidebar(false));

    document.getElementById('show-chapter-bank-btn').addEventListener('click', () => {
        hideAllToolOptions();
        chapterOptions.style.display = 'block';
    });

    document.getElementById('show-mock-exam-btn').addEventListener('click', () => {
        hideAllToolOptions();
        mockOptions.style.display = 'block';
    });

    document.getElementById('show-my-quiz-btn').addEventListener('click', () => {
        hideAllToolOptions();
        const savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        if (savedIds.length === 0) {
            alert("'나만의 문제집'이 비어있습니다."); return;
        }
        const savedQuestions = questionData.filter(q => savedIds.includes(q.id));
        displayQuestionsInModal(savedQuestions, '나만의 문제집');
    });

    document.getElementById('generate-bank-btn').addEventListener('click', () => {
        const chapterId = chapterSelect.value;
        const questions = (chapterId === 'all') ? questionData : questionData.filter(q => q.chapter.includes(parseInt(chapterId)));
        const title = (chapterId === 'all') ? '전체 단원 문제은행' : `${lectureData.find(l => l.id == chapterId).title} 문제은행`;
        displayQuestionsInModal(questions, title);
    });

    document.getElementById('generate-mock-btn').addEventListener('click', () => {
        const count = parseInt(document.getElementById('mock-exam-count').value);
        const shuffled = [...questionData].sort(() => 0.5 - Math.random());
        displayQuestionsInModal(shuffled.slice(0, count), `총괄 모의고사 (${count}문제)`);
    });

    document.getElementById('save-questions-btn').addEventListener('click', () => {
        const checkboxes = modalBody.querySelectorAll('.save-checkbox:checked');
        if (checkboxes.length === 0) {
            alert('저장할 문제를 선택해주세요.'); return;
        }
        let savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        checkboxes.forEach(cb => {
            const id = parseInt(cb.closest('.question-item').dataset.id);
            if (!savedIds.includes(id)) savedIds.push(id);
        });
        localStorage.setItem('myQuizIds', JSON.stringify(savedIds));
        alert(`${checkboxes.length}개의 문제가 '나만의 문제집'에 저장되었습니다.`);
        checkboxes.forEach(cb => cb.checked = false);
    });
    
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        document.getElementById('archive-view').classList.add('active-view');
        document.getElementById('home-view').classList.remove('active-view');
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === 'archive-view');
        });
        renderArchive(query);
    });

    document.getElementById('close-modal').addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // --- Initial Load ---
    document.getElementById('app-version').textContent = APP_VERSION;
    renderArchive();
    populateChapterSelect();
});