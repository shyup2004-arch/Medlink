document.addEventListener('DOMContentLoaded', function() {
    // --- App Version ---
    const APP_VERSION = "v2.5";

    // --- Global State ---
    let lectureData = [];
    let questionData = [];
    let latestLectureData = null;

    // --- DOM Elements ---
    const archiveList = document.getElementById('archive-list');
    const chapterSelect = document.getElementById('chapter-select');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('quiz-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');
    const views = document.querySelectorAll('.view');
    const latestReviewContent = document.getElementById('latest-review-content');
    const essayQuestionContainer = document.getElementById('essay-question-container');

    // --- Firebase Setup ---
    let gradeEssayFunction;

    // --- App Initialization ---
    function initializeApp() {
        document.getElementById('app-version').textContent = APP_VERSION;
        
        if (typeof firebase === 'undefined' || typeof database ==='undefined' || typeof firebase.functions === 'undefined') {
            const errorMsg = "<p style='color: red; font-weight: bold;'>[오류] Firebase 초기화 실패.</p>";
            archiveList.innerHTML = errorMsg;
            latestReviewContent.innerHTML = errorMsg;
            return;
        }

        gradeEssayFunction = firebase.functions().httpsCallable('gradeEssay');

        const dbRef = database.ref();
        dbRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                lectureData = data.lectures ? Object.values(data.lectures) : [];
                questionData = data.questions ? Object.values(data.questions) : [];
                latestLectureData = data.latestLecture || null;
                
                // Render content and then set up listeners
                renderLatestReview();
                renderArchive();
                populateChapterSelect();
                renderEssayQuestions();
                switchView('review-view'); // Set initial view
            } else {
                const errorMsg = "<p style='color: red; font-weight: bold;'>[오류] Firebase에서 데이터를 찾을 수 없습니다.</p>";
                archiveList.innerHTML = errorMsg;
                latestReviewContent.innerHTML = errorMsg;
            }
        }, (error) => {
            const errorMsg = `<p style='color: red; font-weight: bold;'>[오류] 데이터 로딩 중 문제가 발생했습니다.</p>`;
            archiveList.innerHTML = errorMsg;
            latestReviewContent.innerHTML = errorMsg;
        });
    }

    // --- Core Functions ---
    function toggleContent(element) {
        const content = element.nextElementSibling;
        if (content) {
            content.style.display = (content.style.display === 'block') ? 'none' : 'block';
        }
    }
    
    function renderLatestReview() {
        if (latestLectureData) {
            let quizHTML = (latestLectureData.reviewQuiz || []).map((quiz, index) => `
                <div class="question-item" style="padding: 10px; margin-top: 15px;">
                    <div class="question-title"><span>Q${index + 1}. ${quiz.question}</span></div>
                    <div class="content"><pre>${quiz.answer}</pre></div>
                </div>`).join('');
            latestReviewContent.innerHTML = `<h4><strong>${latestLectureData.title}</strong> (${latestLectureData.professor})</h4><div class="summary-box">${latestLectureData.summary}</div><h4 style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;"><strong>🎯 핵심 확인 퀴즈</strong></h4>${quizHTML}`;
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
                const summaryContent = lecture.summary ? `<div class="summary-box">${lecture.summary}</div>` : `<p><i>- 향후 강의자료 요약 내용으로 채워집니다. -</i></p>`;
                const item = document.createElement('div');
                item.className = 'lecture-item';
                item.innerHTML = `<div class="lecture-title"><span>${lecture.title}</span><span class="professor-tag">${lecture.professor}</span></div><div class="content">${summaryContent}</div>`;
                archiveList.appendChild(item);
            });
        }
        if (query) {
            const matchingQuestions = questionData.filter(q => q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query) || q.professor.toLowerCase().includes(query));
            if (matchingQuestions.length > 0) {
                archiveList.innerHTML += '<h3 style="margin-top:20px;">관련 문제</h3>';
                matchingQuestions.forEach(q => {
                    const item = document.createElement('div');
                    item.className = 'question-item';
                    item.innerHTML = `<div class="question-title"><span>${q.question}</span><span class="professor-tag">${q.professor} (${q.exam})</span></div><div class="content"><pre>${q.answer}</pre></div>`;
                    archiveList.appendChild(item);
                });
            }
        }
        if (archiveList.innerHTML === '') {
            archiveList.innerHTML = query ? '<p>검색 결과가 없습니다.</p>' : '<p>강의 자료가 없습니다.</p>';
        }
    }

    function renderEssayQuestions() {
        essayQuestionContainer.innerHTML = '';
        const essayQuestions = questionData.filter(q => q.question.includes('설명하시오') || q.question.includes('과정에 대해') || q.question.includes('이름과 특징') || q.question.includes('이름은 무엇이며') || q.question.includes('성질 두 가지와'));
        if (essayQuestions.length === 0) {
            essayQuestionContainer.innerHTML = '<p>연습할 서술형 문제가 아직 없습니다.</p>';
            return;
        }
        essayQuestions.forEach(q => {
            const item = document.createElement('div');
            item.className = 'essay-item';
            item.dataset.id = q.id;
            item.innerHTML = `
                <div class="essay-item-header">
                    <h3 class="essay-question">${q.question}</h3>
                    <span class="professor-tag">${q.professor} (${q.exam})</span>
                </div>
                <textarea class="essay-answer-area" placeholder="이곳에 답안을 작성해주세요..."></textarea>
                <button class="action-button grade-essay-btn" style="width: 100%;">AI 채점하기</button>
                <div class="essay-feedback-area"><div class="feedback-content"></div></div>`;
            essayQuestionContainer.appendChild(item);
        });
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

    function switchView(targetId) {
        views.forEach(view => view.classList.remove('active-view'));
        const targetView = document.getElementById(targetId);
        if (targetView) {
            targetView.classList.add('active-view');
        }
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if(navLink.dataset.target === targetId) {
                navLink.classList.add('active');
                if (navLink.parentElement.classList.contains('nav-submenu')) {
                    navLink.closest('.nav-group').open = true;
                }
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

    async function handleGradeEssay(button) {
        const item = button.closest('.essay-item');
        const answerArea = item.querySelector('.essay-answer-area');
        const feedbackArea = item.querySelector('.essay-feedback-area');
        const feedbackContent = item.querySelector('.feedback-content');
        const userAnswer = answerArea.value.trim();
        if (userAnswer.length < 10) {
            alert('답안을 10자 이상 작성해주세요.');
            return;
        }
        const questionId = parseInt(item.dataset.id);
        const questionInfo = questionData.find(q => q.id === questionId);
        button.disabled = true;
        button.textContent = 'AI 채점 중...';
        feedbackArea.style.display = 'block';
        feedbackContent.innerHTML = '<div class="spinner"></div>';
        try {
            const result = await gradeEssayFunction({ 
                question: questionInfo.question,
                correctAnswer: questionInfo.answer,
                answer: userAnswer
            });
            feedbackContent.innerHTML = result.data.feedback;
        } catch (error) {
            console.error('Cloud Function Error:', error);
            feedbackContent.innerHTML = `<p style="color: red;">채점 중 오류가 발생했습니다: ${error.message}</p>`;
        } finally {
            button.disabled = false;
            button.textContent = 'AI 다시 채점하기';
        }
    }

    // --- Event Listeners Setup ---
    document.body.addEventListener('click', function(e) {
        // Event Delegation for dynamically created elements
        const lectureTitle = e.target.closest('.lecture-title');
        if(lectureTitle) toggleContent(lectureTitle);

        const questionTitle = e.target.closest('.question-title');
        if(questionTitle && !e.target.closest('.question-item [data-id]')) toggleContent(questionTitle);
        
        const gradeBtn = e.target.closest('.grade-essay-btn');
        if (gradeBtn) handleGradeEssay(gradeBtn);
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
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.tagName === 'A') {
                e.preventDefault();
                const targetId = link.dataset.target;
                if(targetId) {
                    switchView(targetId);
                }
                if (window.innerWidth < 768) {
                    toggleSidebar(false);
                }
            }
        });
    });
    
    document.getElementById('sidebar-open-btn').addEventListener('click', () => toggleSidebar(true));
    document.getElementById('sidebar-close-btn').addEventListener('click', () => toggleSidebar(false));

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
    
    document.getElementById('show-my-quiz-btn').addEventListener('click', () => {
        const savedIds = JSON.parse(localStorage.getItem('myQuizIds') || '[]');
        if (savedIds.length === 0) {
            alert("'나만의 문제집'이 비어있습니다."); return;
        }
        const savedQuestions = questionData.filter(q => savedIds.includes(q.id));
        displayQuestionsInModal(savedQuestions, '나만의 문제집');
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
        switchView('archive-view');
        renderArchive(query);
    });

    document.getElementById('close-modal').addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // --- Initial Load ---
    initializeApp();
});