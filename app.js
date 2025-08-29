document.addEventListener('DOMContentLoaded', function() {
    // --- App Version ---
    const APP_VERSION = "v2.2";

    // --- DOM Elements ---
    const archiveList = document.getElementById('archive-list');
    const examChapterSelect = document.getElementById('exam-chapter-select');
    const aiChapterSelect = document.getElementById('ai-chapter-select');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('quiz-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const views = document.querySelectorAll('.view');
    const latestReviewContent = document.getElementById('latest-review-content');

    // --- Exam Ranges ---
    const examRanges = {
        1: { name: "1차 시험", chapters: [1, 2, 3, 4, 5, 6] },
        2: { name: "2차 시험", chapters: [7, 8, 9] },
        3: { name: "3차 시험", chapters: [10, 11, 12, 13, 14] },
        4: { name: "4차 시험", chapters: [15, 16, 17, 18, 19] }
    };

    // --- Core Functions ---
    function toggleContent(element) {
        const content = element.nextElementSibling;
        if (content) {
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        }
    }
    
    function renderLatestReview() {
        if (typeof latestLectureData !== 'undefined' && latestLectureData) {
            let quizHTML = (latestLectureData.reviewQuiz || []).map((quiz, index) => {
                const isKichul = quiz.source && quiz.source.includes('기출');
                const sourceTag = isKichul 
                    ? `<span class="professor-tag">${quiz.source}</span>` 
                    : `<span class="professor-tag" style="background-color: #e2e8f0;">AI 예상</span>`;
                return `<div class="question-item" style="padding: 10px; margin-top: 15px;"><div class="question-title"><span>Q${index + 1}. ${quiz.question}</span>${sourceTag}</div><div class="content"><pre>${quiz.answer}</pre></div></div>`
            }).join('');
            latestReviewContent.innerHTML = `<h4><strong>${latestLectureData.title}</strong> (${latestLectureData.professor})</h4><div class="summary-box">${latestLectureData.summary}</div><h4 style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;"><strong>🎯 핵심 확인 기출/문제</strong></h4>${quizHTML}`;
        } else {
            latestReviewContent.innerHTML = '<p>새로운 강의 자료가 추가되면 여기에 표시됩니다.</p>';
        }
    }

    function renderArchive(filter = '') {
        archiveList.innerHTML = '';
        const query = filter.toLowerCase();
        let dataToRender = lectureData;
        if (query) {
            dataToRender = lectureData.filter(l => l.title.toLowerCase().includes(query) || l.professor.toLowerCase().includes(query));
        }
        if (dataToRender.length > 0) {
             if (query) archiveList.innerHTML += '<h3>관련 강의</h3>';
             dataToRender.forEach(lecture => {
                const summaryContent = lecture.summary ? `<div class="summary-box">${lecture.summary}</div>` : `<p><i>- 예습 요약이 곧 추가될 예정입니다. -</i></p>`;
                const dateTag = lecture.date ? `<span class="date-tag">${lecture.date}</span>` : '';
                const item = document.createElement('div');
                item.className = 'lecture-item';
                item.innerHTML = `<div class="lecture-title"><span>${lecture.title}${dateTag}</span><span class="professor-tag">${lecture.professor}</span></div><div class="content">${summaryContent}</div>`;
                archiveList.appendChild(item);
            });
        }
        if (query) {
            const allQuestions = [...questionData, ...aiQuestionData];
            const matchingQuestions = allQuestions.filter(q => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query) || (q.professor && q.professor.toLowerCase().includes(query)));
            if (matchingQuestions.length > 0) {
                archiveList.innerHTML += '<h3 style="margin-top:20px;">관련 문제</h3>';
                matchingQuestions.forEach(q => {
                    const isAI = q.id.toString().startsWith('ai_');
                    const sourceTag = isAI 
                        ? `<span class="professor-tag" style="background-color: #e2e8f0;">AI 예상</span>`
                        : `<span class="professor-tag">${q.professor} (${q.exam})</span>`;
                    const item = document.createElement('div');
                    item.className = 'question-item';
                    item.innerHTML = `<div class="question-title"><span>${q.question}</span>${sourceTag}</div><div class="content"><pre>${q.answer}</pre></div>`;
                    archiveList.appendChild(item);
                });
            }
        }
        if (archiveList.innerHTML === '') {
            archiveList.innerHTML = query ? '<p>검색 결과가 없습니다.</p>' : '<p>강의 자료가 없습니다.</p>';
        }
    }

    function populateChapterSelects() {
        examChapterSelect.innerHTML = '<option value="all">전체 단원</option>';
        aiChapterSelect.innerHTML = '<option value="all">전체 단원</option>';
        lectureData.forEach(lecture => {
            const option = document.createElement('option');
            option.value = lecture.id;
            option.textContent = lecture.title;
            examChapterSelect.appendChild(option.cloneNode(true));
            aiChapterSelect.appendChild(option);
        });
    }

    function displayQuestionsInModal(questions, title, type = 'exam') {
        modalTitle.textContent = title;
        modalBody.innerHTML = '';
        const isMyQuiz = (title === '⭐️ 나만의 문제집');
        document.getElementById('save-questions-btn').style.display = isMyQuiz ? 'none' : 'block';
        document.getElementById('show-my-quiz-btn').style.display = isMyQuiz ? 'none' : 'block';
        if (questions.length === 0) {
            modalBody.innerHTML = '<p>표시할 문제가 없습니다.</p>';
            if (isMyQuiz) setTimeout(() => modal.style.display = 'none', 1000);
        } else {
            questions.forEach((q, index) => {
                const item = document.createElement('div');
                item.className = 'question-item';
                item.dataset.id = q.id;
                const sourceTag = type === 'ai' 
                    ? `<span class="professor-tag" style="background-color: #e2e8f0;">AI 예상</span>`
                    : `<span class="professor-tag">${q.professor} (${q.exam})</span>`;
                item.innerHTML = `<div class="question-title"><label style="display: flex; align-items: center; width: 100%; font-weight: normal; cursor: pointer;"><input type="checkbox" class="save-checkbox" style="${isMyQuiz ? 'display:none;' : ''}"><span style="margin-left: ${isMyQuiz ? '0' : '10px'};">${index + 1}. ${q.question}</span></label><div style="display:flex; align-items:center; flex-shrink: 0;">${isMyQuiz ? `<button class="remove-btn">삭제</button>` : ''}${sourceTag}</div></div><div class="content"><pre>${q.answer}</pre></div>`;
                modalBody.appendChild(item);
            });
        }
        modal.style.display = 'block';
    }
    
    function removeQuestionFromMyQuiz(questionId) {
        let savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        savedIds = savedIds.filter(id => id !== questionId);
        localStorage.setItem('myQuizIds', JSON.stringify(savedIds));
        const allQuestions = [...questionData, ...aiQuestionData];
        const savedQuestions = allQuestions.filter(q => savedIds.includes(q.id));
        displayQuestionsInModal(savedQuestions, '⭐️ 나만의 문제집');
    }

    function switchView(targetId) {
        views.forEach(view => view.classList.remove('active-view'));
        const targetView = document.getElementById(targetId);
        if (targetView) targetView.classList.add('active-view');
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if(navLink.dataset.target === targetId) {
                navLink.classList.add('active');
            }
        });
    }
    
    function toggleSidebar(forceOpen) {
        if (typeof forceOpen === 'boolean') {
            sidebar.classList.toggle('open', forceOpen);
        } else {
            sidebar.classList.toggle('open');
        }
    }

    // --- Event Listeners Setup ---
    document.body.addEventListener('click', function(e) {
        const title = e.target.closest('.lecture-title, .question-title');
        if (title) toggleContent(title);

        const modeBtn = e.target.closest('.mode-btn');
        if(modeBtn) {
            const type = modeBtn.dataset.type;
            const mode = modeBtn.dataset.mode;
            document.getElementById(`${type}-bank-options`).style.display = mode === 'bank' ? 'block' : 'none';
            document.getElementById(`${type}-mock-options`).style.display = mode === 'mock' ? 'block' : 'none';
        }
    });

    modalBody.addEventListener('click', function(e) {
        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            e.stopPropagation();
            const questionId = parseInt(e.target.closest('.question-item').dataset.id);
            removeQuestionFromMyQuiz(questionId);
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            if(targetId) switchView(targetId);
            if (window.innerWidth < 768) toggleSidebar(false);
        });
    });
    
    document.getElementById('sidebar-open-btn').addEventListener('click', () => toggleSidebar(true));
    document.getElementById('sidebar-close-btn').addEventListener('click', () => toggleSidebar(false));

    // Exam Button Listeners
    document.getElementById('generate-exam-bank-btn').addEventListener('click', () => {
        const chapterId = examChapterSelect.value;
        const questions = (chapterId === 'all') ? questionData : questionData.filter(q => q.chapter.includes(parseInt(chapterId)));
        const title = (chapterId === 'all') ? '전체 단원 기출은행' : `${lectureData.find(l => l.id == chapterId).title} 기출은행`;
        displayQuestionsInModal(questions, title, 'exam');
    });

    document.getElementById('generate-exam-mock-btn').addEventListener('click', () => {
        const examNum = document.getElementById('exam-range-select').value;
        const range = examRanges[examNum];
        const questions = questionData.filter(q => {
            return q.chapter.some(c => range.chapters.includes(c));
        });
        displayQuestionsInModal(questions, `${range.name} 실전 기출 모의고사`, 'exam');
    });

    // AI Button Listeners
    document.getElementById('generate-ai-bank-btn').addEventListener('click', () => {
        const chapterId = aiChapterSelect.value;
        const questions = (chapterId === 'all') ? aiQuestionData : aiQuestionData.filter(q => q.chapter.includes(parseInt(chapterId)));
        const title = (chapterId === 'all') ? '전체 단원 N제' : `${lectureData.find(l => l.id == chapterId).title} N제`;
        displayQuestionsInModal(questions, title, 'ai');
    });

    document.getElementById('generate-ai-mock-btn').addEventListener('click', () => {
        const examNum = document.getElementById('ai-range-select').value;
        const range = examRanges[examNum];
        const questions = aiQuestionData.filter(q => q.chapter.some(c => range.chapters.includes(c)));
        displayQuestionsInModal(questions, `${range.name} 범위 N제 모의고사`, 'ai');
    });
    
    document.getElementById('show-my-quiz-btn').addEventListener('click', () => {
        const savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        if (savedIds.length === 0) {
            alert("'나만의 문제집'이 비어있습니다."); return;
        }
        const allQuestions = [...questionData, ...aiQuestionData];
        const savedQuestions = allQuestions.filter(q => savedIds.includes(q.id));
        displayQuestionsInModal(savedQuestions, '⭐️ 나만의 문제집');
    });

    document.getElementById('save-questions-btn').addEventListener('click', () => {
        const checkboxes = modalBody.querySelectorAll('.save-checkbox:checked');
        if (checkboxes.length === 0) {
            alert('저장할 문제를 선택해주세요.'); return;
        }
        let savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        checkboxes.forEach(cb => {
            const id = cb.closest('.question-item').dataset.id;
            if (!savedIds.includes(id)) savedIds.push(id);
        });
        localStorage.setItem('myQuizIds', JSON.stringify(savedIds));
        alert(`${checkboxes.length}개의 문제가 '나만의 문제집'에 저장되었습니다.`);
        checkboxes.forEach(cb => cb.checked = false);
    });
    
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        switchView('archive-view');
        renderArchive(query);
    });

    document.getElementById('close-modal').addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // --- Initial Load ---
    document.getElementById('app-version').textContent = APP_VERSION;
    renderLatestReview();
    renderArchive();
    populateChapterSelects();
    switchView('review-view');
});