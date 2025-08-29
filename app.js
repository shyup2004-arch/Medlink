document.addEventListener('DOMContentLoaded', function() {
    // --- App Version ---
    const APP_VERSION = "v2.4";

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

    // --- Firebase Data Loading ---
    function initializeApp() {
        document.getElementById('app-version').textContent = APP_VERSION;
        
        if (typeof firebase === 'undefined' || typeof database === 'undefined' || typeof firebase.functions === 'undefined') {
            const errorMsg = "<p style='color: red; font-weight: bold;'>[오류] Firebase 초기화 실패.</p>";
            archiveList.innerHTML = errorMsg;
            latestReviewContent.innerHTML = errorMsg;
            return;
        }

        // Initialize Cloud Functions
        const functions = firebase.functions();
        // For local testing: functions.useEmulator("localhost", 5001);
        gradeEssayFunction = functions.httpsCallable('gradeEssay');


        const dbRef = database.ref();
        dbRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                lectureData = data.lectures ? Object.values(data.lectures) : [];
                questionData = data.questions ? Object.values(data.questions) : [];
                latestLectureData = data.latestLecture || null;
                
                setupEventListeners();
                renderLatestReview();
                renderArchive();
                populateChapterSelect();
                renderEssayQuestions();
                switchView('review-view');
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
            // ... (render logic remains the same)
        } else {
            latestReviewContent.innerHTML = '<p>새로운 강의 자료가 추가되면 여기에 표시됩니다.</p>';
        }
    }

    function renderArchive(filter = '') {
        // ... (render logic remains the same)
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
        const essayQuestions = questionData.filter(q => 
            q.question.includes('설명하시오') || 
            q.question.includes('과정에 대해') ||
            q.question.includes('이름과 특징') ||
            q.question.includes('이름은 무엇이며') ||
            q.question.includes('성질 두 가지와')
        );
        
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
                <div class="essay-feedback-area">
                    <div class="feedback-content"></div>
                </div>
            `;
            essayQuestionContainer.appendChild(item);
        });
    }

    function populateChapterSelect() {
        // ... (same logic)
    }

    function displayQuestionsInModal(questions, title) {
        // ... (same logic)
    }
    
    function removeQuestionFromMyQuiz(questionId) {
        // ... (same logic)
    }

    function switchView(targetId) {
        // ... (same logic)
    }
    
    function toggleSidebar(forceOpen) {
        // ... (same logic)
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
    function setupEventListeners() {
        document.body.addEventListener('click', function(e) {
            const title = e.target.closest('.lecture-title, .question-title');
            if (title && !e.target.closest('.question-item')) {
                toggleContent(title);
            }
            
            const gradeBtn = e.target.closest('.grade-essay-btn');
            if (gradeBtn) {
                handleGradeEssay(gradeBtn);
            }
        });
        // ... (rest of the event listeners are the same)
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
    }

    // --- Initial Load ---
    initializeApp();
});